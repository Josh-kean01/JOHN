import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import ReelPlayer from "@/components/ReelPlayer";
import Home from "@/pages/Home";
import AboutPage from "@/pages/About";
import WorkPage from "@/pages/Work";
import ProcessPage from "@/pages/Process";
import ServicesPage from "@/pages/Services";
import ContactPage from "@/pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement;
      setP(Math.min(1, (h.scrollTop || document.body.scrollTop) / (h.scrollHeight - h.clientHeight)));
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[85] h-0.5 bg-bone/5">
      <div className="h-full bg-yt" style={{ width: `${p * 100}%` }} />
    </div>
  );
}

function Pages({ onPlayReel }: { onPlayReel: () => void }) {
  return (
    <Routes>
      <Route path="/" element={<Home onPlayReel={onPlayReel} />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/process" element={<ProcessPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [reelOpen, setReelOpen] = useState(false);

  return (
    <BrowserRouter>
      <SmoothScroll>
        <div className="relative min-h-screen bg-ink text-bone">
          <Loader onDone={() => setLoaded(true)} />
          {loaded && (
            <>
              <Cursor />
              <ScrollProgress />
              <ScrollToTop />
              <Nav onPlayReel={() => setReelOpen(true)} />
              <Pages onPlayReel={() => setReelOpen(true)} />
              <ReelPlayer open={reelOpen} onClose={() => setReelOpen(false)} />
            </>
          )}
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}
