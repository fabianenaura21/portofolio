export function RecognitionSection() {
  return (
    <section
      id="achievements"
      className="paper-grid-bg py-section px-gutter-md md:px-gutter-xl border-t-2 border-outline"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-start">
        {/* Left: Achievements + Collaborated With */}
        <div className="lg:col-span-7 flex flex-col gap-gutter-xl">
          <div className="flex flex-col gap-gutter-md">
            <span className="font-title text-title-md text-primary uppercase">03 // Recognition</span>
            <h2 className="font-display text-display-md-mobile md:text-display-md text-on-surface">
              Achievements
            </h2>

            <div className="flex flex-col gap-gutter-md">
              <article className="bg-surface border-2 border-outline rounded-sm p-gutter-md ink-shadow-sm flex items-start gap-gutter-md">
                <span
                  className="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  workspace_premium
                </span>
                <div>
                  <h3 className="font-label text-label-lg text-on-surface">
                    Developer Creator, Online Communities Summit in Singapore
                  </h3>
                  <p className="font-body text-body-md text-ink-soft">Issued by Google</p>
                </div>
              </article>

              <article className="bg-surface border-2 border-outline rounded-sm p-gutter-md ink-shadow-sm flex items-start gap-gutter-md">
                <span
                  className="material-symbols-outlined text-tertiary text-2xl shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  celebration
                </span>
                <div>
                  <h3 className="font-label text-label-lg text-on-surface">
                    Google I/O 2026 Watch Party in Singapore
                  </h3>
                  <p className="font-body text-body-md text-ink-soft">Issued by Google</p>
                </div>
              </article>
            </div>
          </div>

          <div id="partners" className="flex flex-col gap-gutter-md">
            <h3 className="font-title text-title-lg text-on-surface">Collaborated With</h3>
            <div className="flex flex-col gap-gutter-sm">
              <div className="flex flex-wrap gap-gutter-sm">
                <span className="px-4 py-2 bg-surface-cream text-on-surface-cream border-2 border-outline rounded-sm ink-shadow-sm font-display text-body-lg">
                  AWS
                </span>
                <span className="px-4 py-2 bg-surface-cream text-on-surface-cream border-2 border-outline rounded-sm ink-shadow-sm font-display text-body-lg">
                  Google Developer Groups
                </span>
              </div>
              <div className="flex flex-wrap gap-gutter-sm">
                <span className="px-4 py-2 bg-surface text-on-surface border-2 border-outline rounded-sm ink-shadow-sm font-display text-body-lg">
                  IDCloudHost
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Testimonial Sticky Note */}
        <div id="testimonial" className="lg:col-span-5 pt-4">
          <aside className="relative bg-sticky-note text-on-sticky-note border-2 border-outline rounded-none p-gutter-lg md:p-gutter-xl ink-shadow-lg -rotate-1 hover:rotate-0 transition-transform duration-state-change">
            <span
              className="tape-strip absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 rotate-1 pointer-events-none"
              aria-hidden="true"
            />
            <span className="font-headline text-headline-md text-primary block mb-gutter-sm">
              what they said
            </span>
            <blockquote className="font-headline text-headline-md text-on-sticky-note leading-snug mb-gutter-lg">
              “She is very disciplined, passionate, also always gets things done. She is always
              concerned about making the best product from the code side and design side.”
            </blockquote>
            <footer className="border-t-2 border-outline/15 pt-3">
              <p className="font-label text-label-lg text-on-sticky-note">Abi Farhan</p>
              <p className="font-body text-body-md text-ink-soft">
                Founder &amp; CEO Abi Coffee · studied together at Bangkit
              </p>
            </footer>
          </aside>
        </div>
      </div>
    </section>
  );
}
