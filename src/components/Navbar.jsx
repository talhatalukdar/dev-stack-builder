import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.toLowerCase());

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:px-6 lg:px-8">
        
        {/* Left: Mobile Menu / Desktop Logo */}
        <div className="flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <a href="#home" className="hidden md:block">
            <Logo />
          </a>
        </div>

        {/* Center: Logo on Mobile / Navigation on Desktop */}
        <div className="flex items-center justify-center">
          <a href="#home" className="md:hidden">
            <Logo />
          </a>

          <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
            {NAV_LINKS.map((link) => {
              const id = link.toLowerCase();
              const isActive = activeSection === id;

              return (
                <li key={link}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "page" : undefined}
                    className={
                      isActive
                        ? "text-gradient-brand font-semibold transition-colors"
                        : "text-slate-600 transition-colors hover:text-slate-900"
                    }
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: Sign In / Sign Up */}
        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <a
            href="#signin"
            className="text-xs font-medium text-slate-700 hover:text-slate-900 sm:text-sm"
          >
            Sign In
          </a>

          <a
            href="#signup"
            className="bg-gradient-brand rounded-full px-3 py-2 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] sm:px-5 sm:text-sm"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-1 border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => {
            const id = link.toLowerCase();
            const isActive = activeSection === id;

            return (
              <li key={link}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "text-gradient-brand block rounded-lg px-3 py-2 text-sm font-semibold"
                      : "block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}