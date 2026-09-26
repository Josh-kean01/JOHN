import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 40 });
  const sy = useSpring(y, { stiffness: 600, damping: 40 });
  const rx = useSpring(x, { stiffness: 180, damping: 22 });
  const ry = useSpring(y, { stiffness: 180, damping: 22 });
  const enabled = useRef(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) { enabled.current = false; return; }
    const mv = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", mv);
    return () => window.removeEventListener("mousemove", mv);
  }, [x, y]);

  if (!enabled.current) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[100] top-0 left-0 mix-blend-difference"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="h-2 w-2 rounded-full bg-bone" />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[99] top-0 left-0"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="h-8 w-8 rounded-full border border-yt/50" />
      </motion.div>
    </>
  );
}
