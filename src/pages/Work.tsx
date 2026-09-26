import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiEye, FiArrowUpRight, FiX } from "react-icons/fi";
import { VIDEO_PROJECTS, THUMBNAIL_PROJECTS, SCRIPT_PROJECTS } from "@/lib/data";

type Tab = "video" | "thumbnails" | "scripts";
type VideoCategory = "documentary" | "truecrime" | "short" | "finance" | "ai";
type VideoFilter = "all" | VideoCategory;

const VIDEO_CATEGORIES: { id: VideoFilter; label: string; emoji: string }[] = [
  { id: "all", label: "All", emoji: "🎞️" },
  { id: "documentary", label: "Documentary", emoji: "🎬" },
  { id: "truecrime", label: "True Crime", emoji: "🔍" },
  { id: "short", label: "Short Form", emoji: "⚡" },
  { id: "finance", label: "Finance", emoji: "💰" },
  { id: "ai", label: "AI / Tech", emoji: "🤖" },
];

export default function WorkPage() {
  const [tab, setTab] = useState<Tab>("video");
  const [videoCategory, setVideoCategory] = useState<VideoFilter>("all");
  const [hovered, setHovered] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const allVideoProjects = Object.values(VIDEO_PROJECTS).flat();

  return (
    <div className="relative bg-ink pt-28 pb-24">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 flex-wrap mb-6">
            <motion.div initial={{ opacity: 0, rotate: -2 }} whileInView={{ opacity: 1, rotate: -1 }} viewport={{ once: true }} className="relative inline-block">
              <div className="tape absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4" style={{ background: "rgba(255,240,180,0.55)" }} />
              <div className="bg-bone px-5 py-2">
                <span className="font-display text-ink text-4xl md:text-6xl">PREVIOUS</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, rotate: 1 }} whileInView={{ opacity: 1, rotate: 0.5 }} viewport={{ once: true }} className="relative inline-block">
              <div className="bg-bone px-5 py-2">
                <span className="font-display text-ink text-4xl md:text-6xl">WORK</span>
              </div>
            </motion.div>
          </div>
          <p className="font-stamp text-bone/60 max-w-2xl text-lg">
            A curated selection of projects I've edited. Every video below was engineered for retention — not just delivered.
          </p>
          <div className="flex items-center gap-4 mt-4 font-stamp text-bone/40 text-sm">
            <span>📹 {allVideoProjects.length} Video Projects</span>
            <span>🖼️ {THUMBNAIL_PROJECTS.length} Thumbnails</span>
            <span>📝 {SCRIPT_PROJECTS.length} Scripts</span>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { n: "50M+", l: "Total Views" },
            { n: "62%", l: "Avg Retention" },
            { n: "100+", l: "Videos Edited" },
            { n: "40%", l: "Watch Time Lift" },
          ].map((s) => (
            <div key={s.l} className="bg-charcoal border border-bone/10 p-4 text-center">
              <div className="font-display text-3xl text-yt">{s.n}</div>
              <div className="font-stamp text-bone/50 text-xs">{s.l}</div>
            </div>
          ))}
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-bone/10 pb-4">
          {[
            { id: "video", label: "Video Editing", count: "10" },
            { id: "thumbnails", label: "Thumbnail Design", count: "6" },
            { id: "scripts", label: "Scriptwriting", count: "4" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id as Tab)}
              className={`px-5 py-2.5 font-stamp text-sm transition-all ${tab === t.id ? "bg-yt text-white" : "border border-bone/20 text-bone/60 hover:border-yt hover:text-yt"}`}>
              {t.label} <span className="font-mono text-xs opacity-70">({t.count})</span>
            </button>
          ))}
        </div>

        {/* VIDEO EDITING TAB */}
        {tab === "video" && (
          <div>
            <div className="flex flex-wrap gap-2 mb-10">
              {VIDEO_CATEGORIES.map(c => (
                <button key={c.id} onClick={() => setVideoCategory(c.id)}
                  className={`flex items-center gap-2 px-4 py-2 font-stamp text-sm transition-all ${videoCategory === c.id ? "bg-yt text-white" : "border border-bone/20 text-bone/70 hover:border-yt"}`}>
                  <span>{c.emoji}</span>
                  <span>{c.label}</span>
                </button>
              ))}
            </div>

            <div className="mb-6">
              <span className="font-mono text-xs text-yt">CATEGORY</span>
              <h2 className="font-display text-bone text-4xl md:text-5xl">
                {videoCategory === "all" ? "All Videos" : `${VIDEO_CATEGORIES.find(c => c.id === videoCategory)?.label} Videos`}
              </h2>
              <p className="font-stamp text-bone/50 text-sm mt-2">
                {(videoCategory === "all" ? allVideoProjects : VIDEO_PROJECTS[videoCategory as VideoCategory]).length} projects{videoCategory === "all" ? " across all categories" : " in this category"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-6 gap-y-10">
              {(videoCategory === "all" ? allVideoProjects : VIDEO_PROJECTS[videoCategory as VideoCategory]).map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (i % 4) * 0.08 }}>
                  <div className="mb-3 flex items-center gap-3 flex-wrap">
                    <div className="inline-block bg-bone px-3 py-1 -rotate-0.5">
                      <span className="font-display text-ink text-sm">PROJECT {String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <span className="eyebrow text-bone/40">{p.category.toUpperCase()}</span>
                    <span className="eyebrow text-yt">★ Featured</span>
                  </div>

                  <div className="font-display text-bone text-xl md:text-2xl mb-4 uppercase leading-tight">{p.title}</div>

                  <div
                    className="relative aspect-yt overflow-hidden cursor-pointer group border border-bone/10"
                    onMouseEnter={() => setHovered(p.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setSelectedProject(p)}
                  >
                    <img src={p.thumbnail} alt={p.title} className={`w-full h-full object-cover transition-all duration-500 ${hovered === p.id ? "opacity-0" : "opacity-100"}`} />
                    {hovered === p.id && (
                      <video src={p.video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                    <div className="absolute top-2 left-2 bg-black/80 px-2 py-1">
                      <span className="font-stamp text-white text-xs">{p.channel}</span>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1">
                      <span className="font-mono text-white text-xs">{p.duration}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className={`w-12 h-12 rounded-full bg-yt flex items-center justify-center shadow-lg transition-opacity ${hovered === p.id ? "opacity-100" : "opacity-70"}`}>
                        <FiEye className="h-5 w-5 text-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-1.5 text-bone/60 font-stamp text-sm">
                      <FiEye className="h-4 w-4" /> {p.views} views
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-yt" />
                      <span className="font-stamp text-yt text-sm">{p.retention} retention</span>
                    </div>
                    <span className="font-stamp text-bone/40 text-sm">{p.published}</span>
                  </div>
                  <p className="mt-2 font-stamp text-bone/60 text-sm">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* THUMBNAIL DESIGN TAB */}
        {tab === "thumbnails" && (
          <div>
            <div className="mb-6">
              <span className="font-mono text-xs text-yt">PORTFOLIO</span>
              <h2 className="font-display text-bone text-4xl md:text-5xl">Thumbnail Design</h2>
              <p className="font-stamp text-bone/50 text-sm mt-2">High-CTR thumbnails engineered for curiosity and click</p>
              <div className="flex items-center gap-4 mt-4 font-stamp text-bone/40 text-xs">
                <span>Avg CTR: 10.3%</span>
                <span>Total Clicks: 5.7M+</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {THUMBNAIL_PROJECTS.map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                  <div className="relative aspect-yt overflow-hidden border-2 border-bone/10">
                    <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1">
                      <span className="font-mono text-white text-[10px]">{p.category}</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-stamp text-bone text-lg">{p.title}</h3>
                    <div className="mt-2 flex items-center gap-4 text-sm">
                      <span className="font-stamp text-yt">CTR {p.ctr}</span>
                      <span className="font-stamp text-bone/60">{p.clicks} clicks</span>
                    </div>
                    <p className="mt-2 font-stamp text-bone/50 text-xs">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* SCRIPTWRITING TAB */}
        {tab === "scripts" && (
          <div>
            <div className="mb-6">
              <span className="font-mono text-xs text-yt">PORTFOLIO</span>
              <h2 className="font-display text-bone text-4xl md:text-5xl">Scriptwriting</h2>
              <p className="font-stamp text-bone/50 text-sm mt-2">Story-first scripts for videos that hold attention</p>
              <div className="flex items-center gap-4 mt-4 font-stamp text-bone/40 text-xs">
                <span>Total Words Written: 25K+</span>
                <span>Videos Produced: 20+</span>
              </div>
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10 relative">
              <div className="tape absolute -top-2 left-6 w-12 h-4 z-10" style={{ background: "rgba(255,240,180,0.55)" }} />
              <img src="/portfolio/script-sample.png" alt="Script sample" className="w-full max-w-2xl border-4 border-bone/20 bg-white" />
              <div className="absolute -bottom-3 -right-3 bg-yt px-3 py-1.5 rotate-2">
                <span className="font-display text-white text-sm">SCRIPT SAMPLE</span>
              </div>
            </motion.div>

            <div className="space-y-6">
              {SCRIPT_PROJECTS.map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="relative bg-charcoal border border-bone/10 p-6">
                  <div className="absolute -top-2 left-6"><div className="w-4 h-4 rounded-full bg-yt" /></div>
                  <div className="flex items-baseline justify-between gap-4 flex-wrap mb-3">
                    <h3 className="font-display text-bone text-2xl">{p.title}</h3>
                    <span className="font-stamp text-yt text-sm">{p.type}</span>
                  </div>
                  <p className="font-stamp text-bone/60 text-sm mb-4">{p.description}</p>

                  <div className="bg-ink p-4 border-l-2 border-yt font-mono text-[11px] text-bone/70 whitespace-pre-line leading-relaxed">
                    {p.excerpt}
                  </div>

                  <div className="mt-4 flex items-center gap-6 flex-wrap">
                    <span className="font-stamp text-bone/50 text-xs">⏱ {p.duration}</span>
                    <span className="font-stamp text-bone/50 text-xs">📝 {p.words} words</span>
                    <span className="font-stamp text-bone/50 text-xs">👤 {p.client}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-charcoal border-2 border-yt p-10 text-center"
        >
          <h3 className="font-display text-bone text-4xl md:text-5xl mb-4">
            HAVE A PROJECT IN MIND?
          </h3>
          <p className="font-stamp text-bone/60 mb-6 max-w-xl mx-auto">
            Let's discuss your content goals. Free discovery call — no commitment.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yt px-8 py-4 font-display text-2xl text-white hover:bg-yt-dark transition-colors"
          >
            BOOK A CALL <FiArrowUpRight className="inline h-5 w-5" />
          </Link>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
          {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[170] bg-black/90 flex items-center justify-center p-5"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-charcoal border border-bone/10 p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-bone/60 hover:text-bone z-10"
              >
                <FiX className="h-6 w-6" />
              </button>
              <div className="aspect-yt mb-6 overflow-hidden border-2 border-bone/10">
                <video src={selectedProject.video} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
              <div className="eyebrow text-yt mb-2">{selectedProject.category}</div>
              <h2 className="font-display text-bone text-4xl mb-4">{selectedProject.title}</h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-stamp text-bone/60 text-sm">By {selectedProject.channel}</span>
                <span className="flex items-center gap-1.5 text-sm font-stamp text-bone/70"><FiEye className="h-3.5 w-3.5" /> {selectedProject.views}</span>
                <span className="font-stamp text-yt text-sm">{selectedProject.retention} retention</span>
              </div>
              <p className="font-stamp text-bone/70 leading-relaxed">{selectedProject.description}</p>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Views", value: selectedProject.views },
                  { label: "Duration", value: selectedProject.duration },
                  { label: "Retention", value: selectedProject.retention },
                  { label: "Published", value: selectedProject.published },
                ].map(s => (
                  <div key={s.label} className="bg-ink border border-bone/10 p-3">
                    <div className="font-mono text-[10px] text-bone/40 mb-1">{s.label}</div>
                    <div className="font-display text-bone text-xl">{s.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
