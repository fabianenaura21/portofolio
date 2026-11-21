import { IMAGES } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-surface-cream py-section px-gutter-md md:px-gutter-xl border-t-2 border-outline"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-gutter-xl">
        <div>
          <span className="font-title text-title-md text-primary uppercase">02 // Featured Work</span>
          <h2 className="font-display text-display-md-mobile md:text-display-md text-on-surface-cream mt-1">
            Projects &amp; Digital Products
          </h2>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-xl items-stretch">
          {/* Project 1: Kidilent */}
          <article className="relative bg-tertiary text-on-tertiary border-2 border-outline rounded-md p-gutter-lg ink-shadow-lg md:rotate-1 hover:rotate-0 transition-transform duration-state-change ease-state-change flex flex-col justify-between gap-gutter-md h-full">
            <span
              className="tape-strip absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 -rotate-2 pointer-events-none"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-gutter-md">
              <header className="flex flex-col items-start gap-2 pt-2">
                <span className="inline-block px-2.5 py-0.5 bg-highlight-yellow text-ink border border-outline rounded-sm font-label text-label-sm uppercase tracking-wider">
                  2021 – Now · Founder · Edu startup
                </span>
                <h3 className="font-display text-display-md-mobile text-on-tertiary">Kidilent</h3>
                <p className="font-body text-body-md text-on-tertiary/95 text-pretty">
                  Online tech school for kids aged 5–15 turning curiosity into real projects with
                  industry mentors.
                </p>
              </header>

              <div className="aspect-video overflow-hidden rounded-sm border-2 border-outline bg-surface">
                <ResilientImage
                  src={IMAGES.kidilent}
                  alt="Cendekia teaching a Kidilent coding class at SLB River Kids Malang"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '40% 50%' }}
                  fallbackLabel="Kidilent Coding Class"
                />
              </div>

              <ul className="flex flex-col gap-2 font-body text-body-md text-on-tertiary/95 list-disc pl-5">
                <li>
                  3 programs: Creative Coding &amp; Game Dev (Scratch), 3D Design &amp; Creative
                  Engineering (Tinkercad), Junior Web Development.
                </li>
                <li>
                  Pameran Coding 2026: a showcase where students present the games and projects they
                  built.
                </li>
                <li>
                  Komunitas Kelas Koding with PLN Icon Plus, bringing coding classes to children
                  with special needs at SLB River Kids Malang (2026).
                </li>
              </ul>
            </div>

            <footer className="pt-2">
              <a
                href="https://kidilent.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-gutter-sm px-gutter-lg py-2.5 bg-highlight-yellow text-ink border-2 border-outline rounded-sm ink-shadow-sm hover:-translate-y-0.5 transition-transform duration-state-change font-label text-label-lg"
              >
                <span>View project</span>
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  arrow_outward
                </span>
              </a>
            </footer>
          </article>

          {/* Project 2: UCEABLE */}
          <article className="relative bg-surface-dark text-on-surface-dark border-2 border-outline rounded-md p-gutter-lg ink-shadow-lg md:-rotate-1 hover:rotate-0 transition-transform duration-state-change ease-state-change flex flex-col justify-between gap-gutter-md h-full">
            <span
              className="tape-strip absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 rotate-2 pointer-events-none"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-gutter-md">
              <header className="flex flex-col items-start gap-2 pt-2">
                <span className="inline-block px-2.5 py-0.5 bg-highlight-mint text-ink border border-outline rounded-sm font-label text-label-sm uppercase tracking-wider">
                  Now · Co-Founder · Software studio
                </span>
                <h3 className="font-display text-display-md-mobile text-on-surface-dark">UCEABLE</h3>
                <p className="font-body text-body-md text-on-surface-dark/90 text-pretty">
                  CV UCE Absolute Technology builds websites, mobile apps, UI/UX and chatbots for
                  businesses across industries.
                </p>
              </header>

              <div className="aspect-video overflow-hidden rounded-sm border-2 border-outline bg-surface">
                <ResilientImage
                  src={IMAGES.uceable}
                  alt="Websites built by UCEABLE: BYD, Komitras, AKSARA, Active Mandarin and Learntera"
                  className="w-full h-full object-cover"
                  fallbackLabel="UCEABLE Software Studio"
                />
              </div>

              <ul className="flex flex-col gap-2 font-body text-body-md text-on-surface-dark/95 list-disc pl-5">
                <li>
                  Learntera: a digital education platform for UTBK preparation and school management.
                </li>
                <li>Active Mandarin: a company profile website.</li>
                <li>
                  Transprima Bangka: a car rental and open trip website (plus BYD, Komitras, AKSARA).
                </li>
              </ul>
            </div>

            <footer className="pt-2">
              <a
                href="https://uceable.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-gutter-sm px-gutter-lg py-2.5 bg-highlight-mint text-ink border-2 border-outline rounded-sm ink-shadow-sm hover:-translate-y-0.5 transition-transform duration-state-change font-label text-label-lg"
              >
                <span>View project</span>
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  arrow_outward
                </span>
              </a>
            </footer>
          </article>
        </div>

        {/* Digital Products */}
        <div className="flex flex-col gap-gutter-md pt-gutter-md">
          <h3 className="font-title text-title-lg text-on-surface-cream">Digital Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg items-stretch">
            <a
              href="https://lynk.id/luthfieta/50k5m1gymy89"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface text-on-surface border-2 border-outline rounded-sm p-gutter-lg shadow-ticket-green hover:-translate-y-1 transition-transform duration-state-change ease-state-change flex flex-col justify-between gap-gutter-sm h-full"
            >
              <div className="flex items-center justify-between gap-gutter-sm">
                <span className="px-2.5 py-0.5 bg-secondary text-on-secondary rounded-sm font-title text-title-md">
                  THESIS
                </span>
                <span className="font-label text-label-lg text-on-surface px-2.5 py-1 bg-surface-cream border border-outline rounded-sm tabular-nums">
                  IDR 80K
                </span>
              </div>
              <p className="font-body text-body-lg text-on-surface">
                Skripsi: Deteksi Hama dengan CNN
              </p>
            </a>

            <a
              href="https://lynk.id/luthfieta/v5xm7685gr61"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface text-on-surface border-2 border-outline rounded-sm p-gutter-lg shadow-ticket-blue hover:-translate-y-1 transition-transform duration-state-change ease-state-change flex flex-col justify-between gap-gutter-sm h-full"
            >
              <div className="flex items-center justify-between gap-gutter-sm">
                <span className="px-2.5 py-0.5 bg-tertiary text-on-tertiary rounded-sm font-title text-title-md">
                  CODE + DATASET
                </span>
                <span className="font-label text-label-lg text-on-surface px-2.5 py-1 bg-surface-cream border border-outline rounded-sm tabular-nums">
                  IDR 150K
                </span>
              </div>
              <p className="font-body text-body-lg text-on-surface">CNN Pest Detection</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
