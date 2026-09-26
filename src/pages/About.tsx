import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiAward, FiCoffee, FiHeart, FiTarget, FiTrendingUp } from "react-icons/fi";
import { JOHN_IMAGE_URL } from "@/lib/constants";

const journey = [
  { year: "2015", title: "Started Editing", desc: "Learned Premiere Pro basics on YouTube tutorials" },
  { year: "2017", title: "First Client", desc: "Landed first paid gig editing a local business promo" },
  { year: "2019", title: "Full-Time Freelance", desc: "Quit the 9-5, committed to video editing career" },
  { year: "2021", title: "YouTube Focus", desc: "Specialized in long-form YouTube content" },
  { year: "2023", title: "50M Views", desc: "Crossed 50 million views across managed channels" },
  { year: "2026", title: "Full Creator Stack", desc: "Expanded to thumbnails and scriptwriting services" },
];

const skills = [
  { name: "Premiere Pro", level: 98 },
  { name: "After Effects", level: 90 },
  { name: "DaVinci Resolve", level: 85 },
  { name: "Photoshop", level: 88 },
  { name: "YouTube Algorithm", level: 95 },
  { name: "Retention Optimization", level: 96 },
];

const values = [
  { icon: FiTarget, title: "Attention First", desc: "Every cut serves retention. If it doesn't hold viewers, it doesn't make the final cut." },
  { icon: FiTrendingUp, title: "Data-Driven", desc: "Decisions backed by analytics. I study your retention curves and optimize accordingly." },
  { icon: FiHeart, title: "Story Matters", desc: "Technical skills are table stakes. Storytelling is what separates good from unforgettable." },
  { icon: FiCoffee, title: "Always Learning", desc: "YouTube evolves fast. I stay ahead of algorithm changes and editing trends." },
];

export default function About() {
  return (
    <div className="relative bg-ink pt-28 pb-24">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
        {/* Hero Section */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, rotate: -1 }} whileInView={{ opacity: 1, rotate: -0.5 }} viewport={{ once: true }} className="relative inline-block">
            <div className="tape absolute -top-2 left-6 w-12 h-4" style={{ background: "rgba(255,240,180,0.5)" }} />
            <div className="bg-bone px-6 py-3">
              <span className="font-display text-ink text-5xl md:text-7xl">ABOUT ME</span>
            </div>
          </motion.div>
          <p className="mt-6 font-stamp text-bone/60 max-w-2xl text-lg">
            9 years turning raw footage into content that performs. Here's my story.
          </p>
        </div>

        {/* Portrait + Bio */}
        <div className="grid gap-10 lg:gap-14 items-center mb-20 md:grid-cols-2 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-[26rem]"
          >
            <div className="tape absolute -top-3 left-8 z-10 w-14 h-5 skew-right" style={{ background: "rgba(255,240,180,0.6)" }} />
            <div className="tape absolute -top-3 right-8 z-10 w-14 h-5 skew-left" style={{ background: "rgba(255,240,180,0.6)" }} />
            {/* Frame matches the photo ratio so it fills edge-to-edge with no gaps. */}
            <div className="border-4 border-bone/20 overflow-hidden aspect-[3/4] bg-charcoal">
              <img
                src={JOHN_IMAGE_URL}
                alt="John Abodunrin"
                loading="lazy"
                decoding="async"
                className="block w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yt px-4 py-2 rotate-2">
              <span className="font-display text-white text-xl">JOHN ABODUNRIN</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 md:contents md:space-y-0 lg:block lg:space-y-6">
            {/* Introduction block — matching screenshot */}
            <div className="dashed-box p-6 min-w-0">
              <div className="eyebrow text-yt mb-4">INTRODUCTION</div>
              <h2 className="font-stamp text-bone text-xl md:text-2xl leading-snug mb-4">
                John Abodunrin — YouTube Editor, Thumbnail<br />Designer &amp; Scriptwriter
              </h2>
              <p className="font-stamp text-bone/70 text-sm leading-relaxed">
                With 9 years of expertise across video editing, thumbnail design, and scriptwriting,
                I help creators build content that doesn't just get clicked — it gets watched.
              </p>
            </div>

            {/* Experience Highlights — full-width row on tablet */}
            <div className="min-w-0 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-bone/10" />
                <span className="eyebrow text-bone/40">EXPERIENCE HIGHLIGHTS</span>
                <div className="h-px flex-1 bg-bone/10" />
              </div>
              <ul className="space-y-3 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-3 md:space-y-0 lg:block lg:space-y-3">
                {[
                  "Produced engaging YouTube content for creators worldwide",
                  "Collaborated with brands, agencies, and educators",
                  "Developed retention-optimized long-form and short-form edits",
                  "Generated 50M+ views across managed channels",
                  "Specializes in storytelling structure and pacing psychology",
                  "Scriptwriting for documentary, educational, and brand content",
                  "Custom thumbnail design with A/B tested CTR lift",
                ].map((h) => (
                  <li key={h} className="flex items-start gap-3 font-stamp text-bone/70 text-sm">
                    <span className="text-yt mt-0.5 flex-shrink-0">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats row — 3-column, full-width on tablet */}
            <div className="grid grid-cols-3 gap-3 min-w-0 md:col-span-2">
              <div className="bg-graphite border border-bone/10 p-4 text-center">
                <div className="font-display text-2xl text-yt">9+</div>
                <div className="font-stamp text-bone/50 text-xs mt-1">Years</div>
              </div>
              <div className="bg-graphite border border-bone/10 p-4 text-center">
                <div className="font-display text-2xl text-yt">50M+</div>
                <div className="font-stamp text-bone/50 text-xs mt-1">Views</div>
              </div>
              <div className="bg-graphite border border-bone/10 p-4 text-center">
                <div className="font-display text-2xl text-yt">100+</div>
                <div className="font-stamp text-bone/50 text-xs mt-1">Projects</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <PaperTitle eyebrow="My Journey" title="9 YEARS IN THE MAKING" />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-yt/20" />
            <div className="space-y-8">
              {journey.map((j, i) => (
                <motion.div
                  key={j.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full border-2 border-yt bg-ink flex items-center justify-center">
                    <span className="font-display text-yt text-xl">{j.year}</span>
                  </div>
                  <div className="bg-charcoal border border-bone/10 p-5">
                    <h3 className="font-display text-bone text-2xl mb-2">{j.title}</h3>
                    <p className="font-stamp text-bone/60 text-sm">{j.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <PaperTitle eyebrow="Technical Skills" title="MY TOOLKIT" red />
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-charcoal border border-bone/10 p-5"
              >
                <div className="flex justify-between mb-3">
                  <span className="font-stamp text-bone">{skill.name}</span>
                  <span className="font-mono text-yt text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-ink rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.1 }}
                    className="h-full bg-yt"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <PaperTitle eyebrow="What Drives Me" title="MY VALUES" />
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-charcoal border border-bone/10 p-6"
              >
                <v.icon className="h-10 w-10 text-yt mb-4" />
                <h3 className="font-display text-bone text-2xl mb-3">{v.title}</h3>
                <p className="font-stamp text-bone/60 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mb-20">
          <PaperTitle eyebrow="Credentials" title="EDUCATION & CERTS" red />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-charcoal border border-bone/10 p-6">
              <FiAward className="h-8 w-8 text-yt mb-3" />
              <h3 className="font-display text-bone text-xl mb-2">Self-Taught Editor</h3>
              <p className="font-stamp text-bone/60 text-sm">
                9 years of hands-on experience, 100+ completed projects, and continuous learning 
                through industry courses and experimentation.
              </p>
            </div>
            <div className="bg-charcoal border border-bone/10 p-6">
              <FiAward className="h-8 w-8 text-yt mb-3" />
              <h3 className="font-display text-bone text-xl mb-2">Adobe Certified</h3>
              <p className="font-stamp text-bone/60 text-sm">
                Certified in Premiere Pro and After Effects, with advanced training in color 
                grading and motion graphics.
              </p>
            </div>
            <div className="bg-charcoal border border-bone/10 p-6">
              <FiAward className="h-8 w-8 text-yt mb-3" />
              <h3 className="font-display text-bone text-xl mb-2">YouTube Analytics Expert</h3>
              <p className="font-stamp text-bone/60 text-sm">
                Deep understanding of YouTube's algorithm, retention metrics, and content 
                optimization strategies.
              </p>
            </div>
            <div className="bg-charcoal border border-bone/10 p-6">
              <FiAward className="h-8 w-8 text-yt mb-3" />
              <h3 className="font-display text-bone text-xl mb-2">50M+ Views Generated</h3>
              <p className="font-stamp text-bone/60 text-sm">
                Proven track record across 15+ creator partnerships with consistent results 
                in view growth and engagement.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-charcoal border-2 border-yt p-10 text-center"
        >
          <h3 className="font-display text-bone text-4xl md:text-5xl mb-4">
            READY TO WORK TOGETHER?
          </h3>
          <p className="font-stamp text-bone/60 mb-6 max-w-xl mx-auto">
            Let's turn your raw footage into content that performs. Free discovery call to discuss your goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yt px-8 py-4 font-display text-2xl text-white hover:bg-yt-dark transition-colors"
          >
            BOOK A CALL
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function PaperTitle({ eyebrow, title, red = false }: { eyebrow?: string; title: string; red?: boolean }) {
  return (
    <div className="mb-10">
      {eyebrow && <div className="font-stamp text-bone/50 text-sm mb-3">{eyebrow}</div>}
      <motion.div
        initial={{ opacity: 0, rotate: red ? 1 : -1, y: 10 }}
        whileInView={{ opacity: 1, rotate: red ? 0.5 : -0.5, y: 0 }}
        viewport={{ once: true }}
        className="relative inline-block"
      >
        <div className="tape absolute -top-2 left-6 w-12 h-4" style={{ background: "rgba(255,240,180,0.55)" }} />
        <div className={`${red ? "bg-yt text-white" : "bg-bone text-ink"} px-6 py-3`}>
          <span className="font-display text-4xl md:text-6xl tracking-wide">{title}</span>
        </div>
      </motion.div>
    </div>
  );
}
