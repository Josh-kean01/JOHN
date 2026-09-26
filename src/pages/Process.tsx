import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck, FiClock } from "react-icons/fi";

const detailedProcess = [
  {
    n: "01",
    title: "Research",
    subtitle: "Understanding audience psychology",
    description: "Every project starts with deep research. I study your channel's retention curves, analyze your top-performing videos, and understand your audience demographics. I review competitor content, identify patterns in successful videos within your niche, and map out what keeps viewers watching.",
    deliverables: ["Channel analytics review", "Competitor analysis", "Audience persona mapping", "Content gap identification"],
    timeline: "1-2 days",
  },
  {
    n: "02",
    title: "Structure",
    subtitle: "Creating narrative flow",
    description: "This is where the magic happens. I map out the entire video structure before editing begins: hooks, story arcs, pacing shifts, open loops, and payoff moments. Every beat is intentional. Every transition serves the story. No random cuts — just purposeful progression.",
    deliverables: ["Video outline & beat map", "Hook variants (2-3 options)", "Pacing strategy document", "Retention checkpoint plan"],
    timeline: "1-2 days",
  },
  {
    n: "03",
    title: "Retention",
    subtitle: "Designing moments that maintain attention",
    description: "The actual edit. This is where I implement the retention engineering: strategic B-roll placement, visual pattern interrupts, sound design for emotional beats, text overlays for key moments, and pacing adjustments based on attention span data. Every 15 seconds is a decision.",
    deliverables: ["Full video edit", "Retention-optimized cuts", "Visual pattern interrupts", "Emotional beat mapping"],
    timeline: "5-7 days",
  },
  {
    n: "04",
    title: "Polish",
    subtitle: "Motion, sound, color, finishing",
    description: "Final pass for professional polish: color grading for brand consistency, sound design and mixing, motion graphics and lower thirds, thumbnail A/B variants, and platform-optimized exports. The last 10% that separates good videos from great ones.",
    deliverables: ["Color grading", "Sound design & mix", "Motion graphics", "Platform exports (YouTube, Reels, etc.)"],
    timeline: "2-3 days",
  },
];

const tools = [
  { name: "Premiere Pro", use: "Primary editing, timeline assembly, audio mixing", icon: "🎬" },
  { name: "After Effects", use: "Motion graphics, animations, visual effects", icon: "✨" },
  { name: "DaVinci Resolve", use: "Color grading, color correction, finishing", icon: "🎨" },
  { name: "Photoshop", use: "Thumbnail design, graphic assets", icon: "🖼️" },
  { name: "Illustrator", use: "Vector graphics, logos, custom shapes", icon: "✏️" },
  { name: "Frame.io", use: "Client review, feedback, collaboration", icon: "💬" },
  { name: "Notion", use: "Project management, client communication", icon: "📋" },
  { name: "ChatGPT", use: "Script assistance, research, ideation", icon: "🤖" },
];

const revisions = [
  { phase: "Initial Draft", desc: "First complete edit with all retention engineering applied", round: "Day 5-7" },
  { phase: "Client Review", desc: "You watch the full video and provide timestamped feedback", round: "Day 8-9" },
  { phase: "Revision Round 1", desc: "I implement your feedback and refine pacing, cuts, and flow", round: "Day 10-12" },
  { phase: "Final Polish", desc: "Color, sound, motion graphics, and platform exports", round: "Day 13-15" },
  { phase: "Delivery", desc: "Final master files delivered in all required formats", round: "Day 15-16" },
];

export default function ProcessPage() {
  return (
    <div className="relative bg-ink pt-28 pb-24">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
        {/* Header */}
        <div className="mb-16">
          <motion.div initial={{ opacity: 0, rotate: -1 }} whileInView={{ opacity: 1, rotate: -0.5 }} viewport={{ once: true }} className="relative inline-block">
            <div className="tape absolute -top-2 left-6 w-12 h-4" style={{ background: "rgba(255,240,180,0.5)" }} />
            <div className="bg-bone px-6 py-3">
              <span className="font-display text-ink text-5xl md:text-7xl">MY PROCESS</span>
            </div>
          </motion.div>
          <p className="mt-6 font-stamp text-bone/60 max-w-2xl text-lg">
            Four steps. Every project. No shortcuts, no guesswork — just a proven framework that's generated 50M+ views.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 mb-20">
          {detailedProcess.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative grid md:grid-cols-12 gap-6"
            >
              {/* Step Number */}
              <div className="md:col-span-2">
                <div className="sticky top-32">
                  <div className="w-20 h-20 rounded-full border-2 border-yt bg-ink flex items-center justify-center">
                    <span className="font-display text-yt text-3xl">{step.n}</span>
                  </div>
                  <div className="mt-3 font-stamp text-yt text-xs">{step.timeline}</div>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-10 bg-charcoal border border-bone/10 p-6 md:p-8">
                <div className="eyebrow text-bone/40 mb-2">{step.subtitle}</div>
                <h3 className="font-display text-bone text-4xl md:text-5xl mb-4">{step.title}</h3>
                <p className="font-stamp text-bone/70 leading-relaxed mb-6">{step.description}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-stamp text-bone/50 text-xs mb-3">DELIVERABLES</div>
                    <ul className="space-y-2">
                      {step.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 font-stamp text-bone/60 text-sm">
                          <FiCheck className="h-4 w-4 text-yt mt-0.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Revision Process */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, rotate: 1 }} whileInView={{ opacity: 1, rotate: 0.5 }} viewport={{ once: true }} className="relative inline-block">
            <div className="tape absolute -top-2 left-6 w-12 h-4" style={{ background: "rgba(255,240,180,0.55)" }} />
            <div className="bg-yt px-6 py-3">
              <span className="font-display text-white text-4xl md:text-6xl">REVISION PROCESS</span>
            </div>
          </motion.div>
          <p className="mt-6 font-stamp text-bone/60 max-w-xl">
            How we collaborate from first draft to final delivery.
          </p>

          <div className="mt-10 space-y-4">
            {revisions.map((rev, i) => (
              <motion.div
                key={rev.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 bg-charcoal border border-bone/10 p-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-yt bg-ink flex items-center justify-center">
                  <span className="font-display text-yt text-lg">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <h4 className="font-display text-bone text-2xl">{rev.phase}</h4>
                    <span className="font-stamp text-yt text-sm">{rev.round}</span>
                  </div>
                  <p className="font-stamp text-bone/60 text-sm mt-1">{rev.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, rotate: -1 }} whileInView={{ opacity: 1, rotate: -0.5 }} viewport={{ once: true }} className="relative inline-block">
            <div className="tape absolute -top-2 left-6 w-12 h-4" style={{ background: "rgba(255,240,180,0.55)" }} />
            <div className="bg-bone px-6 py-3">
              <span className="font-display text-ink text-4xl md:text-6xl">MY TOOLKIT</span>
            </div>
          </motion.div>
          <p className="mt-6 font-stamp text-bone/60 max-w-xl">
            Industry-standard software, calibrated workflows, and AI-assisted optimization.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-charcoal border border-bone/10 p-5 hover:border-yt/50 transition-colors"
              >
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h4 className="font-display text-bone text-xl mb-2">{tool.name}</h4>
                <p className="font-stamp text-bone/50 text-xs">{tool.use}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-charcoal border-2 border-yt p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <FiClock className="h-8 w-8 text-yt" />
            <h3 className="font-display text-bone text-3xl md:text-4xl">TYPICAL TIMELINE</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <div className="font-stamp text-yt text-xs mb-2">SHORT-FORM</div>
              <div className="font-display text-bone text-4xl mb-2">2-3 Days</div>
              <div className="font-stamp text-bone/50 text-sm">Reels, TikToks, YouTube Shorts</div>
            </div>
            <div>
              <div className="font-stamp text-yt text-xs mb-2">LONG-FORM</div>
              <div className="font-display text-bone text-4xl mb-2">10-14 Days</div>
              <div className="font-stamp text-bone/50 text-sm">Standard YouTube videos (10-20 min)</div>
            </div>
            <div>
              <div className="font-stamp text-yt text-xs mb-2">DOCUMENTARY</div>
              <div className="font-display text-bone text-4xl mb-2">2-4 Weeks</div>
              <div className="font-stamp text-bone/50 text-sm">Long-form storytelling (30+ min)</div>
            </div>
          </div>
          <p className="font-stamp text-bone/50 text-xs mt-6">
            * Rush delivery available for retainer clients. Ongoing partnerships work within your publishing cadence.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-charcoal border-2 border-yt p-10 text-center"
        >
          <h3 className="font-display text-bone text-4xl md:text-5xl mb-4">
            READY TO START YOUR PROJECT?
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
    </div>
  );
}
