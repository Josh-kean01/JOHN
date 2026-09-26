import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiPlay } from "react-icons/fi";

const REEL_POSTER =
  "https://images.pexels.com/videos/11677590/pexels-photo-11677590.jpeg?auto=compress&cs=tinysrgb&w=1920";

const CHAPTERS = [
  { t: "00:00", l: "Cold open — silence" },
  { t: "00:14", l: "Lumen — coastal documentary" },
  { t: "00:38", l: "Atlas — product film" },
  { t: "01:02", l: "Mira Chen — long form essay" },
  { t: "01:31", l: "Northbound — series trailer" },
  { t: "01:58", l: "Closing — held breath" },
];

export default function Showreel({ onPlay }: { onPlay: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.86, 1, 1.04]);
  const radius = useTransform(scrollYProgress, [0, 0.5, 1], ["48px", "8px", "0px"]);

  return (
    <section id="reel" ref={ref} className="relative overflow-hidden bg-ink py-32 md:py-44">
      <div className="px-5 md:px-10">
        <div className="flex items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-bone/30" />
              <span className="eyebrow text-bone/60">Reel 026 — 02:14</span>
            </div>
            <h3 className="mt-6 font-display text-5xl leading-[0.95] md:text-7xl">
              The reel, <span className="italic text-bone/65">in one sitting.</span>
            </h3>
          </div>
          <div className="hidden max-w-sm text-right text-sm text-bone/60 md:block">
            Watch the full 2024–2026 reel as a continuous cut.
            Sound on. Lights low. No skipping.
          </div>
        </div>
      </div>

      <motion.div
        style={{ scale, borderRadius: radius }}
        className="relative mx-auto mt-20 aspect-[21/9] w-[95%] overflow-hidden bg-black will-change-transform md:mt-28"
      >
        <img
          src={REEL_POSTER}
          alt="Showreel poster"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40" />

        {/* Center play */}
        <button
          onClick={onPlay}
          data-cursor="play"
          data-cursor-label="PLAY REEL"
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          <motion.span
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="group relative flex h-28 w-28 items-center justify-center rounded-full border border-bone/40 bg-ink/20 backdrop-blur-md md:h-40 md:w-40"
          >
            <span className="absolute inset-0 rounded-full border border-bone/20" />
            <motion.span
              animate={{ scale: [1, 1.3, 1.6], opacity: [0.5, 0.2, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-bone/40"
            />
            <FiPlay className="h-8 w-8 fill-bone text-bone md:h-12 md:w-12" />
          </motion.span>
        </button>

        {/* Controls bar */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-6 p-5 md:p-8">
          <div className="flex flex-col gap-2">
            <span className="eyebrow text-bone/70">Now showing</span>
            <span className="font-display text-2xl text-bone md:text-3xl">
              Reel 026 — A continuous cut
            </span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <span className="eyebrow text-bone/50">4K · Dolby</span>
            <span className="eyebrow text-bone/50">Sound on</span>
          </div>
        </div>

        {/* Top bar */}
        <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-6 p-5 md:p-8">
          <span className="eyebrow text-bone/70">REC ● 4K · 02:14</span>
          <span className="eyebrow text-bone/50">Editor's cut · No watermark</span>
        </div>
      </motion.div>

      {/* Chapter markers */}
      <div className="mx-auto mt-16 w-[95%] md:mt-20">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-6 bg-bone/30" />
          <span className="eyebrow text-bone/50">Chapter markers</span>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-2">
          {CHAPTERS.map((c, i) => (
            <div
              key={i}
              data-cursor="hover"
              className="group flex flex-col gap-2 border-t border-bone/15 pt-3 transition hover:border-accent"
            >
              <span className="font-mono text-[10px] text-bone/50 group-hover:text-accent">
                {c.t}
              </span>
              <span className="text-sm leading-snug text-bone/80">{c.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
