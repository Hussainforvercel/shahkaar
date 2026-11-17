import Link from "next/link";

export function Header() {
  return (
    <header className="relative z-10 w-full border-b border-[#F5F3EE]/[0.06] bg-[#0B0B0C]/40 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="group flex items-baseline gap-2.5 transition-opacity hover:opacity-90"
        >
          <span className="font-serif text-2xl font-light tracking-[0.24em] text-[#F5F3EE] uppercase sm:text-[1.65rem]">
            Shahkaar
          </span>
          <span className="hidden text-[9px] uppercase tracking-[0.3em] text-[#C8A96A] sm:inline-block">
            / Masterpiece
          </span>
        </Link>

        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#C8A96A]/25 bg-[#141417]/80 px-3.5 py-1.5 text-xs text-[#F5F3EE]/90 shadow-[0_0_15px_-3px_rgba(200,169,106,0.12)] backdrop-blur-md transition-all hover:border-[#C8A96A]/40">
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C8A96A] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#C8A96A]" />
          </span>
          <span className="font-mono text-[11px] font-medium tracking-tight text-[#DFC285]">
            shahkaar.store
          </span>
          <span className="text-[#C8A96A]/40 text-[10px]">•</span>
          <span className="text-[11px] font-normal tracking-wide text-[#F5F3EE]/75">
            Launching Soon
          </span>
        </div>
      </div>
    </header>
  );
}
