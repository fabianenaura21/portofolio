import { ABOUT_TAGS, IMAGES } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-secondary py-14 md:py-20 px-gutter-md md:px-gutter-xl overflow-hidden"
    >
      <ResilientImage
        src={IMAGES.meadow}
        alt="Sunlit rolling green grassy hillside meadow"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="relative border-2 border-dashed border-selection-blue p-gutter-md sm:p-gutter-lg md:p-gutter-xl bg-secondary/20">
          <span className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 bg-selection-blue" aria-hidden="true" />
          <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-selection-blue" aria-hidden="true" />
          <span className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 bg-selection-blue" aria-hidden="true" />
          <span className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 bg-selection-blue" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
            <article className="lg:col-span-7 crumpled-paper border-2 border-outline rounded-none p-gutter-lg md:p-gutter-xl ink-shadow-lg -rotate-1 md:-rotate-2 hover:rotate-0 transition-transform duration-state-change ease-state-change">
              <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-primary mb-gutter-md">
                About me
              </h2>
              <div className="flex flex-col gap-gutter-md">
                <p className="font-headline text-headline-md text-on-surface leading-snug text-pretty">
                  Hello everyone, I&apos;m Fabiane Naura Aftani. I&apos;m into coding that focuses on data
                  visualization, workflow automation, and building clean interfaces or tools that make
                  complex things easy to grasp.
                </p>
                <p className="font-headline text-headline-md text-on-surface leading-snug text-pretty">
                  My coding interests center on interactive web development, data visualization, and
                  workflow automation-approaching technical logic and system metrics in a clear,
                  structured way that feels accessible beyond technical audiences.
                </p>
              </div>
            </article>

            <div className="lg:col-span-5 flex justify-center">
              <figure className="bg-surface-cream border-2 border-outline p-3 pb-5 ink-shadow-lg rotate-1 md:rotate-3 hover:rotate-0 transition-transform duration-state-change ease-state-change max-w-xs w-full">
                <div className="aspect-[3/4] overflow-hidden border border-outline/40 bg-sky-bot">
                  <ResilientImage
                    src={IMAGES.portrait}
                    alt="Portrait of Fabiane Naura Aftani sitting by a sunlit window"
                    className="w-full h-full object-cover"
                    fallbackLabel="Fabi · Information Systems"
                  />
                </div>
                <figcaption className="pt-3 text-center font-headline text-headline-md text-on-surface-cream">
                  Fabi · Information Systems
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="mt-gutter-xl flex flex-wrap items-center gap-gutter-sm">
            <span className="inline-flex items-center gap-gutter-xs px-3 py-1.5 bg-sticky-note text-on-sticky-note border-2 border-outline rounded-sm ink-shadow-sm">
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                location_on
              </span>
              <span className="font-label text-label-sm">Jakarta, Indonesia</span>
            </span>

            <span className="inline-flex items-center px-3 py-1.5 bg-surface text-on-surface border-2 border-outline rounded-full ink-shadow-sm">
              <span className="font-label text-label-sm">
                Information Systems Freshman · Tech &amp; Systems @ Institut Teknologi PLN (2026 - Now)
              </span>
            </span>

            {ABOUT_TAGS.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1.5 bg-surface-cream text-on-surface-cream border-2 border-outline rounded-full ink-shadow-sm"
              >
                <span className="font-label text-label-sm">{tag}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
