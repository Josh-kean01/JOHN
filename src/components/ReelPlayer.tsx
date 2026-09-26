import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiX, FiPlay, FiPause, FiVolume2, FiVolumeX } from "react-icons/fi";

const REEL_SRC = "https://videos.pexels.com/video-files/857251/857251-hd_1920_1080_25fps.mp4";

export default function ReelPlayer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !open) return;
    playing ? v.play().catch(() => {}) : v.pause();
  }, [playing, open]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const fn = () => { if (v.duration) { setProgress(v.currentTime / v.duration * 100); setTime(v.currentTime); } };
    v.addEventListener("timeupdate", fn);
    return () => v.removeEventListener("timeupdate", fn);
  }, [open]);

  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  const seek = (p: number) => { const v = videoRef.current; if (v?.duration) v.currentTime = p / 100 * v.duration; };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[170] bg-black flex flex-col"
        >
          <video ref={videoRef} src={REEL_SRC} muted={muted} playsInline className="flex-1 w-full object-cover" />

          {/* Header */}
          <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-5 py-4 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yt pulse-yt block" />
              <span className="font-stamp text-bone text-sm">SHOWREEL 2026 · JOHN ABODUNRIN</span>
            </div>
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center bg-bone/10 hover:bg-yt/20 transition-colors rounded">
              <FiX className="h-5 w-5 text-bone" />
            </button>
          </div>

          {/* Controls */}
          <div className="absolute bottom-0 inset-x-0 z-10 bg-gradient-to-t from-black/90 to-transparent px-5 pb-6 pt-16">
            <div className="relative h-1 bg-bone/20 mb-4 cursor-pointer">
              <div className="h-full bg-yt" style={{ width: `${progress}%` }} />
              <input type="range" min={0} max={100} step={0.1} value={progress}
                onChange={e => seek(+e.target.value)}
                className="absolute inset-0 opacity-0 w-full cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={() => setPlaying(p => !p)} className="w-10 h-10 flex items-center justify-center bg-yt rounded text-white">
                  {playing ? <FiPause className="h-4 w-4" /> : <FiPlay className="h-4 w-4" />}
                </button>
                <button onClick={() => setMuted(m => !m)} className="w-10 h-10 flex items-center justify-center bg-bone/10 rounded text-bone hover:bg-bone/20">
                  {muted ? <FiVolumeX className="h-4 w-4" /> : <FiVolume2 className="h-4 w-4" />}
                </button>
                <span className="font-mono text-xs text-bone/60">{fmt(time)} / 02:14</span>
              </div>
              <span className="font-stamp text-bone/50 text-xs">4K · YouTube Editor · John Abodunrin</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
