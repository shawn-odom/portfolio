export default function LavaLineBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-slate-950" />
      {/* Lava glow */}
      <div className="absolute bottom-0 left-1/2 h-64 w-600 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

      {/* Lava line */}
      <svg
        className="absolute bottom-0 left-0 w-full h-90"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lavaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff9a3c" />
            <stop offset="100%" stopColor="#7c1200" />
          </linearGradient>
        </defs>

        {/* STATIC BASE: always fills to the bottom */}
        <path d="M0,90 L1200,90 L1200,200 L0,200 Z" fill="url(#lavaFill)" />

        {/* MOVING SURFACE ONLY */}
        <path
          d="
      M0,90
      C150,80 300,100 450,90
      C600,80 750,100 900,90
      C1050,80 1150,100 1200,90
      L1200,200 L0,200 Z
    "
          fill="url(#lavaFill)"
          className="lava-surface"
        />
      </svg>

      <style jsx>{`
        .lava-surface {
          animation: surface 6s ease-in-out infinite;
        }

        @keyframes surface {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
