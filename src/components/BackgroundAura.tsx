export function BackgroundAura() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Central warm gold glow behind the emblem */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[520px] h-[360px] rounded-full bg-[#D4AF37]/12 blur-[120px]" />

      {/* Deep royal burgundy warmth */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[420px] h-[320px] rounded-full bg-[#681628]/18 blur-[100px]" />

      {/* Subtle deep sapphire accent in corners */}
      <div className="absolute -bottom-24 -left-20 w-[450px] h-[450px] rounded-full bg-[#183144]/15 blur-[140px]" />
      <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full bg-[#4A0D18]/15 blur-[130px]" />

      {/* Subtle vignette gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,6,8,0.7)_100%)]" />
    </div>
  );
}
