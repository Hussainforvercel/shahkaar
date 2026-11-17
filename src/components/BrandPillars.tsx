import { Sparkles, Layers, ShieldCheck } from "lucide-react";

interface Pillar {
  icon: typeof Sparkles;
  badge: string;
  title: string;
  description: string;
}

const PILLARS: Pillar[] = [
  {
    icon: Sparkles,
    badge: "01 • Craftsmanship",
    title: "Curated Quality",
    description:
      "Every piece is thoughtfully designed, meticulously sourced, and crafted with uncompromising standards of timeless perfection.",
  },
  {
    icon: Layers,
    badge: "02 • Exclusivity",
    title: "Limited Releases",
    description:
      "Small-batch seasonal capsules produced in strictly numbered quantities, ensuring rarity and enduring collectible distinction.",
  },
  {
    icon: ShieldCheck,
    badge: "03 • Privilege",
    title: "VIP Launch Access",
    description:
      "Waitlist members enjoy a private 48-hour pre-opening shopping window, reserved inventory, and prioritized white-glove dispatch.",
  },
];

export function BrandPillars() {
  return (
    <section className="w-full max-w-4xl mx-auto mt-12 sm:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
        {PILLARS.map((pillar) => {
          const IconComponent = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#C8A96A]/15 bg-[#121215]/60 p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-[#C8A96A]/40 hover:bg-[#151519]/80 hover:shadow-[0_0_30px_-8px_rgba(200,169,106,0.14)]"
            >
              {/* Subtle top hairline highlight on hover */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#DFC285]/0 to-transparent transition-opacity duration-300 group-hover:via-[#DFC285]/40" />

              <div>
                {/* Header row: Icon & Index Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C8A96A]/20 bg-[#1A1A1E] text-[#DFC285] transition-all duration-300 group-hover:border-[#C8A96A]/40 group-hover:text-[#FBF6E9] group-hover:scale-105">
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#C8A96A]/70 group-hover:text-[#DFC285] transition-colors">
                    {pillar.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-normal tracking-wide text-[#F5F3EE] group-hover:text-[#FFF] transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs leading-relaxed text-[#9E9C94] group-hover:text-[#A8A69E] transition-colors">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom hairline accent */}
              <div className="mt-4 pt-3 border-t border-[#F5F3EE]/[0.05] flex items-center justify-between text-[10px] tracking-wider uppercase text-[#6B6963] group-hover:text-[#C8A96A]/80 transition-colors">
                <span>Shahkaar Standard</span>
                <span className="font-serif text-xs">✦</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
