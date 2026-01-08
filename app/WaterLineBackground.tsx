export default function WaterLineBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-slate-50" />

      {/* Soft cloud glow */}
      <div className="absolute top-24 left-1/3 h-48 w-96 -translate-x-1/2 rounded-full bg-sky-300/30 blur-3xl" />

      {/* Water line */}
      <svg
        className="absolute bottom-0 left-0 w-full h-90"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="waterFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>

        {/* STATIC BASE: stays attached to the bottom */}
        <path d="M0,90 L1200,90 L1200,200 L0,200 Z" fill="url(#waterFill)" />

        {/* MOVING SURFACE ONLY */}
        <path
          d="
      M0,90
      C150,80 300,100 450,90
      C600,80 750,100 900,90
      C1050,80 1150,100 1200,90
      L1200,200 L0,200 Z
    "
          fill="url(#waterFill)"
          className="water-surface"
        />
      </svg>

      <style jsx>{`
        .water-surface {
          animation: surface 5s ease-in-out infinite;
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
