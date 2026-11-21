export function ContactFooter() {
  return (
    <>
      <section
        id="contact"
        className="bg-primary text-on-primary py-section px-gutter-md md:px-gutter-xl border-t-2 border-outline"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-gutter-lg">
          <span className="inline-block px-3 py-1 bg-highlight-yellow text-ink border-2 border-outline rounded-sm font-title text-title-md uppercase">
            05 // Say Hello
          </span>
          <h2 className="font-display text-display-md-mobile md:text-display-md text-on-primary">
            Let’s Connect
          </h2>
          <p className="font-headline text-headline-lg-mobile md:text-headline-lg text-surface-cream max-w-xl">
            Open for frontend development, UI motion, PMO collaborations, and community tech
            initiatives.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-gutter-md pt-2">
            <a
              href="https://lynk.id/luthfieta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-gutter-sm px-gutter-lg py-3 bg-surface-cream text-on-surface-cream border-2 border-outline rounded-sm ink-shadow-sm hover:-translate-y-0.5 transition-transform duration-state-change font-label text-label-lg"
            >
              <span>◆ lynk.id/luthfieta</span>
            </a>

            <a
              href="https://www.linkedin.com/in/fabiane-naura-aftani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-gutter-sm px-gutter-lg py-3 bg-tertiary text-on-tertiary border-2 border-outline rounded-sm ink-shadow-sm hover:-translate-y-0.5 transition-transform duration-state-change font-label text-label-lg"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">
                open_in_new
              </span>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/fwbianne"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-gutter-sm px-gutter-lg py-3 bg-sticky-note text-on-sticky-note border-2 border-outline rounded-sm ink-shadow-sm hover:-translate-y-0.5 transition-transform duration-state-change font-label text-label-lg"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">
                photo_camera
              </span>
              <span>Instagram</span>
            </a>

            <a
              href="mailto:fabianenaura@gmail.com"
              className="inline-flex items-center gap-gutter-sm px-gutter-lg py-3 bg-surface text-on-surface border-2 border-outline rounded-sm ink-shadow-sm hover:-translate-y-0.5 transition-transform duration-state-change font-label text-label-lg"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">
                mail
              </span>
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-surface-dark text-on-surface-dark border-t-2 border-outline py-gutter-lg px-gutter-md">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-gutter-sm text-center sm:text-left">
          <p className="font-label text-label-sm text-on-surface-dark">
            © 2026 Fabiane Naura Aftani · Jakarta, Indonesia.
          </p>
          <p className="font-title text-title-md text-highlight-yellow">
            BUILT WITH PIXELS &amp; PAPER
          </p>
        </div>
      </footer>
    </>
  );
}
