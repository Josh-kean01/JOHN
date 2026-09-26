import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let v = 0;
    const id = setInterval(() => {
      v += Math.random() * 14 + 6;
      if (v >= 100) {
        v = 100;
        clearInterval(id);
        setTimeout(() => { setDone(true); setTimeout(onDone, 700); }, 250);
      }
      setProgress(Math.min(100, v));
    }, 80);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink dot-grid"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] } }}
        >
          {/* Film strip at top */}
          <div className="absolute top-0 left-0 right-0 h-10 filmstrip flex items-center px-4 gap-3">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="h-6 w-8 border border-bone/20 rounded-sm flex-shrink-0" />
            ))}
          </div>

          <div className="text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block mb-4"
            >
              <div className="tape skew-left absolute -top-3 left-1/2 -translate-x-1/2" />
              <div className="bg-bone px-8 py-4 skew-left">
                <span className="font-display text-ink text-5xl md:text-7xl">JOHN ABODUNRIN</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-stamp text-bone/70 text-lg mb-8"
            >
              YouTube Editor · Storytelling Specialist
            </motion.div>

            <div className="w-64 mx-auto">
              <div className="flex justify-between mb-2">
                <span className="eyebrow text-bone/40">Loading portfolio</span>
                <span className="font-mono text-bone/60 text-xs">{Math.floor(progress)}%</span>
              </div>
              <div className="h-2 bg-bone/10 rounded-none overflow-hidden">
                <motion.div
                  className="h-full bg-yt"
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.08 }}
                />
              </div>
            </div>
          </div>

          {/* Film strip at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-10 filmstrip flex items-center px-4 gap-3">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="h-6 w-8 border border-bone/20 rounded-sm flex-shrink-0" />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
