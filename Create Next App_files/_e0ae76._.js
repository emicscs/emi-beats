(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_e0ae76._.js", {

"[project]/lib/sample-data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sampleTracks": (()=>sampleTracks)
});
const sampleTracks = [
    {
        id: "track-1",
        title: "FLY ME TO THE MOON",
        artist: "Yoko Takahashi",
        album: "Neon Genesis Evangelion",
        duration: 272,
        cover: "/album-covers/miscellaneous_17.jpg",
        file: "/music/FLY ME TO THE MOON.mp3"
    },
    {
        id: "track-2",
        title: "Lady Brown",
        artist: "Nujabes",
        album: "365",
        duration: 217,
        cover: "/album-covers/miscellaneous_17.jpg",
        file: "/music/LadyBrown.mp3"
    },
    {
        id: "track-3",
        title: "French Toast",
        artist: "Westside Gunn",
        album: "Pray for Paris",
        duration: 180,
        cover: "/album-covers/miscellaneous_19.jpg",
        file: "/music/French Toast.mp3"
    },
    {
        id: "track-4",
        title: "Asleep Among Endives",
        artist: "Ichiko Aoba",
        album: "Asleep Among Endives",
        duration: 300,
        cover: "/album-covers/miscellaneous_20.jpg",
        file: "/music/Asleep Among Endives.mp3"
    },
    {
        id: "track-5",
        title: "Girls Just Want to Have Fun",
        artist: "Bladee",
        album: "Crest",
        duration: 300,
        cover: "/album-covers/miscellaneous_21.jpg",
        file: "/music/Girls Just Want to Have Fun.mp3"
    },
    {
        id: "track-6",
        title: "BOY",
        artist: "Unknown Artist",
        album: "Unknown Album",
        duration: 240,
        cover: "/album-covers/miscellaneous_22.jpg",
        file: "/music/BOY.mp3"
    },
    {
        id: "track-7",
        title: "Been Ballin",
        artist: "Unknown Artist",
        album: "Unknown Album",
        duration: 180,
        cover: "/album-covers/miscellaneous_23.jpg",
        file: "/music/Been Ballin.mp3"
    },
    {
        id: "track-8",
        title: "Before I Let Go",
        artist: "Unknown Artist",
        album: "Unknown Album",
        duration: 300,
        cover: "/album-covers/miscellaneous_24.jpg",
        file: "/music/Before I Let Go.mp3"
    },
    {
        id: "track-9",
        title: "Best Friend",
        artist: "Unknown Artist",
        album: "Unknown Album",
        duration: 270,
        cover: "/album-covers/miscellaneous_25.jpg",
        file: "/music/Best Friend.mp3"
    },
    {
        id: "track-10",
        title: "Binibini",
        artist: "Unknown Artist",
        album: "Unknown Album",
        duration: 230,
        cover: "/album-covers/miscellaneous_26.jpg",
        file: "/music/Binibini.mp3"
    },
    {
        id: "track-11",
        title: "Black & Tan",
        artist: "Unknown Artist",
        album: "Unknown Album",
        duration: 180,
        cover: "/album-covers/miscellaneous_27.jpg",
        file: "/music/Black & Tan.mp3"
    },
    {
        id: "track-12",
        title: "Bubble Gum",
        artist: "Unknown Artist",
        album: "Unknown Album",
        duration: 210,
        cover: "/album-covers/miscellaneous_28.jpg",
        file: "/music/Bubble Gum.mp3"
    },
    {
        id: "track-13",
        title: "Candy Rain",
        artist: "Unknown Artist",
        album: "Unknown Album",
        duration: 290,
        cover: "/album-covers/miscellaneous_29.jpg",
        file: "/music/Candy Rain.mp3"
    },
    {
        id: "track-14",
        title: "Cavity",
        artist: "Unknown Artist",
        album: "Unknown Album",
        duration: 230,
        cover: "/album-covers/miscellaneous_30.jpg",
        file: "/music/Cavity.mp3"
    },
    {
        id: "track-15",
        title: "Cherish the Day",
        artist: "Unknown Artist",
        album: "Unknown Album",
        duration: 320,
        cover: "/album-covers/miscellaneous_31.jpg",
        file: "/music/Cherish the Day.mp3"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/track-info.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>TrackInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function TrackInfo({ track, onAlbumArtChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: "0 0 200px"
        },
        children: [
            track?.cover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: track.cover || "/placeholder.svg",
                alt: `${track.album} cover`,
                style: {
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    marginBottom: "16px"
                }
            }, void 0, false, {
                fileName: "[project]/components/track-info.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "200px",
                    height: "200px",
                    borderRadius: "4px",
                    background: "linear-gradient(135deg, #0078d7, #0099ff)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    marginBottom: "16px",
                    color: "white",
                    fontWeight: 600
                },
                children: track?.album || "No Album"
            }, void 0, false, {
                fileName: "[project]/components/track-info.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginBottom: "16px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontWeight: 600,
                            fontSize: "16px",
                            marginBottom: "4px",
                            color: "#333"
                        },
                        children: track?.title || "No Track Selected"
                    }, void 0, false, {
                        fileName: "[project]/components/track-info.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "14px",
                            color: "#666"
                        },
                        children: [
                            track?.artist || "Unknown Artist",
                            " • ",
                            track?.album || "Unknown Album"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/track-info.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/track-info.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            track && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onAlbumArtChange,
                style: {
                    width: "100%",
                    padding: "8px 0",
                    background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                    border: "1px solid #ccc",
                    borderRadius: "3px",
                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                    color: "#333",
                    cursor: "pointer",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "16px"
                        },
                        children: "🖼️"
                    }, void 0, false, {
                        fileName: "[project]/components/track-info.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Change Album Art"
                    }, void 0, false, {
                        fileName: "[project]/components/track-info.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/track-info.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/track-info.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = TrackInfo;
var _c;
__turbopack_refresh__.register(_c, "TrackInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn),
    "formatTime": (()=>formatTime)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatTime(time) {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/player-controls.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PlayerControls)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function PlayerControls({ currentTime, duration, isPlaying, volume, isMuted, progressBarRef, volumeBarRef, onSeek, onVolumeChange, onTogglePlay, onPreviousTrack, onNextTrack, onToggleMute }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: progressBarRef,
                onClick: onSeek,
                style: {
                    height: "8px",
                    background: "rgba(0, 0, 0, 0.1)",
                    borderRadius: "4px",
                    marginBottom: "8px",
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: "100%",
                        background: "linear-gradient(to bottom, #4cc6ff, #0078d7)",
                        width: `${currentTime / duration * 100}%`,
                        borderRadius: "4px",
                        position: "relative"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/player-controls.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/player-controls.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    color: "#666",
                    marginBottom: "16px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(currentTime)
                    }, void 0, false, {
                        fileName: "[project]/components/player-controls.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(duration)
                    }, void 0, false, {
                        fileName: "[project]/components/player-controls.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/player-controls.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    gap: "16px",
                    marginBottom: "16px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onPreviousTrack,
                        style: {
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                            background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            fontSize: "16px"
                        },
                        children: "⏮"
                    }, void 0, false, {
                        fileName: "[project]/components/player-controls.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onTogglePlay,
                        style: {
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                            background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            fontSize: "20px"
                        },
                        children: isPlaying ? "⏸" : "▶"
                    }, void 0, false, {
                        fileName: "[project]/components/player-controls.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNextTrack,
                        style: {
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                            background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            fontSize: "16px"
                        },
                        children: "⏭"
                    }, void 0, false, {
                        fileName: "[project]/components/player-controls.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/player-controls.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "20px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onToggleMute,
                        style: {
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                            background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            fontSize: "14px"
                        },
                        children: isMuted ? "🔇" : "🔊"
                    }, void 0, false, {
                        fileName: "[project]/components/player-controls.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: volumeBarRef,
                        onClick: onVolumeChange,
                        style: {
                            flex: "1",
                            height: "6px",
                            background: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "3px",
                            position: "relative",
                            overflow: "hidden",
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                            boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
                            cursor: "pointer"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: "100%",
                                background: "linear-gradient(to bottom, #4cc6ff, #0078d7)",
                                width: `${volume * 100}%`,
                                borderRadius: "3px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/player-controls.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/player-controls.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/player-controls.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = PlayerControls;
var _c;
__turbopack_refresh__.register(_c, "PlayerControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/playlist.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Playlist)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function Playlist({ tracks, currentTrackIndex, onTrackSelect, onContextMenu, onRemoveTrack }) {
    if (tracks.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center",
                padding: "20px",
                color: "#666"
            },
            children: "No tracks available. Upload MP3 files to get started."
        }, void 0, false, {
            fileName: "[project]/components/playlist.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxHeight: "200px",
            overflowY: "auto",
            border: "1px solid #ccc",
            borderRadius: "4px",
            background: "rgba(255, 255, 255, 0.5)",
            padding: "8px"
        },
        children: tracks.map((track, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>onTrackSelect(index),
                onContextMenu: (e)=>onContextMenu(e, index),
                style: {
                    display: "flex",
                    alignItems: "center",
                    padding: "8px",
                    borderRadius: "4px",
                    marginBottom: "4px",
                    cursor: "pointer",
                    background: index === currentTrackIndex ? "rgba(0, 120, 215, 0.1)" : "transparent",
                    border: index === currentTrackIndex ? "1px solid rgba(0, 120, 215, 0.3)" : "1px solid transparent",
                    transition: "background 0.2s"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "24px",
                            height: "24px",
                            marginRight: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "12px",
                            color: "#666"
                        },
                        children: index === currentTrackIndex ? "▶" : (index + 1).toString().padStart(2, "0")
                    }, void 0, false, {
                        fileName: "[project]/components/playlist.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: "1"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: index === currentTrackIndex ? 600 : 400,
                                    fontSize: "14px",
                                    color: "#333",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                },
                                children: track.title
                            }, void 0, false, {
                                fileName: "[project]/components/playlist.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "12px",
                                    color: "#666",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                },
                                children: track.artist
                            }, void 0, false, {
                                fileName: "[project]/components/playlist.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/playlist.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "12px",
                            color: "#666",
                            marginLeft: "8px"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(track.duration)
                    }, void 0, false, {
                        fileName: "[project]/components/playlist.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onRemoveTrack(index);
                        },
                        style: {
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                            background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            fontSize: "14px",
                            marginLeft: "8px",
                            color: "#666"
                        },
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/components/playlist.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, track.id, true, {
                fileName: "[project]/components/playlist.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/playlist.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = Playlist;
var _c;
__turbopack_refresh__.register(_c, "Playlist");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/background-selector.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>BackgroundSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function BackgroundSelector({ currentBackground, onBackgroundChange, onCustomBackgroundUpload }) {
    const backgrounds = [
        {
            id: "1",
            name: "metro 1",
            path: "/backgrounds/metro_1.jpg"
        },
        {
            id: "2",
            name: "metro 2",
            path: "/backgrounds/metro_2.jpg"
        },
        {
            id: "3",
            name: "metro 3",
            path: "/backgrounds/metro_3.jpg"
        },
        {
            id: "4",
            name: "metro 4",
            path: "/backgrounds/metro_4.jpg"
        },
        {
            id: "5",
            name: "metro 5",
            path: "/backgrounds/metro_5.jpg"
        },
        {
            id: "6",
            name: "metro 6",
            path: "/backgrounds/metro_6.jpg"
        },
        {
            id: "7",
            name: "metro 7",
            path: "/backgrounds/metro_7.jpg"
        },
        {
            id: "8",
            name: "metro 8",
            path: "/backgrounds/metro_8.jpg"
        },
        {
            id: "9",
            name: "metro 9",
            path: "/backgrounds/metro_9.jpg"
        },
        {
            id: "10",
            name: "metro 10",
            path: "/backgrounds/metro_10.jpg"
        },
        {
            id: "11",
            name: "metro 11",
            path: "/backgrounds/metro_11.jpg"
        },
        {
            id: "12",
            name: "metro 12",
            path: "/backgrounds/metro_12.jpg"
        },
        {
            id: "13",
            name: "metro 13",
            path: "/backgrounds/metro_13.jpg"
        },
        {
            id: "14",
            name: "metro 14",
            path: "/backgrounds/metro_14.jpg"
        },
        {
            id: "15",
            name: "metro 15",
            path: "/backgrounds/metro_15.jpg"
        },
        {
            id: "16",
            name: "metro 16",
            path: "/backgrounds/metro_16.jpg"
        },
        {
            id: "17",
            name: "metro 17",
            path: "/backgrounds/metro_17.jpg"
        },
        {
            id: "18",
            name: "metro 18",
            path: "/backgrounds/metro_18.jpg"
        },
        {
            id: "19",
            name: "metro 19",
            path: "/backgrounds/metro_19.jpg"
        },
        {
            id: "20",
            name: "metro 20",
            path: "/backgrounds/metro_20.jpg"
        },
        {
            id: "21",
            name: "metro 21",
            path: "/backgrounds/metro_21.jpg"
        },
        {
            id: "22",
            name: "metro 22",
            path: "/backgrounds/metro_22.jpg"
        },
        {
            id: "23",
            name: "metro 23",
            path: "/backgrounds/metro_23.jpg"
        },
        {
            id: "24",
            name: "metro 24",
            path: "/backgrounds/metro_24.jpg"
        },
        {
            id: "25",
            name: "metro 25",
            path: "/backgrounds/metro_25.jpg"
        },
        {
            id: "26",
            name: "metro 26",
            path: "/backgrounds/metro_26.jpg"
        },
        {
            id: "27",
            name: "metro 27",
            path: "/backgrounds/metro_27.jpg"
        },
        {
            id: "28",
            name: "metro 28",
            path: "/backgrounds/metro_28.jpg"
        },
        {
            id: "29",
            name: "metro 29",
            path: "/backgrounds/metro_29.jpg"
        },
        {
            id: "30",
            name: "metro 30",
            path: "/backgrounds/metro_30.jpg"
        },
        {
            id: "31",
            name: "metro 31",
            path: "/backgrounds/metro_31.jpg"
        },
        {
            id: "32",
            name: "metro 32",
            path: "/backgrounds/metro_32.jpg"
        },
        {
            id: "33",
            name: "asadal 1",
            path: "/backgrounds/asadal_stock_1.jpg"
        },
        {
            id: "34",
            name: "asadal 2",
            path: "/backgrounds/asadal_stock_2.jpg"
        },
        {
            id: "35",
            name: "asadal 3",
            path: "/backgrounds/asadal_stock_3.jpg"
        },
        {
            id: "36",
            name: "asadal 4",
            path: "/backgrounds/asadal_stock_4.jpg"
        },
        {
            id: "37",
            name: "asadal 5",
            path: "/backgrounds/asadal_stock_5.jpg"
        },
        {
            id: "38",
            name: "asadal 6",
            path: "/backgrounds/asadal_stock_6.jpg"
        },
        {
            id: "39",
            name: "asadal 7",
            path: "/backgrounds/asadal_stock_7.jpg"
        },
        {
            id: "40",
            name: "asadal 8",
            path: "/backgrounds/asadal_stock_8.jpg"
        },
        {
            id: "41",
            name: "asadal 9",
            path: "/backgrounds/asadal_stock_9.jpg"
        },
        {
            id: "42",
            name: "asadal 10",
            path: "/backgrounds/asadal_stock_10.jpg"
        },
        {
            id: "43",
            name: "asadal 11",
            path: "/backgrounds/asadal_stock_11.jpg"
        },
        {
            id: "44",
            name: "asadal 12",
            path: "/backgrounds/asadal_stock_12.jpg"
        },
        {
            id: "45",
            name: "asadal 13",
            path: "/backgrounds/asadal_stock_13.jpg"
        },
        {
            id: "46",
            name: "asadal 14",
            path: "/backgrounds/asadal_stock_14.jpg"
        },
        {
            id: "47",
            name: "asadal 15",
            path: "/backgrounds/asadal_stock_15.jpg"
        },
        {
            id: "48",
            name: "asadal 16",
            path: "/backgrounds/asadal_stock_16.jpg"
        },
        {
            id: "49",
            name: "asadal 17",
            path: "/backgrounds/asadal_stock_17.jpg"
        },
        {
            id: "50",
            name: "asadal 18",
            path: "/backgrounds/asadal_stock_18.jpg"
        },
        {
            id: "51",
            name: "asadal 19",
            path: "/backgrounds/asadal_stock_19.jpg"
        },
        {
            id: "52",
            name: "asadal 20",
            path: "/backgrounds/asadal_stock_20.jpg"
        },
        {
            id: "53",
            name: "asadal 21",
            path: "/backgrounds/asadal_stock_21.jpg"
        },
        {
            id: "54",
            name: "asadal 22",
            path: "/backgrounds/asadal_stock_22.jpg"
        },
        {
            id: "55",
            name: "asadal 23",
            path: "/backgrounds/asadal_stock_23.jpg"
        },
        {
            id: "56",
            name: "asadal 24",
            path: "/backgrounds/asadal_stock_24.jpg"
        },
        {
            id: "57",
            name: "asadal 25",
            path: "/backgrounds/asadal_stock_25.jpg"
        },
        {
            id: "58",
            name: "asadal 26",
            path: "/backgrounds/asadal_stock_26.jpg"
        },
        {
            id: "59",
            name: "asadal 27",
            path: "/backgrounds/asadal_stock_27.jpg"
        },
        {
            id: "60",
            name: "asadal 28",
            path: "/backgrounds/asadal_stock_28.jpg"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginTop: "20px",
            padding: "16px",
            background: "rgba(255, 255, 255, 0.5)",
            borderRadius: "4px",
            border: "1px solid #ccc"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    margin: "0 0 12px 0",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#333"
                },
                children: "Select Background"
            }, void 0, false, {
                fileName: "[project]/components/background-selector.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                    gap: "12px",
                    marginBottom: "16px"
                },
                children: backgrounds.map((bg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>onBackgroundChange(bg.path),
                        style: {
                            position: "relative",
                            cursor: "pointer",
                            borderRadius: "4px",
                            overflow: "hidden",
                            height: "80px",
                            border: currentBackground === bg.path ? "2px solid #0078d7" : "2px solid transparent"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: bg.path || "/placeholder.svg",
                                alt: bg.name,
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/background-selector.tsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: "4px",
                                    background: "rgba(0, 0, 0, 0.5)",
                                    color: "white",
                                    fontSize: "12px",
                                    textAlign: "center"
                                },
                                children: bg.name
                            }, void 0, false, {
                                fileName: "[project]/components/background-selector.tsx",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this)
                        ]
                    }, bg.id, true, {
                        fileName: "[project]/components/background-selector.tsx",
                        lineNumber: 350,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/background-selector.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "block",
                            marginBottom: "8px",
                            fontWeight: 600,
                            color: "#333",
                            fontSize: "14px"
                        },
                        children: "Upload Custom Background"
                    }, void 0, false, {
                        fileName: "[project]/components/background-selector.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: onCustomBackgroundUpload,
                                style: {
                                    display: "none"
                                },
                                id: "bg-upload"
                            }, void 0, false, {
                                fileName: "[project]/components/background-selector.tsx",
                                lineNumber: 408,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "bg-upload",
                                style: {
                                    padding: "6px 12px",
                                    background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                                    border: "1px solid #ccc",
                                    borderRadius: "3px",
                                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                                    color: "#333",
                                    cursor: "pointer",
                                    fontSize: "14px"
                                },
                                children: "Browse..."
                            }, void 0, false, {
                                fileName: "[project]/components/background-selector.tsx",
                                lineNumber: 417,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    marginLeft: "10px",
                                    fontSize: "14px",
                                    color: "#666"
                                },
                                children: "Select an image file"
                            }, void 0, false, {
                                fileName: "[project]/components/background-selector.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/background-selector.tsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/background-selector.tsx",
                lineNumber: 390,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/background-selector.tsx",
        lineNumber: 321,
        columnNumber: 5
    }, this);
}
_c = BackgroundSelector;
var _c;
__turbopack_refresh__.register(_c, "BackgroundSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/album-art-selector.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>AlbumArtSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function AlbumArtSelector({ defaultAlbumArts, currentAlbumArt, onAlbumArtChange, onCustomAlbumArtUpload, onClose }) {
    // Add a predefined array of album arts similar to backgrounds
    const albumArts = [
        {
            id: "1",
            name: "cover 1",
            path: "/album-covers/miscellaneous_1.jpg"
        },
        {
            id: "2",
            name: "cover 2",
            path: "/album-covers/miscellaneous_2.jpg"
        },
        {
            id: "3",
            name: "cover 3",
            path: "/album-covers/miscellaneous_3.jpg"
        },
        {
            id: "4",
            name: "cover 4",
            path: "/album-covers/miscellaneous_4.jpg"
        },
        {
            id: "5",
            name: "cover 5",
            path: "/album-covers/miscellaneous_5.jpg"
        },
        {
            id: "6",
            name: "cover 6",
            path: "/album-covers/miscellaneous_6.jpg"
        },
        {
            id: "7",
            name: "cover 7",
            path: "/album-covers/miscellaneous_7.jpg"
        },
        {
            id: "8",
            name: "cover 8",
            path: "/album-covers/miscellaneous_8.jpg"
        },
        {
            id: "9",
            name: "cover 9",
            path: "/album-covers/miscellaneous_9.jpg"
        },
        {
            id: "10",
            name: "cover 10",
            path: "/album-covers/miscellaneous_10.jpg"
        },
        {
            id: "11",
            name: "cover 11",
            path: "/album-covers/miscellaneous_11.jpg"
        },
        {
            id: "12",
            name: "cover 12",
            path: "/album-covers/miscellaneous_12.jpg"
        },
        {
            id: "13",
            name: "cover 13",
            path: "/album-covers/miscellaneous_13.jpg"
        },
        {
            id: "14",
            name: "cover 14",
            path: "/album-covers/miscellaneous_14.jpg"
        },
        {
            id: "15",
            name: "cover 15",
            path: "/album-covers/miscellaneous_15.jpg"
        },
        {
            id: "16",
            name: "cover 16",
            path: "/album-covers/miscellaneous_16.jpg"
        },
        {
            id: "17",
            name: "cover 17",
            path: "/album-covers/miscellaneous_17.jpg"
        },
        {
            id: "18",
            name: "cover 18",
            path: "/album-covers/miscellaneous_18.jpg"
        },
        {
            id: "19",
            name: "cover 19",
            path: "/album-covers/miscellaneous_19.jpg"
        },
        {
            id: "20",
            name: "cover 20",
            path: "/album-covers/miscellaneous_20.jpg"
        },
        {
            id: "21",
            name: "cover 21",
            path: "/album-covers/miscellaneous_21.jpg"
        },
        {
            id: "22",
            name: "cover 22",
            path: "/album-covers/miscellaneous_22.jpg"
        },
        {
            id: "23",
            name: "cover 23",
            path: "/album-covers/miscellaneous_23.jpg"
        },
        {
            id: "24",
            name: "cover 24",
            path: "/album-covers/miscellaneous_24.jpg"
        },
        {
            id: "25",
            name: "cover 25",
            path: "/album-covers/miscellaneous_25.jpg"
        },
        {
            id: "26",
            name: "cover 26",
            path: "/album-covers/miscellaneous_26.jpg"
        },
        {
            id: "27",
            name: "cover 27",
            path: "/album-covers/miscellaneous_27.jpg"
        },
        {
            id: "28",
            name: "cover 28",
            path: "/album-covers/miscellaneous_28.jpg"
        },
        {
            id: "29",
            name: "cover 29",
            path: "/album-covers/miscellaneous_29.jpg"
        },
        {
            id: "30",
            name: "cover 30",
            path: "/album-covers/miscellaneous_30.jpg"
        },
        {
            id: "31",
            name: "cover 31",
            path: "/album-covers/miscellaneous_31.jpg"
        },
        {
            id: "32",
            name: "cover 32",
            path: "/album-covers/miscellaneous_32.jpg"
        },
        {
            id: "33",
            name: "cover 33",
            path: "/album-covers/miscellaneous_33.jpg"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginTop: "20px",
            padding: "16px",
            background: "rgba(255, 255, 255, 0.5)",
            borderRadius: "4px",
            border: "1px solid #ccc"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    margin: "0 0 12px 0",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#333"
                },
                children: "Select Album Art"
            }, void 0, false, {
                fileName: "[project]/components/album-art-selector.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                    gap: "12px",
                    marginBottom: "16px"
                },
                children: albumArts.map((art)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>onAlbumArtChange(art.path),
                        style: {
                            position: "relative",
                            cursor: "pointer",
                            borderRadius: "4px",
                            overflow: "hidden",
                            height: "100px",
                            border: currentAlbumArt === art.path ? "2px solid #0078d7" : "2px solid transparent"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: art.path || "/placeholder.svg",
                                alt: art.name,
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/album-art-selector.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: "4px",
                                    background: "rgba(0, 0, 0, 0.5)",
                                    color: "white",
                                    fontSize: "12px",
                                    textAlign: "center"
                                },
                                children: art.name
                            }, void 0, false, {
                                fileName: "[project]/components/album-art-selector.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        ]
                    }, art.id, true, {
                        fileName: "[project]/components/album-art-selector.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/album-art-selector.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "block",
                            marginBottom: "8px",
                            fontWeight: 600,
                            color: "#333",
                            fontSize: "14px"
                        },
                        children: "Upload Custom Album Art"
                    }, void 0, false, {
                        fileName: "[project]/components/album-art-selector.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: onCustomAlbumArtUpload,
                                style: {
                                    display: "none"
                                },
                                id: "art-upload"
                            }, void 0, false, {
                                fileName: "[project]/components/album-art-selector.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "art-upload",
                                style: {
                                    padding: "6px 12px",
                                    background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                                    border: "1px solid #ccc",
                                    borderRadius: "3px",
                                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                                    color: "#333",
                                    cursor: "pointer",
                                    fontSize: "14px"
                                },
                                children: "Browse..."
                            }, void 0, false, {
                                fileName: "[project]/components/album-art-selector.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    marginLeft: "10px",
                                    fontSize: "14px",
                                    color: "#666"
                                },
                                children: "Select an image file"
                            }, void 0, false, {
                                fileName: "[project]/components/album-art-selector.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/album-art-selector.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/album-art-selector.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "16px",
                    display: "flex",
                    justifyContent: "flex-end"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    style: {
                        padding: "6px 12px",
                        background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                        border: "1px solid #ccc",
                        borderRadius: "3px",
                        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                        color: "#333",
                        cursor: "pointer",
                        fontSize: "14px"
                    },
                    children: "Cancel"
                }, void 0, false, {
                    fileName: "[project]/components/album-art-selector.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/album-art-selector.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/album-art-selector.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
}
_c = AlbumArtSelector;
var _c;
__turbopack_refresh__.register(_c, "AlbumArtSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/context-menu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const ContextMenu = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ position, onPlay, onChangeAlbumArt, onRemove }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            position: "fixed",
            top: `${position.y}px`,
            left: `${position.x}px`,
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            padding: "4px 0"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onPlay,
                style: {
                    padding: "8px 16px",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "#333",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "▶"
                    }, void 0, false, {
                        fileName: "[project]/components/context-menu.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Play"
                    }, void 0, false, {
                        fileName: "[project]/components/context-menu.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/context-menu.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onChangeAlbumArt,
                style: {
                    padding: "8px 16px",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "#333",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🖼️"
                    }, void 0, false, {
                        fileName: "[project]/components/context-menu.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Change Album Art"
                    }, void 0, false, {
                        fileName: "[project]/components/context-menu.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/context-menu.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onRemove,
                style: {
                    padding: "8px 16px",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "#333",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🗑️"
                    }, void 0, false, {
                        fileName: "[project]/components/context-menu.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Remove from Library"
                    }, void 0, false, {
                        fileName: "[project]/components/context-menu.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/context-menu.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/context-menu.tsx",
        lineNumber: 16,
        columnNumber: 7
    }, this);
});
_c1 = ContextMenu;
ContextMenu.displayName = "ContextMenu";
const __TURBOPACK__default__export__ = ContextMenu;
var _c, _c1;
__turbopack_refresh__.register(_c, "ContextMenu$forwardRef");
__turbopack_refresh__.register(_c1, "ContextMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/windows-title-bar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>WindowsTitleBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function WindowsTitleBar({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "linear-gradient(to bottom, #2580c5, #1a5f9e)",
            color: "white",
            padding: "8px 12px",
            fontWeight: 600,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textShadow: "0 1px 1px rgba(0, 0, 0, 0.3)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: title
            }, void 0, false, {
                fileName: "[project]/components/windows-title-bar.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "4px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            border: "1px solid rgba(0, 0, 0, 0.2)",
                            background: "linear-gradient(to bottom, #ffdb4c, #ffcd00)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "10px",
                            cursor: "pointer"
                        },
                        children: "-"
                    }, void 0, false, {
                        fileName: "[project]/components/windows-title-bar.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            border: "1px solid rgba(0, 0, 0, 0.2)",
                            background: "linear-gradient(to bottom, #00ca56, #00a844)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "10px",
                            cursor: "pointer"
                        },
                        children: "□"
                    }, void 0, false, {
                        fileName: "[project]/components/windows-title-bar.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            border: "1px solid rgba(0, 0, 0, 0.2)",
                            background: "linear-gradient(to bottom, #ff605c, #ff3b30)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "10px",
                            cursor: "pointer"
                        },
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/components/windows-title-bar.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/windows-title-bar.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/windows-title-bar.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = WindowsTitleBar;
var _c;
__turbopack_refresh__.register(_c, "WindowsTitleBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/message-input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>MessageInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
function MessageInput() {
    _s();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!message.trim()) {
            setError("msg me ! (w/ ur name)");
            return;
        }
        try {
            // Create a new response file with the message content
            const response = await fetch("/api/save-message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message
                })
            });
            if (!response.ok) {
                throw new Error("failed to save message");
            }
            setSubmitted(true);
            setMessage("");
            setError(null);
            // Reset the submitted state after 3 seconds
            setTimeout(()=>{
                setSubmitted(false);
            }, 3000);
        } catch (err) {
            setError("failed to save message. please try again.");
            console.error(err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
            border: "1px solid #ccc",
            borderRadius: "3px",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
            padding: "15px",
            marginBottom: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    margin: "0 0 10px 0",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#333"
                },
                children: "send a message"
            }, void 0, false, {
                fileName: "[project]/components/message-input.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "10px",
                    background: "#dff0d8",
                    border: "1px solid #d6e9c6",
                    borderRadius: "3px",
                    color: "#3c763d",
                    marginBottom: "10px"
                },
                children: "message sent successfully!"
            }, void 0, false, {
                fileName: "[project]/components/message-input.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: message,
                        onChange: (e)=>setMessage(e.target.value),
                        placeholder: "Type your message here...",
                        style: {
                            width: "100%",
                            minHeight: "100px",
                            padding: "8px",
                            border: "1px solid #ccc",
                            borderRadius: "3px",
                            resize: "vertical",
                            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                            fontSize: "14px",
                            marginBottom: "10px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/message-input.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "10px",
                            background: "#f2dede",
                            border: "1px solid #ebccd1",
                            borderRadius: "3px",
                            color: "#a94442",
                            marginBottom: "10px"
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/components/message-input.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        style: {
                            padding: "8px 16px",
                            background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                            border: "1px solid #ccc",
                            borderRadius: "3px",
                            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                            color: "#333",
                            cursor: "pointer",
                            fontSize: "14px",
                            fontWeight: 600
                        },
                        children: "send message"
                    }, void 0, false, {
                        fileName: "[project]/components/message-input.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/message-input.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/message-input.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(MessageInput, "Cb8265oRq1Rr3/MfoSuL0j1oY+w=");
_c = MessageInput;
var _c;
__turbopack_refresh__.register(_c, "MessageInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/triple-video-display.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>TripleVideoDisplay)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
function TripleVideoDisplay({ defaultVideos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/jNQXAC9IVRw",
    "https://www.youtube.com/embed/9bZkp7q19f0"
] }) {
    _s();
    const [videos, setVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultVideos);
    // Function to format YouTube URLs
    const formatYoutubeUrl = (url)=>{
        if (url.includes('youtube.com/embed')) {
            return url;
        } else if (url.includes('youtube.com/watch?v=')) {
            return url.replace('watch?v=', 'embed/').split('&')[0];
        } else if (url.includes('youtu.be/')) {
            return `https://www.youtube.com/embed/${url.split('youtu.be/')[1].split('?')[0]}`;
        }
        return url;
    };
    // Apply lower quality parameter to YouTube embeds and add autoplay and mute parameters
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TripleVideoDisplay.useEffect": ()=>{
            const formattedVideos = defaultVideos.map({
                "TripleVideoDisplay.useEffect.formattedVideos": (url)=>{
                    const formattedUrl = formatYoutubeUrl(url);
                    // Add low quality parameter, autoplay=1 for autoplay, and mute=1 for muted playback
                    // Note: Most browsers require videos to be muted for autoplay to work without user interaction
                    return formattedUrl.includes('?') ? `${formattedUrl}&vq=small&autoplay=1&mute=1&playsinline=1` : `${formattedUrl}?vq=small&autoplay=1&mute=1&playsinline=1`;
                }
            }["TripleVideoDisplay.useEffect.formattedVideos"]);
            setVideos(formattedVideos);
        }
    }["TripleVideoDisplay.useEffect"], [
        defaultVideos
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginTop: "20px",
            marginBottom: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    style: {
                        fontWeight: 600,
                        color: "#333"
                    },
                    children: "my videos"
                }, void 0, false, {
                    fileName: "[project]/components/triple-video-display.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/triple-video-display.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap"
                },
                children: videos.map((video, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: "1 1 calc(33.333% - 7px)",
                            minWidth: "200px",
                            position: "relative",
                            paddingBottom: "30%",
                            height: 0,
                            overflow: "hidden",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            boxShadow: "inset 0 0 5px rgba(0,0,0,0.1)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                filter: "contrast(0.95) brightness(0.95)"
                            },
                            src: video,
                            title: `YouTube video player ${index + 1}`,
                            frameBorder: "0",
                            loading: "lazy",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: true
                        }, void 0, false, {
                            fileName: "[project]/components/triple-video-display.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "[project]/components/triple-video-display.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/triple-video-display.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/triple-video-display.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(TripleVideoDisplay, "Y6p2Piy89nYv03969Egnh3kiinM=");
_c = TripleVideoDisplay;
var _c;
__turbopack_refresh__.register(_c, "TripleVideoDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/music-player.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>MusicPlayer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$track$2d$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/track-info.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$player$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/player-controls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$playlist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/playlist.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$background$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/background-selector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$album$2d$art$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/album-art-selector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$windows$2d$title$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/windows-title-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$message$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/message-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$triple$2d$video$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/triple-video-display.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function MusicPlayer({ initialTracks = [], customYoutubeVideos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/jNQXAC9IVRw",
    "https://www.youtube.com/embed/9bZkp7q19f0"
] }) {
    _s();
    // Default album cover - define this before using it in state
    const defaultAlbumCover = "/album-covers/miscellaneous_17.jpg";
    // Create a default track if no initialTracks are provided
    const defaultTrack = {
        id: 'default-track',
        title: 'Sample Track',
        artist: 'Sample Artist',
        album: 'Sample Album',
        duration: 0,
        cover: defaultAlbumCover,
        file: ''
    };
    // Initialize with default track if no tracks are provided
    const startingTracks = initialTracks.length > 0 ? initialTracks.map((track)=>({
            ...track,
            cover: track.cover || defaultAlbumCover // Ensure all tracks have a cover
        })) : [
        defaultTrack
    ];
    const [tracks, setTracks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(startingTracks);
    const [currentTrackIndex, setCurrentTrackIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.7);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPlaylist, setShowPlaylist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [background, setBackground] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("/backgrounds/windows7-default.jpg");
    const [customBackground, setCustomBackground] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showBackgroundSelector, setShowBackgroundSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showContextMenu, setShowContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [contextMenuPosition, setContextMenuPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [contextMenuTrackIndex, setContextMenuTrackIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAlbumArtSelector, setShowAlbumArtSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [albumArtSelectorTrackIndex, setAlbumArtSelectorTrackIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // New state for multiple playlists
    const [playlists, setPlaylists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 'main',
            name: 'Main Library',
            tracks: startingTracks
        }
    ]);
    const [activePlaylistId, setActivePlaylistId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('main');
    const [showNewPlaylistInput, setShowNewPlaylistInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newPlaylistName, setNewPlaylistName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const gifPath = "/gifs/eminew.gif" // Set your GIF path here
    ;
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sourceNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lowpassRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const distortionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isAudioSetupComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const progressBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const volumeBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contextMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get the active playlist
    const activePlaylist = playlists.find((p)=>p.id === activePlaylistId) || playlists[0];
    // Update tracks state when active playlist changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicPlayer.useEffect": ()=>{
            if (activePlaylist) {
                setTracks(activePlaylist.tracks);
                setCurrentTrackIndex(0);
                setIsPlaying(false);
            }
        }
    }["MusicPlayer.useEffect"], [
        activePlaylistId
    ]);
    // Update the active playlist when tracks change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicPlayer.useEffect": ()=>{
            if (activePlaylist) {
                setPlaylists({
                    "MusicPlayer.useEffect": (prevPlaylists)=>prevPlaylists.map({
                            "MusicPlayer.useEffect": (p)=>p.id === activePlaylistId ? {
                                    ...p,
                                    tracks
                                } : p
                        }["MusicPlayer.useEffect"])
                }["MusicPlayer.useEffect"]);
            }
        }
    }["MusicPlayer.useEffect"], [
        tracks,
        activePlaylistId
    ]);
    // Create a new playlist
    const createNewPlaylist = ()=>{
        if (newPlaylistName.trim()) {
            const newPlaylist = {
                id: `playlist-${Date.now()}`,
                name: newPlaylistName.trim(),
                tracks: [] // Start with an empty playlist
            };
            setPlaylists([
                ...playlists,
                newPlaylist
            ]);
            setActivePlaylistId(newPlaylist.id);
            setNewPlaylistName('');
            setShowNewPlaylistInput(false);
        }
    };
    // Delete a playlist
    const deletePlaylist = (playlistId)=>{
        if (playlists.length <= 1) return; // Don't delete the last playlist
        setPlaylists(playlists.filter((p)=>p.id !== playlistId));
        // If the active playlist is deleted, switch to the first available playlist
        if (activePlaylistId === playlistId) {
            const remainingPlaylists = playlists.filter((p)=>p.id !== playlistId);
            setActivePlaylistId(remainingPlaylists[0]?.id || 'main');
        }
    };
    // Set up audio processing once when the component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicPlayer.useEffect": ()=>{
            // Initialize audio processing when the audio element is available
            const setupAudioProcessing = {
                "MusicPlayer.useEffect.setupAudioProcessing": ()=>{
                    if (!audioRef.current || isAudioSetupComplete.current) return;
                    try {
                        // Create audio context
                        const AudioContext = window.AudioContext || window.webkitAudioContext;
                        const audioContext = new AudioContext();
                        audioContextRef.current = audioContext;
                        // Create source node
                        const source = audioContext.createMediaElementSource(audioRef.current);
                        sourceNodeRef.current = source;
                        // Create lowpass filter
                        const lowpass = audioContext.createBiquadFilter();
                        lowpass.type = 'lowpass';
                        lowpass.frequency.value = 2000; // Lower frequency for more "crushed" sound
                        lowpassRef.current = lowpass;
                        // Create distortion
                        const distortion = audioContext.createWaveShaper();
                        distortion.curve = makeDistortionCurve(1); // Amount of distortion
                        distortionRef.current = distortion;
                        // Connect the nodes
                        source.connect(lowpass);
                        lowpass.connect(distortion);
                        distortion.connect(audioContext.destination);
                        // Mark setup as complete
                        isAudioSetupComplete.current = true;
                        console.log("Audio processing setup complete");
                    } catch (error) {
                        console.error("Error setting up audio processing:", error);
                    }
                }
            }["MusicPlayer.useEffect.setupAudioProcessing"];
            // Try to set up audio processing
            setupAudioProcessing();
            // Clean up function
            return ({
                "MusicPlayer.useEffect": ()=>{
                    if (audioContextRef.current) {
                        audioContextRef.current.close().catch({
                            "MusicPlayer.useEffect": (err)=>{
                                console.error("Error closing audio context:", err);
                            }
                        }["MusicPlayer.useEffect"]);
                    }
                }
            })["MusicPlayer.useEffect"];
        }
    }["MusicPlayer.useEffect"], []);
    // Helper function to create distortion curve
    function makeDistortionCurve(amount) {
        const k = typeof amount === 'number' ? amount : 50;
        const n_samples = 44100;
        const curve = new Float32Array(n_samples);
        const deg = Math.PI / 180;
        for(let i = 0; i < n_samples; ++i){
            const x = i * 2 / n_samples - 1;
            curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
        }
        return curve;
    }
    // Resume audio context when user interacts with the page
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicPlayer.useEffect": ()=>{
            const resumeAudioContext = {
                "MusicPlayer.useEffect.resumeAudioContext": ()=>{
                    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
                        audioContextRef.current.resume().catch({
                            "MusicPlayer.useEffect.resumeAudioContext": (err)=>{
                                console.error("Error resuming audio context:", err);
                            }
                        }["MusicPlayer.useEffect.resumeAudioContext"]);
                    }
                }
            }["MusicPlayer.useEffect.resumeAudioContext"];
            // Add event listeners for user interaction
            document.addEventListener('click', resumeAudioContext);
            document.addEventListener('keydown', resumeAudioContext);
            document.addEventListener('touchstart', resumeAudioContext);
            return ({
                "MusicPlayer.useEffect": ()=>{
                    document.removeEventListener('click', resumeAudioContext);
                    document.removeEventListener('keydown', resumeAudioContext);
                    document.removeEventListener('touchstart', resumeAudioContext);
                }
            })["MusicPlayer.useEffect"];
        }
    }["MusicPlayer.useEffect"], []);
    // Handle play/pause
    const togglePlay = ()=>{
        if (audioRef.current) {
            // Ensure audio processing is set up
            if (!isAudioSetupComplete.current) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                audioContextRef.current = new AudioContext();
                const source = audioContextRef.current.createMediaElementSource(audioRef.current);
                sourceNodeRef.current = source;
                const lowpass = audioContextRef.current.createBiquadFilter();
                lowpass.type = 'lowpass';
                lowpass.frequency.value = 1000;
                lowpassRef.current = lowpass;
                const distortion = audioContextRef.current.createWaveShaper();
                distortion.curve = makeDistortionCurve(30);
                distortionRef.current = distortion;
                source.connect(lowpass);
                lowpass.connect(distortion);
                distortion.connect(audioContextRef.current.destination);
                isAudioSetupComplete.current = true;
            }
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                // Resume audio context if it's suspended
                if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
                    audioContextRef.current.resume().catch((err)=>{
                        console.error("Error resuming audio context:", err);
                    });
                }
                audioRef.current.play().catch((error)=>{
                    console.error("Playback failed:", error);
                    setIsPlaying(false);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };
    // Update audio element when track changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicPlayer.useEffect": ()=>{
            if (audioRef.current) {
                if (isPlaying) {
                    // Resume audio context if it's suspended
                    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
                        audioContextRef.current.resume().catch({
                            "MusicPlayer.useEffect": (err)=>{
                                console.error("Error resuming audio context:", err);
                            }
                        }["MusicPlayer.useEffect"]);
                    }
                    audioRef.current.play().catch({
                        "MusicPlayer.useEffect": (error)=>{
                            console.error("Playback failed:", error);
                            setIsPlaying(false);
                        }
                    }["MusicPlayer.useEffect"]);
                }
            }
        }
    }["MusicPlayer.useEffect"], [
        currentTrackIndex,
        isPlaying
    ]);
    const currentTrack = tracks[currentTrackIndex] || {
        id: 'default',
        title: 'No Track Selected',
        artist: 'Unknown Artist',
        album: 'Unknown Album',
        duration: 0,
        cover: defaultAlbumCover,
        file: ''
    };
    // Default album art images
    const defaultAlbumArts = [
        "/album-covers/miscellaneous_17.jpg",
        "/album-covers/miscellaneous_18.jpg",
        "/album-covers/miscellaneous_19.jpg",
        "/album-covers/miscellaneous_20.jpg",
        "/album-covers/miscellaneous_21.jpg",
        "/album-covers/miscellaneous_22.jpg"
    ];
    // Handle file upload - add to the active playlist only
    const handleFileUpload = (e)=>{
        if (!e.target.files) return;
        const newTracks = [];
        Array.from(e.target.files).forEach((file)=>{
            if (file.type === "audio/mpeg") {
                // Always use the first album art (miscellaneous_17.jpg) for consistency
                const defaultArt = defaultAlbumArts[0];
                const newTrack = {
                    id: `track-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                    title: file.name.replace(".mp3", ""),
                    artist: "",
                    album: "",
                    duration: 0,
                    cover: defaultArt,
                    file: URL.createObjectURL(file)
                };
                newTracks.push(newTrack);
            }
        });
        // Add tracks to the active playlist only
        setTracks([
            ...tracks,
            ...newTracks
        ]);
    };
    // Modified handleAlbumArtChange to work with only the main playlist
    const handleAlbumArtChange = (artPath)=>{
        if (albumArtSelectorTrackIndex !== null) {
            const newTracks = [
                ...tracks
            ];
            newTracks[albumArtSelectorTrackIndex] = {
                ...newTracks[albumArtSelectorTrackIndex],
                cover: artPath
            };
            setTracks(newTracks);
        }
        setShowAlbumArtSelector(false);
    };
    // Handle previous track
    const playPreviousTrack = ()=>{
        const newIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
        setCurrentTrackIndex(newIndex);
        setIsPlaying(true);
    };
    // Handle next track
    const playNextTrack = ()=>{
        const newIndex = currentTrackIndex === tracks.length - 1 ? 0 : currentTrackIndex + 1;
        setCurrentTrackIndex(newIndex);
        setIsPlaying(true);
    };
    // Handle time update
    const handleTimeUpdate = ()=>{
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };
    // Handle duration change
    const handleDurationChange = ()=>{
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };
    // Handle seek
    const handleSeek = (e)=>{
        if (progressBarRef.current && audioRef.current) {
            const rect = progressBarRef.current.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            audioRef.current.currentTime = pos * duration;
        }
    };
    // Handle volume change
    const handleVolumeChange = (e)=>{
        if (volumeBarRef.current && audioRef.current) {
            const rect = volumeBarRef.current.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            const newVolume = Math.max(0, Math.min(1, pos));
            setVolume(newVolume);
            audioRef.current.volume = newVolume;
            if (newVolume === 0) {
                setIsMuted(true);
            } else {
                setIsMuted(false);
            }
        }
    };
    // Handle mute toggle
    const toggleMute = ()=>{
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };
    // Handle track end
    const handleTrackEnd = ()=>{
        playNextTrack();
    };
    // Handle track selection from playlist
    const handleTrackSelect = (index)=>{
        setCurrentTrackIndex(index);
        setIsPlaying(true);
    };
    // Handle background change
    const handleBackgroundChange = (bg)=>{
        setBackground(bg);
        setCustomBackground(null);
    };
    // Handle custom background upload
    const handleCustomBackgroundUpload = (e)=>{
        if (!e.target.files || !e.target.files[0]) return;
        const file = e.target.files[0];
        if (file.type.startsWith("image/")) {
            const url = URL.createObjectURL(file);
            setCustomBackground(url);
        }
    };
    // Handle custom album art upload
    const handleCustomAlbumArtUpload = (e)=>{
        if (!e.target.files || !e.target.files[0] || albumArtSelectorTrackIndex === null) return;
        const file = e.target.files[0];
        if (file.type.startsWith("image/")) {
            const url = URL.createObjectURL(file);
            const newTracks = [
                ...tracks
            ];
            newTracks[albumArtSelectorTrackIndex] = {
                ...newTracks[albumArtSelectorTrackIndex],
                cover: url
            };
            setTracks(newTracks);
            setShowAlbumArtSelector(false);
        }
    };
    // Handle context menu
    const handleContextMenu = (e, index)=>{
        e.preventDefault();
        setContextMenuPosition({
            x: e.clientX,
            y: e.clientY
        });
        setContextMenuTrackIndex(index);
        setShowContextMenu(true);
    };
    // Handle click outside context menu
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicPlayer.useEffect": ()=>{
            const handleClickOutside = {
                "MusicPlayer.useEffect.handleClickOutside": (e)=>{
                    if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
                        setShowContextMenu(false);
                    }
                }
            }["MusicPlayer.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "MusicPlayer.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["MusicPlayer.useEffect"];
        }
    }["MusicPlayer.useEffect"], []);
    // Handle remove track
    const handleRemoveTrack = (index)=>{
        // Create a copy of the tracks array
        const newTracks = [
            ...tracks
        ];
        // Remove the track at the specified index
        newTracks.splice(index, 1);
        // Update the tracks state
        setTracks(newTracks);
        // If the removed track is the current track or comes before it,
        // adjust the current track index
        if (index === currentTrackIndex) {
            // If it's the last track, go to the previous track
            if (index === tracks.length - 1) {
                setCurrentTrackIndex(Math.max(0, index - 1));
            }
            // Otherwise, keep the same index (which will now point to the next track)
            // Stop playback if there are no more tracks
            if (newTracks.length === 0) {
                setIsPlaying(false);
            }
        } else if (index < currentTrackIndex) {
            // If the removed track comes before the current track,
            // decrement the current track index
            setCurrentTrackIndex(currentTrackIndex - 1);
        }
        // Close context menu if it's open
        setShowContextMenu(false);
    };
    // Handle album art selection
    const handleAlbumArtSelector = (index)=>{
        setAlbumArtSelectorTrackIndex(index);
        setShowAlbumArtSelector(true);
        setShowContextMenu(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            backgroundImage: `url(${customBackground || background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            position: "relative",
            filter: "contrast(0.95) brightness(0.95) saturate(0.9)",
            imageRendering: "pixelated"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    zIndex: 10,
                    width: "100px",
                    height: "100px",
                    overflow: "hidden",
                    borderRadius: "4px",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    background: "rgba(0, 0, 0, 0.2)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    imageRendering: "pixelated"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: gifPath,
                    alt: "Animated GIF",
                    style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        imageRendering: "pixelated"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/music-player.tsx",
                    lineNumber: 572,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/music-player.tsx",
                lineNumber: 554,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    maxWidth: "800px",
                    margin: "0 auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "rgba(0, 0, 0, 0.05)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "8px",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 255, 255, 0.1), inset 0 0 1px 1px rgba(255, 255, 255, 0.2)",
                        overflow: "hidden",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        imageRendering: "pixelated"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$windows$2d$title$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "emi player 🎶"
                        }, void 0, false, {
                            fileName: "[project]/components/music-player.tsx",
                            lineNumber: 605,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "20px",
                                background: "rgba(255, 255, 255, 0.7)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$message$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/music-player.tsx",
                                    lineNumber: 615,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: "20px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: "block",
                                                marginBottom: "8px",
                                                fontWeight: 600,
                                                color: "#333"
                                            },
                                            children: "upload MP3 files"
                                        }, void 0, false, {
                                            fileName: "[project]/components/music-player.tsx",
                                            lineNumber: 619,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "audio/mpeg",
                                                    multiple: true,
                                                    onChange: handleFileUpload,
                                                    style: {
                                                        display: "none"
                                                    },
                                                    id: "file-upload"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/music-player.tsx",
                                                    lineNumber: 635,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "file-upload",
                                                    style: {
                                                        padding: "6px 12px",
                                                        background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                                                        border: "1px solid #ccc",
                                                        borderRadius: "3px",
                                                        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                                                        color: "#333",
                                                        cursor: "pointer",
                                                        fontSize: "14px"
                                                    },
                                                    children: "Browse..."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/music-player.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        marginLeft: "10px",
                                                        fontSize: "14px",
                                                        color: "#666"
                                                    },
                                                    children: "select MP3 files to add to your library"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/music-player.tsx",
                                                    lineNumber: 660,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/music-player.tsx",
                                            lineNumber: 629,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/music-player.tsx",
                                    lineNumber: 618,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: "20px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                borderBottom: "1px solid #ccc",
                                                marginBottom: "10px",
                                                overflowX: "auto",
                                                whiteSpace: "nowrap"
                                            },
                                            children: [
                                                playlists.map((playlist)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>setActivePlaylistId(playlist.id),
                                                        style: {
                                                            padding: "8px 16px",
                                                            cursor: "pointer",
                                                            borderTopLeftRadius: "4px",
                                                            borderTopRightRadius: "4px",
                                                            marginRight: "4px",
                                                            background: activePlaylistId === playlist.id ? "linear-gradient(to bottom, #f0f0f0, #e0e0e0)" : "transparent",
                                                            border: activePlaylistId === playlist.id ? "1px solid #ccc" : "1px solid transparent",
                                                            borderBottom: activePlaylistId === playlist.id ? "1px solid #e0e0e0" : "none",
                                                            position: "relative",
                                                            top: activePlaylistId === playlist.id ? "1px" : "0",
                                                            fontWeight: activePlaylistId === playlist.id ? 600 : 400,
                                                            color: "#333",
                                                            fontSize: "14px",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "8px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: playlist.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/music-player.tsx",
                                                                lineNumber: 712,
                                                                columnNumber: 21
                                                            }, this),
                                                            playlists.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    deletePlaylist(playlist.id);
                                                                },
                                                                style: {
                                                                    background: "none",
                                                                    border: "none",
                                                                    cursor: "pointer",
                                                                    fontSize: "14px",
                                                                    color: "#999",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    width: "16px",
                                                                    height: "16px",
                                                                    borderRadius: "50%"
                                                                },
                                                                children: "×"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/music-player.tsx",
                                                                lineNumber: 714,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, playlist.id, true, {
                                                        fileName: "[project]/components/music-player.tsx",
                                                        lineNumber: 684,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setShowNewPlaylistInput(true),
                                                    style: {
                                                        padding: "8px 16px",
                                                        cursor: "pointer",
                                                        color: "#666",
                                                        fontSize: "14px",
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: "+ New Playlist"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/music-player.tsx",
                                                    lineNumber: 738,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/music-player.tsx",
                                            lineNumber: 674,
                                            columnNumber: 15
                                        }, this),
                                        showNewPlaylistInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: "10px",
                                                display: "flex",
                                                gap: "8px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: newPlaylistName,
                                                    onChange: (e)=>setNewPlaylistName(e.target.value),
                                                    placeholder: "Playlist name",
                                                    style: {
                                                        flex: 1,
                                                        padding: "6px 12px",
                                                        border: "1px solid #ccc",
                                                        borderRadius: "3px",
                                                        fontSize: "14px"
                                                    },
                                                    autoFocus: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/music-player.tsx",
                                                    lineNumber: 762,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: createNewPlaylist,
                                                    style: {
                                                        padding: "6px 12px",
                                                        background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                                                        border: "1px solid #ccc",
                                                        borderRadius: "3px",
                                                        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                                                        color: "#333",
                                                        cursor: "pointer",
                                                        fontSize: "14px"
                                                    },
                                                    children: "Create"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/music-player.tsx",
                                                    lineNumber: 776,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowNewPlaylistInput(false),
                                                    style: {
                                                        padding: "6px 12px",
                                                        background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                                                        border: "1px solid #ccc",
                                                        borderRadius: "3px",
                                                        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                                                        color: "#333",
                                                        cursor: "pointer",
                                                        fontSize: "14px"
                                                    },
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/music-player.tsx",
                                                    lineNumber: 791,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/music-player.tsx",
                                            lineNumber: 755,
                                            columnNumber: 17
                                        }, this),
                                        showPlaylist && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$playlist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            tracks: tracks,
                                            currentTrackIndex: currentTrackIndex,
                                            onTrackSelect: handleTrackSelect,
                                            onContextMenu: handleContextMenu,
                                            onRemoveTrack: handleRemoveTrack
                                        }, void 0, false, {
                                            fileName: "[project]/components/music-player.tsx",
                                            lineNumber: 811,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/music-player.tsx",
                                    lineNumber: 673,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: "20px",
                                        flexWrap: "wrap"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$track$2d$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            track: currentTrack,
                                            onAlbumArtChange: ()=>handleAlbumArtSelector(currentTrackIndex)
                                        }, void 0, false, {
                                            fileName: "[project]/components/music-player.tsx",
                                            lineNumber: 831,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: "1 1 300px",
                                                display: "flex",
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$player$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    currentTime: currentTime,
                                                    duration: duration,
                                                    isPlaying: isPlaying,
                                                    volume: volume,
                                                    isMuted: isMuted,
                                                    progressBarRef: progressBarRef,
                                                    volumeBarRef: volumeBarRef,
                                                    onSeek: handleSeek,
                                                    onVolumeChange: handleVolumeChange,
                                                    onTogglePlay: togglePlay,
                                                    onPreviousTrack: playPreviousTrack,
                                                    onNextTrack: playNextTrack,
                                                    onToggleMute: toggleMute
                                                }, void 0, false, {
                                                    fileName: "[project]/components/music-player.tsx",
                                                    lineNumber: 844,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginBottom: "16px"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowPlaylist(!showPlaylist),
                                                        style: {
                                                            width: "100%",
                                                            padding: "8px 0",
                                                            background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                                                            border: "1px solid #ccc",
                                                            borderRadius: "3px",
                                                            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                                                            color: "#333",
                                                            cursor: "pointer",
                                                            fontSize: "14px"
                                                        },
                                                        children: showPlaylist ? "Hide Playlist" : "Show Playlist"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/music-player.tsx",
                                                        lineNumber: 866,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/music-player.tsx",
                                                    lineNumber: 861,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginTop: "16px"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowBackgroundSelector(!showBackgroundSelector),
                                                        style: {
                                                            width: "100%",
                                                            padding: "8px 0",
                                                            background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                                                            border: "1px solid #ccc",
                                                            borderRadius: "3px",
                                                            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                                                            color: "#333",
                                                            cursor: "pointer",
                                                            fontSize: "14px",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            gap: "8px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: "14px"
                                                                },
                                                                children: "🖼️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/music-player.tsx",
                                                                lineNumber: 908,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Change Background"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/music-player.tsx",
                                                                lineNumber: 909,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/music-player.tsx",
                                                        lineNumber: 890,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/music-player.tsx",
                                                    lineNumber: 885,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/music-player.tsx",
                                            lineNumber: 837,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/music-player.tsx",
                                    lineNumber: 822,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$triple$2d$video$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    defaultVideos: customYoutubeVideos
                                }, void 0, false, {
                                    fileName: "[project]/components/music-player.tsx",
                                    lineNumber: 916,
                                    columnNumber: 13
                                }, this),
                                showBackgroundSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$background$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    currentBackground: customBackground || background,
                                    onBackgroundChange: handleBackgroundChange,
                                    onCustomBackgroundUpload: handleCustomBackgroundUpload
                                }, void 0, false, {
                                    fileName: "[project]/components/music-player.tsx",
                                    lineNumber: 920,
                                    columnNumber: 15
                                }, this),
                                showAlbumArtSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$album$2d$art$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    defaultAlbumArts: defaultAlbumArts,
                                    currentAlbumArt: albumArtSelectorTrackIndex !== null ? tracks[albumArtSelectorTrackIndex].cover : null,
                                    onAlbumArtChange: handleAlbumArtChange,
                                    onCustomAlbumArtUpload: handleCustomAlbumArtUpload,
                                    onClose: ()=>setShowAlbumArtSelector(false)
                                }, void 0, false, {
                                    fileName: "[project]/components/music-player.tsx",
                                    lineNumber: 929,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/music-player.tsx",
                            lineNumber: 608,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/music-player.tsx",
                    lineNumber: 592,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/music-player.tsx",
                lineNumber: 584,
                columnNumber: 7
            }, this),
            showContextMenu && contextMenuTrackIndex !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ref: contextMenuRef,
                position: contextMenuPosition,
                onPlay: ()=>handleTrackSelect(contextMenuTrackIndex),
                onChangeAlbumArt: ()=>handleAlbumArtSelector(contextMenuTrackIndex),
                onRemove: ()=>handleRemoveTrack(contextMenuTrackIndex)
            }, void 0, false, {
                fileName: "[project]/components/music-player.tsx",
                lineNumber: 943,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: currentTrack?.file && currentTrack.file !== '' ? currentTrack.file : undefined,
                onTimeUpdate: handleTimeUpdate,
                onDurationChange: handleDurationChange,
                onEnded: handleTrackEnd,
                autoPlay: isPlaying
            }, void 0, false, {
                fileName: "[project]/components/music-player.tsx",
                lineNumber: 953,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/music-player.tsx",
        lineNumber: 537,
        columnNumber: 5
    }, this);
}
_s(MusicPlayer, "cxsaEfU92oFNEY7vapzxgxWw7es=");
_c = MusicPlayer;
var _c;
__turbopack_refresh__.register(_c, "MusicPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/sample-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$music$2d$player$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/music-player.tsx [app-client] (ecmascript)");
"use client";
;
;
;
// Define custom YouTube video URLs for the player
const customYoutubeVideos = [
    "https://www.youtube.com/watch?v=JcL0sFIm2_U&ab_channel=NBA",
    "https://www.youtube.com/watch?v=mb9qlb9lOhA&t=73s&ab_channel=emino",
    "https://www.youtube.com/watch?v=eyqtWt7A2-Y&t=134s&ab_channel=emino",
    "https://youtu.be/uAD31k3dzis?si=716kYam1jkGtqhFP",
    "https://www.youtube.com/watch?v=qqgmrDE4p40"
];
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$music$2d$player$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        initialTracks: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleTracks"],
        customYoutubeVideos: customYoutubeVideos
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_e0ae76._.js.map