import { CLIENT_LOGOS } from "@/lib/data";

export default function Marquee() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="relative overflow-hidden bg-yt py-4">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap items-center">
        {doubled.map((name, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-white text-xl md:text-2xl tracking-wider">{name.toUpperCase()}</span>
            <svg viewBox="0 0 16 16" className="w-4 h-4 flex-shrink-0" fill="none">
              <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6" fill="white" opacity="0.7"/>
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
}
