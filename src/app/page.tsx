import Image from "next/image";
import { Footer } from "@/components/Footer";
import { BackgroundAura } from "@/components/BackgroundAura";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#0A0608] text-[#FAF7F2]">
      {/* Royal Crimson, Indigo & Antique Gold Ambient Glow */}
      <BackgroundAura />

      {/* Main Centered Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 sm:px-8">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center">
          
          {/* 1. Official Shahkaar Complete Logo Lockup */}
          <div className="relative mb-6 sm:mb-8 flex items-center justify-center w-full">
            {/* Soft radiant ambient glow behind logo */}
            <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-b from-[#D4AF37]/15 via-[#681628]/20 to-transparent blur-3xl pointer-events-none" />
            
            <Image
              src="/shahkaar-logo.png"
              alt="Shahkaar — Heritage. Handcrafted. Timeless."
              width={1334}
              height={1032}
              priority
              className="relative w-full max-w-[340px] sm:max-w-[460px] md:max-w-[520px] h-auto object-contain drop-shadow-[0_15px_45px_rgba(212,175,55,0.25)] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          <h1 className="sr-only">Shahkaar — Heritage. Handcrafted. Timeless.</h1>

          {/* 2. Launching Soon Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/25 bg-[#160B11]/85 px-6 py-2.5 text-xs text-[#E7C96E] shadow-[0_0_25px_-5px_rgba(212,175,55,0.2)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
            </span>
            <span className="text-xs sm:text-[13px] tracking-[0.24em] uppercase font-medium">
              Launching Soon
            </span>
          </div>

        </div>
      </main>

      {/* 3. Minimal Footer */}
      <Footer />
    </div>
  );
}
