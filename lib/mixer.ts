export interface MixerSettings {
  lpf: number
  hpf: number
  reverb: number
  echo: number
  softness: number
}

const LPF_CLOSED_HZ = 180
const LPF_OPEN_HZ = 18000
const DEFAULT_LPF_HZ = 800

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value))
}

export function lpfHzFromAmount(amount: number) {
  const t = clamp01(amount)
  const min = Math.log(LPF_CLOSED_HZ)
  const max = Math.log(LPF_OPEN_HZ)
  return Math.exp(max + (min - max) * t)
}

export function lpfAmountFromHz(hz: number) {
  const min = Math.log(LPF_CLOSED_HZ)
  const max = Math.log(LPF_OPEN_HZ)
  const clamped = Math.min(LPF_OPEN_HZ, Math.max(LPF_CLOSED_HZ, hz))
  return (Math.log(clamped) - max) / (min - max)
}

export function hpfHzFromAmount(amount: number) {
  const t = clamp01(amount)
  const min = Math.log(10)
  const max = Math.log(5000)
  return Math.exp(min + (max - min) * t)
}

// The low-pass sits where the player already was (800 Hz). Everything else
// starts silent so the crushed preset is what you hear before touching a knob.
export const DEFAULT_MIXER: MixerSettings = {
  lpf: lpfAmountFromHz(DEFAULT_LPF_HZ),
  hpf: 0,
  reverb: 0,
  echo: 0,
  softness: 0,
}

function makeDistortionCurve(amount: number) {
  const k = amount
  const n_samples = 44100
  const curve = new Float32Array(n_samples)
  const deg = Math.PI / 180

  for (let i = 0; i < n_samples; ++i) {
    const x = (i * 2) / n_samples - 1
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x))
  }

  return curve
}

function makeSoftRoomImpulse(ctx: AudioContext) {
  const rate = ctx.sampleRate
  const length = Math.floor(rate * 1.7)
  const impulse = ctx.createBuffer(2, length, rate)

  for (let channel = 0; channel < 2; channel++) {
    const data = impulse.getChannelData(channel)
    for (let i = 0; i < length; i++) {
      const t = i / length
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 3.4)
    }

    let prev = 0
    const coefficient = 0.12 + channel * 0.03
    for (let i = 0; i < length; i++) {
      prev += coefficient * (data[i] - prev)
      data[i] = prev
    }
  }

  return impulse
}

export interface MixerGraph {
  hpf: BiquadFilterNode
  lpf: BiquadFilterNode
  lowShelf: BiquadFilterNode
  presence: BiquadFilterNode
  highShelf: BiquadFilterNode
  dry: GainNode
  echoWet: GainNode
  echoFeedback: GainNode
  reverbWet: GainNode
}

export interface AttachedMixer {
  ctx: AudioContext
  graph: MixerGraph
}

const MIXER_KEY = "__emiBeatsMixer"

type AudioWithMixer = HTMLAudioElement & { [MIXER_KEY]?: AttachedMixer }

export function readAttachedMixer(audio: HTMLAudioElement): AttachedMixer | null {
  const attached = (audio as AudioWithMixer)[MIXER_KEY]
  if (!attached || attached.ctx.state === "closed") return null
  return attached
}

export function attachMixer(audio: HTMLAudioElement, attached: AttachedMixer) {
  ;(audio as AudioWithMixer)[MIXER_KEY] = attached
}

export function createMixerGraph(audio: HTMLAudioElement, ctx: AudioContext): MixerGraph {
  const source = ctx.createMediaElementSource(audio)

  const hpf = ctx.createBiquadFilter()
  hpf.type = "highpass"
  hpf.frequency.value = 10
  hpf.Q.value = 0.707

  const lpf = ctx.createBiquadFilter()
  lpf.type = "lowpass"
  lpf.frequency.value = DEFAULT_LPF_HZ
  lpf.Q.value = 1

  const distortion = ctx.createWaveShaper()
  distortion.curve = makeDistortionCurve(1.5)

  const lowShelf = ctx.createBiquadFilter()
  lowShelf.type = "lowshelf"
  lowShelf.frequency.value = 260
  lowShelf.gain.value = 0

  const presence = ctx.createBiquadFilter()
  presence.type = "peaking"
  presence.frequency.value = 3000
  presence.Q.value = 0.8
  presence.gain.value = 0

  const highShelf = ctx.createBiquadFilter()
  highShelf.type = "highshelf"
  highShelf.frequency.value = 5200
  highShelf.gain.value = 0

  const dry = ctx.createGain()
  const echoWet = ctx.createGain()
  const echoFeedback = ctx.createGain()
  const reverbWet = ctx.createGain()
  dry.gain.value = 1
  echoWet.gain.value = 0
  echoFeedback.gain.value = 0
  reverbWet.gain.value = 0

  const delay = ctx.createDelay(1.5)
  delay.delayTime.value = 0.37

  const echoTone = ctx.createBiquadFilter()
  echoTone.type = "lowpass"
  echoTone.frequency.value = 2400
  echoTone.Q.value = 0.7

  const reverbTone = ctx.createBiquadFilter()
  reverbTone.type = "lowpass"
  reverbTone.frequency.value = 6500

  const convolver = ctx.createConvolver()
  convolver.buffer = makeSoftRoomImpulse(ctx)

  const master = ctx.createGain()
  master.gain.value = 1

  source.connect(hpf)
  hpf.connect(lpf)
  lpf.connect(distortion)
  distortion.connect(lowShelf)
  lowShelf.connect(presence)
  presence.connect(highShelf)

  highShelf.connect(dry)
  dry.connect(master)

  highShelf.connect(delay)
  delay.connect(echoTone)
  echoTone.connect(echoFeedback)
  echoFeedback.connect(delay)
  echoTone.connect(echoWet)
  echoWet.connect(master)

  highShelf.connect(reverbTone)
  reverbTone.connect(convolver)
  convolver.connect(reverbWet)
  reverbWet.connect(master)

  master.connect(ctx.destination)

  return { hpf, lpf, lowShelf, presence, highShelf, dry, echoWet, echoFeedback, reverbWet }
}

export function applyMixerSettings(graph: MixerGraph, ctx: AudioContext, settings: MixerSettings) {
  const time = ctx.currentTime
  const glide = 0.02
  const lpf = clamp01(settings.lpf)
  const hpf = clamp01(settings.hpf)
  const reverb = clamp01(settings.reverb)
  const echo = clamp01(settings.echo)
  const softness = clamp01(settings.softness)

  graph.lpf.frequency.setTargetAtTime(lpfHzFromAmount(lpf), time, glide)
  graph.hpf.frequency.setTargetAtTime(hpfHzFromAmount(hpf), time, glide)

  // Softness is a tilt, not another cutoff: lows come forward, presence and
  // hiss step back, so the track gets rounder while the low-pass stays put.
  graph.lowShelf.gain.setTargetAtTime(softness * 6, time, glide)
  graph.presence.gain.setTargetAtTime(softness * -4.5, time, glide)
  graph.highShelf.gain.setTargetAtTime(softness * -9, time, glide)

  graph.echoWet.gain.setTargetAtTime(echo * 0.48, time, glide)
  graph.echoFeedback.gain.setTargetAtTime(echo * 0.4, time, glide)
  graph.reverbWet.gain.setTargetAtTime(reverb * 0.55, time, glide)
  graph.dry.gain.setTargetAtTime(1 - reverb * 0.28 - echo * 0.2, time, glide)
}
