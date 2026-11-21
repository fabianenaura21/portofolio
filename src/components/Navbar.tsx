import { useState } from 'react';
import { NAV_LINKS } from '../data/portfolioData';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-primary border-b-2 border-outline">
      <div className="max-w-6xl mx-auto px-gutter-md md:px-gutter-lg py-3 flex items-center justify-between gap-8">
        <a
          href="#top"
          className="inline-flex items-center text-on-primary whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-cream"
        >
          <span className="font-title text-title-md tracking-wider">FABI.DEV</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-gutter-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label text-label-lg text-on-primary hover:text-highlight-yellow transition-colors duration-state-change whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-gutter-md py-1.5 bg-surface-cream text-on-surface-cream border-2 border-outline rounded-sm ink-shadow-sm font-label text-label-lg hover:-translate-y-0.5 transition-transform duration-state-change whitespace-nowrap shrink-0"
          >
            Connect
          </a>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 bg-surface-cream text-on-surface-cream border-2 border-outline rounded-sm ink-shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="md:hidden bg-surface-cream border-t-2 border-outline px-gutter-md py-gutter-md"
        >
          <div className="flex flex-col gap-gutter-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-label text-label-lg text-on-surface-cream py-2 border-b border-outline/20"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="font-label text-label-lg text-primary py-2"
            >
              Connect
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
