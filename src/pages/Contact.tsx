import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCheck, FiClock, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";

const PROJECT_TYPES = ["YouTube Editing", "Thumbnail Design", "Scriptwriting", "Retention Optimization", "Full Package", "Other"];
const VOLUMES = ["1-4 videos/month", "5-10 videos/month", "10+ videos/month", "One-time project"];
const BUDGETS = ["< $2k", "$2k – $5k", "$5k – $10k", "$10k+"];

const contactMethods = [
  { icon: FiMail, label: "Email", value: "hello@johnabodunrin.com", link: "mailto:hello@johnabodunrin.com" },
  { icon: FiPhone, label: "Response Time", value: "Within 24 hours" },
  { icon: FiClock, label: "Availability", value: "Booking Q2 2026" },
  { icon: FiMapPin, label: "Location", value: "Los Angeles, CA" },
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM PST" },
  { day: "Sunday", hours: "Closed" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", channel: "", type: "", volume: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="relative bg-ink pt-28 pb-24">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
        {/* Header */}
        <div className="mb-16">
          <motion.div initial={{ opacity: 0, rotate: -1 }} whileInView={{ opacity: 1, rotate: -0.5 }} viewport={{ once: true }} className="relative inline-block">
            <div className="tape absolute -top-2 left-4 w-12 h-4" style={{ background: "rgba(255,240,180,0.55)" }} />
            <div className="bg-yt px-6 py-3">
              <span className="font-display text-white text-5xl md:text-7xl">GET IN TOUCH</span>
            </div>
          </motion.div>
          <p className="mt-6 font-stamp text-bone/60 max-w-2xl text-lg">
            Ready to level up your content? Let's discuss your goals and see if we're a good fit.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {contactMethods.map((method, i) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-charcoal border border-bone/10 p-5 hover:border-yt/50 transition-colors"
            >
              <method.icon className="h-8 w-8 text-yt mb-3" />
              <div className="font-stamp text-bone/40 text-xs mb-1">{method.label}</div>
              <div className="font-stamp text-bone text-sm">{method.value}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-10 mb-20">
          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-3 space-y-6">
            <div className="bg-charcoal border border-bone/10 p-6 md:p-8">
              <h3 className="font-display text-bone text-3xl mb-2">PROJECT INQUIRY</h3>
              <p className="font-stamp text-bone/60 text-sm mb-6">Tell me about your project and I'll get back to you within 24 hours.</p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="font-stamp text-bone/50 text-xs mb-2 block">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-ink border border-bone/20 p-3 text-bone font-stamp text-sm focus:border-yt focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="font-stamp text-bone/50 text-xs mb-2 block">EMAIL *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-ink border border-bone/20 p-3 text-bone font-stamp text-sm focus:border-yt focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="font-stamp text-bone/50 text-xs mb-2 block">CHANNEL / BRAND NAME</label>
                <input
                  type="text"
                  value={form.channel}
                  onChange={(e) => setForm({ ...form, channel: e.target.value })}
                  className="w-full bg-ink border border-bone/20 p-3 text-bone font-stamp text-sm focus:border-yt focus:outline-none transition-colors"
                  placeholder="@yourchannel"
                />
              </div>

              <div className="mb-6">
                <label className="font-stamp text-bone/50 text-xs mb-3 block">SERVICE NEEDED *</label>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setForm({ ...form, type: t })}
                      className={`px-4 py-2 font-stamp text-xs transition-all ${
                        form.type === t ? "bg-yt text-white" : "bg-ink border border-bone/20 text-bone/70 hover:border-yt"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="font-stamp text-bone/50 text-xs mb-3 block">MONTHLY VOLUME</label>
                  <div className="space-y-2">
                    {VOLUMES.map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setForm({ ...form, volume: v })}
                        className={`w-full text-left px-4 py-2 font-stamp text-xs transition-all ${
                          form.volume === v ? "bg-yt text-white" : "bg-ink border border-bone/20 text-bone/70 hover:border-yt"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="font-stamp text-bone/50 text-xs mb-3 block">BUDGET RANGE</label>
                  <div className="space-y-2">
                    {BUDGETS.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm({ ...form, budget: b })}
                        className={`w-full text-left px-4 py-2 font-stamp text-xs transition-all ${
                          form.budget === b ? "bg-yt text-white" : "bg-ink border border-bone/20 text-bone/70 hover:border-yt"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="font-stamp text-bone/50 text-xs mb-2 block">PROJECT DETAILS *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-ink border border-bone/20 p-3 text-bone font-stamp text-sm focus:border-yt focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your channel, goals, and what you're looking for..."
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="w-full bg-yt text-white font-display text-xl py-4 hover:bg-yt-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {sent ? (
                  <>
                    <FiCheck className="h-5 w-5" />
                    MESSAGE SENT!
                  </>
                ) : (
                  <>
                    <FiSend className="h-5 w-5" />
                    SEND MESSAGE
                  </>
                )}
              </button>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-yt/10 border border-yt/30 p-4"
                >
                  <p className="font-stamp text-bone/80 text-sm">
                    Thanks for reaching out! I'll review your message and get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>
          </form>

          {/* Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-charcoal border border-bone/10 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <FiClock className="h-6 w-6 text-yt" />
                <h3 className="font-display text-bone text-2xl">OFFICE HOURS</h3>
              </div>
              <div className="space-y-3">
                {officeHours.map((oh) => (
                  <div key={oh.day} className="flex justify-between items-center border-b border-bone/10 pb-2 last:border-0">
                    <span className="font-stamp text-bone/70 text-sm">{oh.day}</span>
                    <span className="font-stamp text-bone text-sm">{oh.hours}</span>
                  </div>
                ))}
              </div>
              <p className="font-stamp text-bone/50 text-xs mt-4">
                * Response time may vary during peak periods
              </p>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-charcoal border border-bone/10 p-6"
            >
              <h3 className="font-display text-bone text-2xl mb-4">QUICK FAQ</h3>
              <div className="space-y-3">
                {[
                  { q: "Do you offer free consultations?", a: "Yes! Every inquiry includes a free 15-minute discovery call." },
                  { q: "What's your response time?", a: "I respond to all inquiries within 24 hours, usually much faster." },
                  { q: "Can I see samples before hiring?", a: "Absolutely. Check out my Work page for full case studies." },
                  { q: "Do you work with new creators?", a: "Yes! I work with creators at all stages, from 0 to 5M+ subs." },
                ].map((faq, i) => (
                  <div key={i} className="border-b border-bone/10 pb-3 last:border-0">
                    <div className="font-stamp text-bone text-sm mb-1">{faq.q}</div>
                    <div className="font-stamp text-bone/60 text-xs">{faq.a}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-yt/10 border border-yt/30 p-6"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-yt" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="font-stamp text-bone/80 text-sm mb-3 italic">
                "John transformed our channel's performance. Our average view duration jumped 40% in the first month."
              </p>
              <div className="font-stamp text-bone text-sm">— Marcus Chen</div>
              <div className="font-stamp text-bone/50 text-xs">Creator, 2.4M subscribers</div>
            </motion.div>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-charcoal border-2 border-yt p-10 text-center"
        >
          <h3 className="font-display text-bone text-4xl md:text-5xl mb-4">
            STILL HAVE QUESTIONS?
          </h3>
          <p className="font-stamp text-bone/60 mb-6 max-w-xl mx-auto">
            Check out my FAQ page or reach out directly. I'm here to help.
          </p>
          <Link
            to="/services"
            className="inline-block border-2 border-yt px-8 py-4 font-display text-2xl text-yt hover:bg-yt hover:text-white transition-colors"
          >
            VIEW SERVICES
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
