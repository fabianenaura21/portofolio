import { HARD_SKILLS, PMO_TOOLS, SOFT_SKILLS } from '../data/portfolioData';

export function BackgroundSection() {
  return (
    <section
      id="background"
      className="paper-grid-bg py-section px-gutter-md md:px-gutter-xl border-t-2 border-outline"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-gutter-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-md">
          <div>
            <span className="font-title text-title-md text-primary uppercase">01 // Background</span>
            <h2 className="font-display text-display-md-mobile md:text-display-md text-on-surface mt-1">
              Education, Experience &amp; Skills
            </h2>
          </div>
          <p className="font-body text-body-md text-ink-soft max-w-md text-pretty">
            First-year Information Systems student building foundations in web development, systems
            analysis, and data-driven problem solving.
          </p>
        </div>

        {/* Education & Experience 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg items-stretch">
          <article className="bg-surface text-on-surface border-2 border-outline rounded-sm p-gutter-lg ink-shadow-md flex flex-col gap-gutter-md h-full">
            <header className="flex items-center justify-between border-b-2 border-outline/15 pb-3">
              <h3 className="font-title text-title-lg text-on-surface">Education</h3>
              <span className="material-symbols-outlined text-primary text-2xl" aria-hidden="true">
                school
              </span>
            </header>
            <div className="flex flex-col gap-gutter-md">
              <div className="p-gutter-md bg-surface-cream border-2 border-outline rounded-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className="font-label text-label-lg text-on-surface-cream">
                    Institut Teknologi PLN, Jakarta
                  </span>
                  <span className="font-label text-label-sm px-2 py-0.5 bg-primary text-on-primary rounded-sm whitespace-nowrap tabular-nums">
                    2026 – Now
                  </span>
                </div>
                <p className="font-body text-body-md text-ink-soft">Bachelor of Information Systems</p>
              </div>

              <div className="p-gutter-md bg-surface border-2 border-outline rounded-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className="font-label text-label-lg text-on-surface">
                    SMAN 1 Sidoarjo, East Java
                  </span>
                  <span className="font-label text-label-sm px-2 py-0.5 bg-surface-cream text-on-surface-cream border border-outline rounded-sm whitespace-nowrap tabular-nums">
                    2023 – 2026
                  </span>
                </div>
                <p className="font-body text-body-md text-ink-soft">Science Major</p>
              </div>
            </div>
          </article>

          <article className="bg-surface text-on-surface border-2 border-outline rounded-sm p-gutter-lg ink-shadow-md flex flex-col gap-gutter-md h-full">
            <header className="flex items-center justify-between border-b-2 border-outline/15 pb-3">
              <h3 className="font-title text-title-lg text-on-surface">Experience</h3>
              <span className="material-symbols-outlined text-secondary text-2xl" aria-hidden="true">
                groups
              </span>
            </header>
            <ul className="flex flex-col gap-gutter-sm">
              <li className="p-3 bg-surface border-2 border-outline rounded-sm flex items-start justify-between gap-gutter-sm">
                <div>
                  <p className="font-label text-label-lg text-on-surface">S-Art · Arts Competition</p>
                  <p className="font-body text-body-md text-ink-soft">Committee member</p>
                </div>
                <span className="font-label text-label-sm text-ink-soft shrink-0 tabular-nums">
                  2023–2024
                </span>
              </li>

              <li className="p-3 bg-surface-cream border-2 border-outline rounded-sm flex items-start justify-between gap-gutter-sm">
                <div>
                  <p className="font-label text-label-lg text-on-surface-cream">
                    <a
                      href="https://kidilent.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-primary decoration-2 underline-offset-2 hover:text-primary"
                    >
                      Palang Merah · Inter-High School Competition
                    </a>
                  </p>
                  <p className="font-body text-body-md text-ink-soft">Committee member</p>
                </div>
                <span className="font-label text-label-sm text-ink-soft shrink-0 tabular-nums">
                  2024
                </span>
              </li>

              <li className="p-3 bg-surface border-2 border-outline rounded-sm flex items-start justify-between gap-gutter-sm">
                <div>
                  <p className="font-label text-label-lg text-on-surface">
                    Teater Ambigu · Theater Performance
                  </p>
                  <p className="font-body text-body-md text-ink-soft">Production Committee</p>
                </div>
                <span className="font-label text-label-sm text-ink-soft shrink-0 tabular-nums">
                  2024
                </span>
              </li>
            </ul>
          </article>
        </div>

        {/* Skills (Project Management Officer) */}
        <article className="bg-surface-cream border-2 border-outline rounded-sm p-gutter-lg md:p-gutter-xl ink-shadow-md flex flex-col gap-gutter-lg">
          <div className="flex flex-wrap items-center justify-between gap-gutter-sm border-b-2 border-outline/15 pb-3">
            <div>
              <h3 className="font-title text-title-lg text-on-surface-cream">
                Skills · Project Management Officer
              </h3>
              <p className="font-headline text-headline-md text-primary">
                tools, systems &amp; team delivery
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-gutter-sm">
              {PMO_TOOLS.map((tool) => (
                <span
                  key={tool.name}
                  className={`px-3 py-1.5 rounded-sm border-2 border-outline ink-shadow-sm font-label text-label-sm ${tool.tileClass}`}
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
            <div>
              <h4 className="font-label text-label-lg text-on-surface-cream uppercase tracking-wider mb-gutter-sm">
                Hard Skills
              </h4>
              <div className="flex flex-wrap gap-gutter-sm">
                {HARD_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-surface text-on-surface border-2 border-outline rounded-full font-label text-label-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-label text-label-lg text-on-surface-cream uppercase tracking-wider mb-gutter-sm">
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-gutter-sm">
                {SOFT_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-sticky-note text-on-sticky-note border-2 border-outline rounded-full font-label text-label-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
