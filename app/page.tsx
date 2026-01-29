"use client";
import { useState } from "react";
import WaterLineBackground from "@/app/WaterLineBackground";
import LavaBackground from "@/app/LavaBackground";

function IconButton({
  children,
  onClick,
  label,
  isNight,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
  isNight: boolean;
}) {
  const glass = isNight
    ? "bg-white/20 hover:bg-white/30"
    : "bg-black/10 hover:bg-black/20";

  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`group relative rounded-full p-3 backdrop-blur transition ${glass}`}
    >
      {children}
    </button>
  );
}
function AboutIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* bubble */}
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      {/* i */}
      <line x1="12" y1="11" x2="12" y2="15" />
      <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinksIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0 0-7.07 5 5 0 0 0-7.07 0L10 6" />
      <path d="M14 11a5 5 0 0 0-7.07 0L5.52 12.41a5 5 0 0 0 0 7.07 5 5 0 0 0 7.07 0L14 18" />
    </svg>
  );
}

function ProjectsIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#facc15" // yellow-400
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" fill="#facc15" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9ca3af" // gray-400
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 0012 17a7 7 0 009-4.21z" />
    </svg>
  );
}

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [isNight, setIsNight] = useState(true);
  const [showLinks, setShowLinks] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // Close all popups
  const closeAllPopups = () => {
    setShowAbout(false);
    setShowLinks(false);
    setShowProjects(false);
    setShowContact(false);
  };

  // Handle clicking a popup button - close others first
  const handlePopupToggle = (
    popupSetter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    closeAllPopups();
    popupSetter((prev) => !prev);
  };

  return (
    <main
      onClick={closeAllPopups}
      className={`relative min-h-screen flex flex-col items-center justify-center px-4 gap-4 overflow-hidden transition-colors duration-600 ${
        isNight ? "text-white" : "text-slate-900"
      }`}
    >
      {isNight ? <LavaBackground /> : <WaterLineBackground />}
      <div className="pointer-events-none absolute inset-0 -z-10"></div>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold tracking-tight">
        Shawn Odom
      </h1>
      <p
        className={`transition-colors duration-600 text-base md:text-lg font-work-sans font-light tracking-wide opacity-90 text-center max-w-2xl ${
          isNight ? "text-white" : "text-slate-900"
        }`}
      >
        Computer Science Student @ Portland State University Graduating 2026
      </p>

      <button
        onClick={() => setIsNight(!isNight)}
        aria-label="Toggle day and night"
        className={`absolute left-4 top-4 z-20 rounded-full p-3 backdrop-blur transition ${
          isNight
            ? "bg-white/10 hover:bg-white/20"
            : "bg-black/10 hover:bg-black/20"
        }`}
      >
        {isNight ? <MoonIcon /> : <SunIcon />}
      </button>
      <div className="relative z-20 mt-6 flex items-end gap-8">
        <div className="flex flex-col items-center gap-2 relative">
          <div onClick={(e) => e.stopPropagation()}>
            <IconButton
              isNight={isNight}
              label="About"
              onClick={() => handlePopupToggle(setShowAbout)}
            >
              <AboutIcon />
            </IconButton>
          </div>

          {/* About popout */}
          {showAbout && (
            <div
              className={`absolute left-1/2 bottom-[4.75rem] -translate-x-1/2 z-30 transition-all duration-200 w-[calc(100vw-2rem)] max-w-[24rem] md:max-w-[28rem]`}
            >
              <div
                className={`pointer-events-auto rounded-2xl p-5 md:p-7 backdrop-blur-md shadow-2xl border ${
                  isNight
                    ? "bg-slate-900/90 text-white border-white/20"
                    : "bg-white/95 text-slate-900 border-black/10"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAbout(false);
                  }}
                  aria-label="Close about"
                  className={`absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full transition ${
                    isNight
                      ? "bg-white/20 hover:bg-white/30 text-white"
                      : "bg-black/10 hover:bg-black/20 text-slate-900"
                  }`}
                >
                  ✕
                </button>

                <h2 className="text-base md:text-lg font-semibold tracking-tight mb-3">
                  About
                </h2>

                <p className="text-xs md:text-base leading-relaxed mb-2 md:mb-3 opacity-95">
                  Hello my name is Shawn and I'm a Computer Science student
                  finishing up his degree at PSU. I am a graduated member of the
                  Computer Action Team, which is a volunteer IT organization on
                  campus. In my free time I love watching anime and reading
                  manga!
                </p>

                <p className="text-xs md:text-base leading-relaxed opacity-95">
                  Current Position: Workshop Intern @ Jaguar Land Rover.
                </p>
              </div>
            </div>
          )}

          <span className="text-sm font-work-sans tracking-wide opacity-80">
            about
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 relative">
          <div onClick={(e) => e.stopPropagation()}>
            <IconButton
              isNight={isNight}
              label="Links"
              onClick={() => handlePopupToggle(setShowLinks)}
            >
              <LinksIcon />
            </IconButton>
          </div>

          {/* Links popout */}
          {showLinks && (
            <div
              className={`absolute left-1/2 bottom-[4.75rem] -translate-x-1/2 z-30 transition-all duration-200 w-[calc(100vw-2rem)] max-w-[22rem] md:max-w-[26rem]`}
            >
              <div
                className={`pointer-events-auto rounded-2xl p-5 md:p-7 backdrop-blur-md shadow-2xl border ${
                  isNight
                    ? "bg-slate-900/90 text-white border-white/20"
                    : "bg-white/95 text-slate-900 border-black/10"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowLinks(false);
                  }}
                  aria-label="Close links"
                  className={`absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full transition ${
                    isNight
                      ? "bg-white/20 hover:bg-white/30 text-white"
                      : "bg-black/10 hover:bg-black/20 text-slate-900"
                  }`}
                >
                  ✕
                </button>

                <h2 className="text-base md:text-lg font-semibold tracking-tight mb-3 md:mb-4">
                  Links
                </h2>

                <div className="flex flex-col gap-2 md:gap-3">
                  <a
                    href="https://www.linkedin.com/in/shawn-odom-80a68a32b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-lg px-3 md:px-4 py-2 md:py-3 text-xs md:text-base transition ${
                      isNight
                        ? "bg-white/10 hover:bg-white/20"
                        : "bg-black/5 hover:bg-black/10"
                    }`}
                  >
                    🔗 LinkedIn
                  </a>

                  <a
                    href="https://github.com/shawn-odom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-lg px-3 md:px-4 py-2 md:py-3 text-xs md:text-base transition ${
                      isNight
                        ? "bg-white/10 hover:bg-white/20"
                        : "bg-black/5 hover:bg-black/10"
                    }`}
                  >
                    💻 GitHub
                  </a>
                </div>
              </div>
            </div>
          )}

          <span className="text-sm font-work-sans tracking-wide opacity-80">
            links
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 relative">
          <div onClick={(e) => e.stopPropagation()}>
            <IconButton
              isNight={isNight}
              label="Projects"
              onClick={() => handlePopupToggle(setShowProjects)}
            >
              <ProjectsIcon />
            </IconButton>
          </div>

          {/* Projects popout */}
          {showProjects && (
            <div
              className={`absolute left-1/2 bottom-[4.75rem] -translate-x-1/2 z-30 transition-all duration-200 w-[calc(100vw-2rem)] max-w-[24rem] md:max-w-[28rem]`}
            >
              <div
                className={`pointer-events-auto rounded-2xl p-5 md:p-7 backdrop-blur-md shadow-2xl border ${
                  isNight
                    ? "bg-slate-900/90 text-white border-white/20"
                    : "bg-white/95 text-slate-900 border-black/10"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowProjects(false);
                  }}
                  aria-label="Close projects"
                  className={`absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full transition ${
                    isNight
                      ? "bg-white/20 hover:bg-white/30 text-white"
                      : "bg-black/10 hover:bg-black/20 text-slate-900"
                  }`}
                >
                  ✕
                </button>

                <h2 className="text-base md:text-lg font-semibold tracking-tight mb-3 md:mb-4">
                  Projects
                </h2>

                <p className="text-xs md:text-base leading-relaxed opacity-75 italic">
                  Coming soon! Besides this portfolio page, I'm currently
                  working on some exciting projects to showcase here.
                </p>
              </div>
            </div>
          )}

          <span className="text-sm font-work-sans tracking-wide opacity-80">
            projects
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 relative">
          <div onClick={(e) => e.stopPropagation()}>
            <IconButton
              isNight={isNight}
              label="Contact"
              onClick={() => handlePopupToggle(setShowContact)}
            >
              <ContactIcon />
            </IconButton>
          </div>

          {/* Contact popout */}
          {showContact && (
            <div className="absolute left-1/2 bottom-[4.75rem] -translate-x-1/2 z-30 w-[calc(100vw-2rem)] max-w-[22rem] md:max-w-[26rem]">
              <div
                className={`pointer-events-auto rounded-2xl p-5 md:p-7 backdrop-blur-md shadow-2xl border ${
                  isNight
                    ? "bg-slate-900/90 text-white border-white/20"
                    : "bg-white/95 text-slate-900 border-black/10"
                }`}
              >
                <button
                  onClick={() => setShowContact(false)}
                  aria-label="Close contact"
                  className={`absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full transition ${
                    isNight
                      ? "bg-white/20 hover:bg-white/30 text-white"
                      : "bg-black/10 hover:bg-black/20 text-slate-900"
                  }`}
                >
                  ✕
                </button>

                <h2 className="text-base md:text-lg font-semibold tracking-tight mb-3 md:mb-4">
                  Contact
                </h2>

                <div className="flex flex-col gap-2 md:gap-3">
                  <a
                    href="mailto:shawnodom2004@gmail.com"
                    className={`rounded-lg px-3 md:px-4 py-2 md:py-3 text-xs md:text-base transition ${
                      isNight
                        ? "bg-white/10 hover:bg-white/20"
                        : "bg-black/5 hover:bg-black/10"
                    }`}
                  >
                    📧 shawnodom2004@gmail.com
                  </a>

                  <a
                    href="https://www.linkedin.com/in/shawn-odom-80a68a32b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-lg px-3 md:px-4 py-2 md:py-3 text-xs md:text-base transition ${
                      isNight
                        ? "bg-white/10 hover:bg-white/20"
                        : "bg-black/5 hover:bg-black/10"
                    }`}
                  >
                    🔗 LinkedIn
                  </a>
                </div>
              </div>
            </div>
          )}

          <span className="text-sm font-work-sans tracking-wide opacity-80">
            contact
          </span>
        </div>
      </div>
    </main>
  );
}
