import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FiX } from "react-icons/fi";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Nav({ onPlayReel: _onPlayReel }: { onPlayReel: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-300 ${scrolled ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-10 md:py-4">
          <Link to="/" data-cursor="hover" className="flex shrink-0 items-center gap-2" aria-label="John Abodunrin, home">
            <span className="flex h-8 items-center bg-yt px-2.5 font-stamp text-sm text-white">John</span>
            <span className="font-stamp text-sm text-bone sm:text-base">Abodunrin</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map(l => (
              <Link key={l.href} to={l.href}
                className={`font-stamp px-4 py-2 text-sm transition-colors ${location.pathname === l.href ? "text-yt" : "text-bone/70 hover:text-yt"}`}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="bg-yt px-5 py-2 text-sm font-stamp text-white hover:bg-yt-dark transition-colors">
              Hire Me
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex lg:hidden items-center gap-3 border border-bone/20 px-4 py-2 font-stamp text-sm text-bone transition-colors hover:border-yt hover:text-yt"
            aria-label="Open navigation menu"
          >
            <span>MENU</span>
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-3 self-end bg-current" />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-ink flex flex-col">
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-display text-bone text-2xl">MENU</span>
              <button onClick={() => setOpen(false)}><FiX className="h-6 w-6 text-bone" /></button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-5 gap-4">
              {LINKS.map((l, i) => (
                <motion.div key={l.href} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                  <Link to={l.href} onClick={() => setOpen(false)}
                    className={`block font-display text-5xl border-b border-bone/10 pb-3 transition-colors ${location.pathname === l.href ? "text-yt" : "text-bone hover:text-yt"}`}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-5 py-8">
              <Link to="/contact" onClick={() => setOpen(false)} className="block bg-yt py-4 text-center font-display text-2xl text-white">
                HIRE ME
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
