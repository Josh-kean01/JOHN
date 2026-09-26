import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { SERVICES, VIDEO_PROJECTS } from "@/lib/data";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories = [
    { key: "documentary", title: "Documentary", projects: VIDEO_PROJECTS.documentary },
    { key: "truecrime", title: "True Crime", projects: VIDEO_PROJECTS.truecrime },
    { key: "short", title: "Short Form", projects: VIDEO_PROJECTS.short },
    { key: "finance", title: "Finance", projects: VIDEO_PROJECTS.finance },
    { key: "ai", title: "AI / Tech", projects: VIDEO_PROJECTS.ai },
  ];

  const packages = [
    {
      name: "Starter",
      price: "$2,000",
      period: "per video",
      desc: "Perfect for creators publishing 1-2 videos per month",
      features: ["1 long-form video (10-20 min)", "Retention optimization", "Sound design & mixing", "Color grading", "2 revision rounds", "Platform-optimized exports"],
    },
    {
      name: "Growth",
      price: "$4,000",
      period: "per month",
      desc: "For creators publishing 2-4 videos per month",
      features: ["Up to 4 long-form videos", "4 short-form clips per video", "Thumbnail design", "Title optimization", "Unlimited revision rounds", "Monthly strategy call"],
      popular: true,
    },
    {
      name: "Scale",
      price: "$8,000",
      period: "per month",
      desc: "For high-volume creators and brands",
      features: ["Up to 8 long-form videos", "8 short-form clips per video", "Full creator stack (edit + thumbnails + scripts)", "Dedicated Slack channel", "Priority support", "Monthly analytics review"],
    },
  ];

  return (
    <div className="relative bg-ink pt-28 pb-24">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
        {/* Header */}
        <div className="mb-16">
          <motion.div initial={{ opacity: 0, rotate: -1 }} whileInView={{ opacity: 1, rotate: -0.5 }} viewport={{ once: true }} className="relative inline-block">
            <div className="tape absolute -top-2 left-4 w-12 h-4" style={{ background: "rgba(255,240,180,0.55)" }} />
            <div className="bg-yt px-6 py-3">
              <span className="font-display text-white text-5xl md:text-7xl">SERVICES</span>
            </div>
          </motion.div>
          <p className="mt-6 font-stamp text-bone/60 max-w-2xl text-lg">
            Outcome-focused services. Every offering is designed to make your content perform better.
          </p>
        </div>

        {/* Service Details */}
        <div className="space-y-6 mb-20">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div
                className="bg-charcoal border border-bone/10 overflow-hidden transition-colors"
                onMouseEnter={() => setActiveService(s.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="p-6 md:p-8 flex items-start gap-6 flex-wrap">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-yt flex items-center justify-center">
                    <span className="font-display text-white text-2xl">{s.n}</span>
                  </div>
                  <div className="flex-1 min-w-[240px]">
                    <div className="flex items-baseline justify-between gap-4 flex-wrap">
                      <h3 className="font-display text-bone text-3xl md:text-4xl">{s.title}</h3>
                      <Link to="/contact" className="font-stamp text-yt text-sm hover:underline">Hire for this →</Link>
                    </div>
                    <p className="font-stamp text-yt text-xs mt-1 italic">{s.tagline}</p>
                    <p className="font-stamp text-bone/70 text-sm mt-3">{s.description}</p>

                    <motion.div
                      initial={false}
                      animate={{ height: activeService === s.id ? "auto" : 0, opacity: activeService === s.id ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-bone/10 grid md:grid-cols-3 gap-4">
                        <div>
                          <div className="eyebrow text-bone/40 mb-2">Deliverables</div>
                          <ul className="space-y-1.5">
                            {s.deliverables.map((d) => (
                              <li key={d} className="flex items-center gap-2 text-sm font-stamp text-bone/70">
                                <FiCheck className="h-3.5 w-3.5 text-yt" /> {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="eyebrow text-bone/40 mb-2">Pricing</div>
                          <div className="font-stamp text-bone/80 text-sm">Starting: <span className="text-yt">{s.starting}</span></div>
                          <div className="font-stamp text-bone/80 text-sm mt-1">Retainer: <span className="text-yt">{s.retainer}</span></div>
                        </div>
                        <div>
                          <div className="eyebrow text-bone/40 mb-2">Categories</div>
                          <div className="flex flex-wrap gap-1.5">
                            {s.categories.map((c) => (
                              <span key={c} className="font-stamp text-bone/60 text-xs bg-ink px-2 py-1">{c}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Categories */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, rotate: 1 }} whileInView={{ opacity: 1, rotate: 0 }} viewport={{ once: true }} className="inline-block bg-bone px-6 py-3 mb-6">
            <span className="font-display text-ink text-3xl md:text-5xl">VIDEO EDITING CATEGORIES</span>
          </motion.div>
          <p className="font-stamp text-bone/60 text-sm mb-8">
            My main service. Every project below demonstrates how storytelling, pacing, and retention engineering combine to create videos people actually finish.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat.key}
                onClick={() => setExpandedCategory(expandedCategory === cat.key ? null : cat.key)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden border text-left transition-all ${expandedCategory === cat.key ? "border-yt bg-charcoal" : "border-bone/10 bg-charcoal hover:border-yt/50"}`}
              >
                <div className="aspect-yt overflow-hidden">
                  <img src={cat.projects[0].thumbnail} alt={cat.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                </div>
                <div className="p-4">
                  <div className="eyebrow text-yt mb-1">CATEGORY</div>
                  <h3 className="font-display text-bone text-xl">{cat.title}</h3>
                  <div className="font-stamp text-bone/50 text-xs mt-1">{cat.projects.length} projects</div>

                  <motion.div
                    initial={false}
                    animate={{ height: expandedCategory === cat.key ? "auto" : 0, opacity: expandedCategory === cat.key ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 pt-3 border-t border-bone/10 space-y-2">
                      {cat.projects.map((p) => (
                        <div key={p.id} className="flex items-center gap-3">
                          <img src={p.thumbnail} alt={p.title} className="w-16 h-10 object-cover flex-shrink-0 border border-bone/20" />
                          <div className="flex-1 min-w-0">
                            <div className="font-stamp text-bone/80 text-xs truncate">{p.title}</div>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="font-mono text-[10px] text-bone/40">{p.duration}</span>
                              <span className="font-mono text-[10px] text-bone/40">👁 {p.views}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/work" className="inline-block bg-yt px-8 py-3 font-display text-xl text-white hover:bg-yt-dark transition-colors">
              VIEW FULL WORK →
            </Link>
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, rotate: -1 }} whileInView={{ opacity: 1, rotate: -0.5 }} viewport={{ once: true }} className="inline-block bg-bone px-6 py-3 mb-6">
            <span className="font-display text-ink text-3xl md:text-5xl">PRICING PACKAGES</span>
          </motion.div>
          <p className="font-stamp text-bone/60 text-sm mb-8">
            Three tiers to match your content volume and goals. All packages include retention optimization.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-charcoal border p-6 ${pkg.popular ? "border-yt" : "border-bone/10"}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-6 bg-yt px-3 py-1">
                    <span className="font-stamp text-white text-xs">MOST POPULAR</span>
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="font-display text-bone text-2xl">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-display text-4xl text-yt">{pkg.price}</span>
                    <span className="font-stamp text-bone/50 text-sm">{pkg.period}</span>
                  </div>
                  <p className="font-stamp text-bone/60 text-xs mt-2">{pkg.desc}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm font-stamp text-bone/70">
                      <FiCheck className="h-4 w-4 text-yt mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 font-display text-lg transition-colors ${pkg.popular ? "bg-yt text-white hover:bg-yt-dark" : "border border-bone/20 text-bone hover:border-yt hover:text-yt"}`}
                >
                  GET STARTED
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, rotate: 1 }} whileInView={{ opacity: 1, rotate: 0.5 }} viewport={{ once: true }} className="inline-block bg-bone px-6 py-3 mb-6">
            <span className="font-display text-ink text-3xl md:text-5xl">SERVICE FAQ</span>
          </motion.div>

          <div className="space-y-3">
            {[
              { q: "What's included in each video edit?", a: "Full editing from raw footage to final master. Includes retention optimization, sound design, color grading, motion graphics, and platform-optimized exports. Thumbnail design is separate or included in Growth+ packages." },
              { q: "Can I hire you for just thumbnails or scripts?", a: "Absolutely. While video editing is my main service, I offer thumbnail design and scriptwriting as standalone services. You can also bundle all three for a complete creator stack." },
              { q: "Do you offer rush delivery?", a: "Yes, rush delivery is available for retainer clients (Growth and Scale packages). Standard turnaround is 10-14 days for long-form, 2-3 days for short-form. Rush can reduce this by 30-50%." },
              { q: "What if I'm not happy with the first draft?", a: "Every project includes revision rounds. I work closely with you to ensure the final product matches your vision. My goal is to make videos you're proud to publish." },
              { q: "Do you work with new creators?", a: "Yes! I work with creators at all stages — from 0 to 5M+ subscribers. The key is alignment on goals and expectations. Free discovery calls help us determine if we're a good fit." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-charcoal border border-bone/10 p-5"
              >
                <h4 className="font-stamp text-bone text-sm mb-2">{faq.q}</h4>
                <p className="font-stamp text-bone/60 text-xs leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-charcoal border-2 border-yt p-10 text-center"
        >
          <h3 className="font-display text-bone text-4xl md:text-5xl mb-4">
            READY TO LEVEL UP YOUR CONTENT?
          </h3>
          <p className="font-stamp text-bone/60 mb-6 max-w-xl mx-auto">
            Free discovery call to discuss your goals. No commitment, just a conversation about your content.
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
