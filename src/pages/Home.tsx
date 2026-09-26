import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronLeft, FiChevronRight, FiEye, FiStar } from "react-icons/fi";
import { JOHN_IMAGE_URL } from "@/lib/constants";
import { TESTIMONIALS } from "@/lib/data";

const creatorLogos = [
  "Productivity Lab",
  "Founder Files",
  "The Deep Dive",
  "Wanderlust Stories",
  "Tech Thoughts",
  "Alex Chen",
  "Startup Daily",
  "Mindset Mastery",
  "Creator Academy",
  "Digital Nomad",
];

const stats = [
  { value: "50M+", label: "Total Views Generated", detail: "Across managed channels" },
  { value: "62%", label: "Average Retention", detail: "Industry avg: 35%" },
  { value: "40%", label: "Watch Time Increase", detail: "Post-edit performance" },
  { value: "100+", label: "Videos Edited", detail: "For creators & brands" },
];

const featuredProjects = [
  {
    title: "I Tracked Every Minute for 30 Days (Deep Work Analysis)",
    category: "Documentary",
    duration: "18:24",
    creator: "Productivity Lab",
    views: "2.4M",
    thumbnail:
      "https://images.pexels.com/videos/10234380/beach-cliff-drone-ocean-10234380.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    title: "How I Built a $10M Business in 2 Years (Full Story)",
    category: "Finance",
    duration: "42:15",
    creator: "Founder Files",
    views: "4.1M",
    thumbnail: "/portfolio/thumbnail-finance.png",
  },
  {
    title: "The Psychology of High Performers",
    category: "Documentary",
    duration: "2:15:00",
    creator: "The Deep Dive Podcast",
    views: "890K",
    thumbnail:
      "https://images.pexels.com/videos/4498132/pexels-photo-4498132.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
];

const niches = [
  { title: "Documentary Video", label: "DOCUMENTARY VIDEO", tone: "Cinematic · Contemplative · Emotional", thumbnail: "/portfolio/thumbnail-documentary.png" },
  { title: "True Crime Video", label: "TRUE CRIME VIDEO", tone: "Tense · Atmospheric · Investigative", thumbnail: "/portfolio/thumbnail-truecrime.png" },
  { title: "Short Video", label: "SHORT VIDEO", tone: "Fast · Punchy · Viral-Ready", thumbnail: "https://images.pexels.com/videos/8956059/pexels-photo-8956059.jpeg?auto=compress&cs=tinysrgb&w=1280" },
  { title: "Finance Video", label: "FINANCE VIDEO", tone: "Clear · Data-Driven · Authoritative", thumbnail: "/portfolio/thumbnail-finance.png" },
  { title: "AI Videos", label: "AI VIDEOS", tone: "Modern · Tech-Forward · Clean", thumbnail: "https://images.pexels.com/videos/33830768/pexels-photo-33830768.jpeg?auto=compress&cs=tinysrgb&w=1280" },
];

const services = [
  { n: "01", badge: "★ Main", title: "Video Editing", description: "Full-service editing across 5 niches — documentary, true crime, finance, AI, and short form. Retention-optimized cuts that keep viewers watching." },
  { n: "02", badge: "", title: "Thumbnail Design", description: "Click-worthy thumbnails designed to stop the scroll. Bold typography, clear focal points, and CTR-optimized layouts." },
  { n: "03", badge: "", title: "Scriptwriting", description: "Hooks that grab. Structures that hold. CTAs that convert. Scripts engineered for retention from open to outro." },
];

const processSteps = [
  { n: "01", title: "Research", body: "Understanding audience psychology" },
  { n: "02", title: "Structure", body: "Creating narrative flow" },
  { n: "03", title: "Retention", body: "Designing moments that maintain attention" },
  { n: "04", title: "Polish", body: "Motion, sound, color, finishing" },
];

const tools = [
  { name: "Premiere Pro", use: "Primary edit" },
  { name: "After Effects", use: "Motion graphics" },
  { name: "DaVinci Resolve", use: "Color grading" },
  { name: "Photoshop", use: "Thumbnails" },
  { name: "Illustrator", use: "Graphics" },
  { name: "Frame.io", use: "Review & approval" },
  { name: "Notion", use: "Project management" },
  { name: "ChatGPT", use: "Script assist" },
];

const faqs = [
  { q: "What is your typical turnaround time?", a: "Standard long-form videos (10-20 min) have a 5-7 day turnaround. Rush delivery is available for retainer clients. For ongoing partnerships, I work within your publishing cadence: weekly, bi-weekly, or daily." },
  { q: "How do you price projects?", a: "I price per project for one-offs and offer monthly retainer packages for creators publishing 4+ videos a month. Discovery calls are free. We'll discuss your goals, content volume, and find a structure that fits your budget." },
  { q: "Can you handle thumbnails and scripts too?", a: "Yes. While video editing is my main service, I also design thumbnails optimized for CTR and write scripts engineered for retention. You can hire me for one service or all three as a package." },
  { q: "What software do you use?", a: "Primarily Premiere Pro and DaVinci Resolve. Motion graphics in After Effects. Thumbnails in Photoshop. I deliver in any format your channel needs: XML, project files, master exports, and platform-optimized cuts." },
  { q: "Can you match my existing channel style?", a: "Absolutely. Style-matching is part of every onboarding. I study your last 10-20 videos, document your visual language, then build a style guide so every video feels native to your brand." },
  { q: "How do we start?", a: "Send an inquiry through the contact page. I'll respond within 24 hours with a discovery call link. From there we discuss your channel, goals, and timeline. If we're a fit, I send a proposal, and we start." },
];

function PaperTitle({ eyebrow, title, red = false }: { eyebrow?: string; title: string; red?: boolean }) {
  return (
    <div className="mb-10">
      {eyebrow && <div className="font-stamp text-bone/50 text-sm mb-3">{eyebrow}</div>}
      <motion.div initial={{ opacity: 0, rotate: red ? 1 : -1, y: 10 }} whileInView={{ opacity: 1, rotate: red ? 0.5 : -0.5, y: 0 }} viewport={{ once: true }} className="relative inline-block">
        <div className="tape absolute -top-2 left-6 w-12 h-4" style={{ background: "rgba(255,240,180,0.55)" }} />
        <div className={`${red ? "bg-yt text-white" : "bg-bone text-ink"} px-6 py-3`}>
          <span className="font-display text-4xl md:text-6xl tracking-wide">{title}</span>
        </div>
      </motion.div>
    </div>
  );
}

function TypingText() {
  const texts = ["VIDEO EDITOR", "THUMBNAIL DESIGN", "SCRIPTWRITING"];
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index]);

  return (
    <motion.div
      initial={{ opacity: 0, rotate: -2, y: 30 }}
      animate={{ opacity: 1, rotate: -1.5, y: 0 }}
      transition={{ delay: 0.35, duration: 0.7 }}
      className="relative inline-block pin"
    >
      <div className="bg-yt px-5 py-2 md:px-8 md:py-3">
        <span className="font-display text-white text-5xl md:text-7xl tracking-wide">
          {displayed}
        </span>
        <span className="inline-block w-1 h-[80%] bg-white ml-2 animate-pulse" />
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-ink dot-grid overflow-hidden flex items-center px-5 pt-28 pb-16 md:min-h-screen md:px-12">
      <div className="absolute top-0 left-0 right-0 h-10 filmstrip flex items-center px-2 gap-2 z-10">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="h-7 w-8 border border-bone/15 rounded-sm flex-shrink-0" />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-5 gap-10 items-center">
        {/* Left Content */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-5 flex items-center gap-3"
          >
            <div className="tape w-10 h-4 skew-right" style={{ background: "rgba(255,240,180,0.4)" }} />
            <div className="font-stamp text-bone/70 text-sm">
              By <span className="text-bone">John Abodunrin</span> · 2019 - 2026
            </div>
          </motion.div>

          <div className="space-y-3 mb-8">
            <TypingText />

            <div className="block" />

            <motion.div
              initial={{ opacity: 0, rotate: 1, y: 30 }}
              animate={{ opacity: 1, rotate: 1.5, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="relative inline-block ml-8 md:ml-20 pin"
            >
              <div className="bg-bone px-5 py-2 md:px-8 md:py-3">
                <span className="font-display text-ink text-5xl md:text-8xl tracking-wide">PORTFOLIO</span>
              </div>
            </motion.div>
          </div>

          <div className="w-48 h-8 mb-8 opacity-70">
            <svg viewBox="0 0 200 40" className="w-full h-full" fill="none">
              <path d="M0 20 Q25 5 50 20 Q75 35 100 20 Q125 5 150 20 Q175 35 200 20" stroke="#ff0000" strokeWidth="3" fill="none" opacity="0.7" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-xl mb-9"
          >
            <div className="dashed-box p-5 md:p-6">
              <p className="font-stamp text-bone/80 text-base md:text-lg leading-relaxed">
                I help creators, brands, and educators produce <span className="text-yt">engaging videos</span> that keep
                audiences watching. Specializing in retention optimization, storytelling structure, and YouTube growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Link to="/work" className="bg-yt px-8 py-4 font-display text-2xl text-white hover:bg-yt-dark transition-colors">
              VIEW MY WORK
            </Link>
          </motion.div>

          {/* Tablet-only stats (in-flow, no overlay) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="hidden md:block lg:hidden mt-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
              <div>
                <div className="font-display text-4xl md:text-5xl text-yt leading-none">50M+</div>
                <div className="font-stamp text-bone/60 text-xs mt-1">Views Generated</div>
              </div>
              <div>
                <div className="font-display text-4xl md:text-5xl text-yt leading-none">100+</div>
                <div className="font-stamp text-bone/60 text-xs mt-1">Videos Edited</div>
              </div>
              <div>
                <div className="font-display text-4xl md:text-5xl text-yt leading-none">15+</div>
                <div className="font-stamp text-bone/60 text-xs mt-1">Creator Partnerships</div>
              </div>
              <div>
                <div className="font-display text-4xl md:text-5xl text-yt leading-none">9</div>
                <div className="font-stamp text-bone/60 text-xs mt-1">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="lg:col-span-2 hidden lg:block"
        >
          <div className="relative">
            {/* Editor Portrait */}
            <div className="relative">
              <div className="tape absolute -top-3 left-8 z-10 w-16 h-5 skew-right" style={{ background: "rgba(255,240,180,0.6)" }} />
              <div className="tape absolute -top-3 right-8 z-10 w-16 h-5 skew-left" style={{ background: "rgba(255,240,180,0.6)" }} />
              <div className="border-4 border-bone/15 overflow-hidden aspect-[3/4] bg-charcoal">
                <img
                  src={JOHN_IMAGE_URL}
                  alt="John Abodunrin - Video Editor"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yt px-5 py-2 rotate-2">
                <span className="font-display text-white text-xl">JOHN ABODUNRIN</span>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-8 -right-8 bg-ink border-2 border-yt px-4 py-3 shadow-lg"
            >
              <div className="font-display text-4xl text-yt leading-none">9+</div>
              <div className="font-stamp text-bone/60 text-xs mt-1">Years</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute -bottom-10 -left-8 bg-ink border-2 border-yt px-4 py-3 shadow-lg"
            >
              <div className="font-display text-4xl text-yt leading-none">50M+</div>
              <div className="font-stamp text-bone/60 text-xs mt-1">Views</div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full border-4 border-yt opacity-30" />
            <div className="absolute top-1/2 -right-6 w-8 h-8 bg-yt rotate-45" />
          </div>
        </motion.div>
      </div>

    </section>
  );
}

function CreatorMarquee() {
  const doubled = [...creatorLogos, ...creatorLogos];
  return (
    <section className="relative bg-yt py-5 overflow-hidden border-y-2 border-bone/10">
      <div className="absolute inset-0 opacity-10"><div className="h-full newspaper-strip" /></div>
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap items-center relative z-10">
        {doubled.map((name, i) => <div key={`${name}-${i}`} className="flex items-center gap-12"><span className="font-display text-white text-xl md:text-2xl tracking-wider">{name.toUpperCase()}</span><span className="text-white/40 text-2xl">●</span></div>)}
      </div>
    </section>
  );
}

function Numbers() {
  return (
    <section className="relative bg-charcoal py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10">
        <PaperTitle eyebrow="By The Numbers" title="EDITING THAT PERFORMS" red />
        <p className="font-stamp text-bone/60 max-w-xl -mt-5 mb-12">Real results from real creators. Numbers don't lie, and these speak for themselves.</p>
        <div className="grid md:grid-cols-4 gap-5">
          {stats.map((s, i) => <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-ink border border-bone/10 p-6"><div className="font-display text-5xl md:text-6xl text-yt leading-none">{s.value}</div><div className="font-stamp text-bone text-base mt-3">{s.label}</div><div className="font-stamp text-bone/45 text-xs mt-1">{s.detail}</div></motion.div>)}
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section className="relative bg-ink py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-4 flex-wrap"><PaperTitle eyebrow="Featured Work" title="RECENT EDITS" /><Link to="/work" className="font-stamp text-yt hover:underline mb-4">See all projects</Link></div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((p, i) => <motion.div key={p.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><div className="relative aspect-yt overflow-hidden border-2 border-bone/10 bg-charcoal group"><img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" /><div className="absolute top-3 left-3 bg-ink/85 px-3 py-1"><span className="font-stamp text-bone text-xs">{p.category}</span></div><div className="absolute top-3 right-3 bg-ink/85 px-3 py-1"><span className="font-mono text-bone text-xs">{p.duration}</span></div><div className="absolute left-4 bottom-4 right-4"><div className="font-stamp text-bone text-sm leading-tight">{p.title}</div></div></div><div className="mt-4"><h3 className="font-stamp text-bone text-base leading-tight">{p.title}</h3><div className="flex items-center gap-2 mt-2 font-stamp text-bone/55 text-xs"><span>{p.creator}</span><span>·</span><span className="flex items-center gap-1"><FiEye className="h-3 w-3" /> {p.views}</span></div></div></motion.div>)}
        </div>
      </div>
    </section>
  );
}

function Niches() {
  return (
    <section className="relative bg-charcoal py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10">
        <PaperTitle eyebrow="Niches I Edit" title="VIDEO CATEGORIES" />
        <p className="font-stamp text-bone/60 max-w-xl -mt-5 mb-12">From slow-burn documentaries to viral shorts, I edit across 5 specialized video niches.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {niches.map((n, i) => <motion.div key={n.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-ink border border-bone/10 overflow-hidden group"><div className="relative aspect-yt overflow-hidden"><img src={n.thumbnail} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" /><div className="absolute left-3 bottom-3 font-stamp text-bone text-sm">{n.title}</div></div><div className="p-4"><h3 className="font-display text-bone text-xl">{n.label}</h3><p className="font-stamp text-bone/50 text-xs mt-1">{n.tone}</p></div></motion.div>)}
        </div>
        <div className="mt-8 bg-ink border border-bone/10 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"><div><div className="font-display text-bone text-2xl">DON'T SEE YOUR NICHE?</div><div className="font-stamp text-bone/55 text-sm mt-1">I edit across all content verticals.</div></div><Link to="/contact" className="font-stamp text-yt hover:underline">Let's Talk →</Link></div>
      </div>
    </section>
  );
}

function MeetEditor() {
  return (
    <section className="relative bg-ink py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-25" />
      <div className="relative z-10 mx-auto w-full max-w-[70rem] px-5 md:px-10 grid lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto w-full max-w-[24rem]"
        >
          <div className="tape absolute -top-3 left-8 z-10 w-16 h-5" style={{ background: "rgba(255,240,180,0.6)" }} />
          <div className="border-4 border-bone/15 overflow-hidden aspect-[3/4] bg-charcoal">
            <img
              src={JOHN_IMAGE_URL}
              alt="John Abodunrin"
              loading="lazy"
              decoding="async"
              className="block w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-yt px-5 py-2 rotate-2">
            <span className="font-display text-white text-2xl">JOHN ABODUNRIN</span>
          </div>
        </motion.div>
        <div className="min-w-0">
          <div className="font-stamp text-bone/55 text-sm mb-2">John Abodunrin</div>
          <h2 className="font-display text-bone text-4xl md:text-5xl leading-[0.95] mb-6">
            MEET THE EDITOR<br />
            <span className="text-yt">I DON'T JUST EDIT VIDEOS.</span><br />
            I ENGINEER ATTENTION.
          </h2>
          <div className="space-y-4 font-stamp text-bone/70 leading-relaxed">
            <p>
              I'm John, a YouTube editor with 9 years of experience helping creators turn raw footage into content that performs.
              I've generated over 50 million views across managed channels, and counting.
            </p>
            <p>
              My approach combines storytelling structure, retention psychology, and a deep understanding of YouTube's algorithm.
              Every cut is intentional. Every frame earns its place.
            </p>
          </div>
          <Link to="/about" className="inline-block mt-8 border-2 border-yt px-7 py-3 font-display text-xl text-yt hover:bg-yt hover:text-white transition-colors">
            Read full story
          </Link>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="relative bg-charcoal py-20 md:py-28 overflow-hidden"><div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10"><PaperTitle eyebrow="What I Offer" title="3 CORE SERVICES" red /><p className="font-stamp text-bone/60 max-w-xl -mt-5 mb-12">Hire me for one, or hire me for the full creator stack.</p><div className="grid md:grid-cols-3 gap-6">{services.map((s, i) => <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative bg-ink border border-bone/10 p-6 pt-8 hover:border-yt/50 transition-colors"><div className="absolute -top-2 left-5 z-10"><div className="w-4 h-4 rounded-full bg-yt" /></div><div className="flex items-center justify-between mb-4"><span className="font-mono text-yt text-xs">{s.n}</span>{s.badge && <span className="font-stamp text-yt text-xs">{s.badge}</span>}</div><h3 className="font-display text-bone text-3xl mb-3">{s.title}</h3><p className="font-stamp text-bone/65 text-sm leading-relaxed mb-6">{s.description}</p><Link to="/services" className="font-stamp text-yt text-sm hover:underline">Learn more</Link></motion.div>)}</div></div></section>
  );
}

function Process() {
  return (
    <section className="relative bg-ink py-20 md:py-28 overflow-hidden"><div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10"><PaperTitle eyebrow="How I Work" title="MY PROCESS" /><p className="font-stamp text-bone/60 max-w-xl -mt-5 mb-12">Four steps. Every project. No shortcuts, no guesswork, just a proven framework.</p><div className="grid md:grid-cols-4 gap-4">{processSteps.map((p, i) => <motion.div key={p.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-charcoal border border-bone/10 p-5"><div className="font-display text-yt text-4xl mb-4">{p.n}</div><h3 className="font-display text-bone text-2xl mb-2">{p.title}</h3><p className="font-stamp text-bone/55 text-sm">{p.body}</p></motion.div>)}</div><div className="mt-10 text-center"><Link to="/process" className="inline-block border-2 border-yt px-8 py-3 font-display text-xl text-yt hover:bg-yt hover:text-white transition-colors">See full process</Link></div></div></section>
  );
}

function Tools() {
  return (
    <section className="relative bg-charcoal py-20 md:py-28 overflow-hidden"><div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10"><PaperTitle eyebrow="My Stack" title="TOOLS I USE" red /><p className="font-stamp text-bone/60 max-w-xl -mt-5 mb-12">Industry-standard software, calibrated workflows, and AI-assisted optimization.</p><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{tools.map((t, i) => <motion.div key={t.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="bg-ink border border-bone/10 p-4"><div className="font-display text-bone text-xl">{t.name}</div><div className="font-stamp text-bone/45 text-xs mt-1">{t.use}</div></motion.div>)}</div></div></section>
  );
}

function Testimonial() {
  const slides = [
    {
      quote: "John doesn't just edit videos — he engineers attention. Our average view duration jumped 40% after he took over our editing.",
      author: "Marcus Chen",
      role: "Creator, 2.4M subscribers",
      avatar: "/portfolio/creator-portrait-1.png",
    },
    ...TESTIMONIALS.map((t) => ({
      quote: t.quote,
      author: t.author,
      role: t.role,
      avatar: t.avatar,
    })),
  ];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (next: number, dir: number) => {
    setDirection(dir);
    setIndex((next + slides.length) % slides.length);
  };
  const prev = () => goTo(index - 1, -1);
  const next = () => goTo(index + 1, 1);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, [slides.length]);

  const active = slides[index];

  return (
    <section className="relative bg-ink py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-charcoal border border-bone/10 p-8 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 28 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 * direction }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-yt font-display text-7xl leading-none mb-4">"</div>
              <p className="font-display text-bone text-3xl md:text-5xl leading-tight mb-8 min-h-[180px] md:min-h-[220px]">{active.quote}</p>
              <div className="flex items-center gap-4 border-t border-bone/10 pt-6">
                <img src={active.avatar} alt={active.author} className="h-14 w-14 rounded-full border-2 border-yt object-cover" />
                <div>
                  <div className="font-stamp text-bone">{active.author}</div>
                  <div className="font-stamp text-bone/45 text-sm">{active.role}</div>
                </div>
                <div className="ml-auto hidden md:flex gap-1 text-yt">{[...Array(5)].map((_, i) => <FiStar key={i} className="h-4 w-4 fill-current" />)}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="mt-4 flex items-center justify-end gap-3">
          <div className="flex items-center gap-2 mr-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 transition-all duration-300 ${i === index ? "w-8 bg-yt" : "w-3 bg-bone/20 hover:bg-bone/40"}`}
              />
            ))}
          </div>
          <span className="font-mono text-xs text-bone/40 tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-11 h-11 flex items-center justify-center border border-bone/20 text-bone/70 hover:border-yt hover:text-yt transition-colors"
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-11 h-11 flex items-center justify-center bg-yt text-white hover:bg-yt-dark transition-colors"
          >
            <FiChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-charcoal py-20 md:py-28 overflow-hidden"><div className="relative z-10 max-w-4xl mx-auto px-5 md:px-10"><PaperTitle eyebrow="Got Questions?" title="FREQUENTLY ASKED" /><div className="space-y-3 -mt-2">{faqs.map((faq, i) => <motion.div key={faq.q} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="bg-ink border border-bone/10 overflow-hidden"><button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-charcoal/50 transition-colors"><span className="font-stamp text-bone text-sm md:text-base pr-4">{faq.q}</span><FiChevronDown className={`h-5 w-5 text-yt transition-transform ${open === i ? "rotate-180" : ""}`} /></button><AnimatePresence>{open === i && <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden"><p className="px-5 pb-5 font-stamp text-bone/60 text-sm leading-relaxed">{faq.a}</p></motion.div>}</AnimatePresence></motion.div>)}</div><div className="mt-8 text-center"><p className="font-stamp text-bone/55 text-sm mb-3">Still have questions?</p><Link to="/contact" className="font-stamp text-yt hover:underline">Get in touch</Link></div></div></section>
  );
}

function FinalCTA() {
  return (
    <section className="relative bg-yt py-20 md:py-28 overflow-hidden"><div className="absolute inset-0 opacity-10"><div className="h-full newspaper-strip" /></div><div className="relative z-10 max-w-5xl mx-auto px-5 md:px-10 text-center"><div className="font-stamp text-white/80 text-sm mb-5">★ NOW BOOKING Q2 2026 ★</div><h2 className="font-display text-white text-6xl md:text-8xl leading-[0.88] mb-6">LET'S MAKE YOUR<br />NEXT VIDEO<br />UNMISSABLE.</h2><p className="font-stamp text-white/80 text-lg max-w-2xl mx-auto mb-8">Free 15-minute discovery call. No pressure, no pitch, just a conversation about your content goals.</p><div className="flex flex-wrap justify-center gap-4 mb-6"><Link to="/contact" className="bg-ink px-8 py-4 font-display text-2xl text-white hover:bg-coal transition-colors">BOOK A DISCOVERY CALL</Link><Link to="/work" className="border-2 border-white px-8 py-4 font-display text-2xl text-white hover:bg-white hover:text-yt transition-colors">SEE THE WORK</Link></div><div className="flex flex-wrap justify-center gap-5 font-stamp text-white/70 text-xs"><span>Reply within 24h</span><span>Free consultation</span><span>Flexible packages</span></div></div></section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-10 border-t border-bone/10"><div className="max-w-6xl mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6"><div><div className="flex items-center gap-2 font-stamp text-bone"><span className="bg-yt px-2.5 py-2 text-white">John</span><span>Abodunrin</span></div><div className="mt-2 font-stamp text-bone/45 text-xs">YouTube Editor & Storytelling Specialist</div></div><div className="flex flex-wrap items-center gap-4 font-stamp text-bone/45 text-xs"><span>© 2026 John Abodunrin</span><a href="https://thejosh.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-yt transition-colors">Site by Josh Studio ↗</a></div></div></footer>
  );
}

export default function Home(_props: { onPlayReel: () => void }) {
  return (
    <>
      <Hero />
      <CreatorMarquee />
      <Numbers />
      <FeaturedWork />
      <Niches />
      <MeetEditor />
      <Services />
      <Process />
      <Tools />
      <Testimonial />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
