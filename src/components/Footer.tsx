export function Footer() {
  return (
    <footer className="relative z-10 w-full py-6 text-center border-t border-[#D4AF37]/10 bg-[#0A0608]/80 backdrop-blur-sm">
      <div className="mx-auto max-w-xl px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <span className="font-serif tracking-[0.2em] uppercase text-[#FAF7F2]/90">
          Shahkaar
        </span>
        <p className="text-[11px] text-[#6E6762] tracking-wide">
          &copy; 2026 Shahkaar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
