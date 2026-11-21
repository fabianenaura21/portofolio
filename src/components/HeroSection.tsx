function PixelApple({ className = '' }: { className?: string }) {
  return (
    <svg className={`pixelated w-11 h-11 md:w-16 md:h-16 shrink-0 ${className}`} viewBox="0 0 16 16" aria-hidden="true">
      <rect x="7" y="1" width="2" height="3" fill="#5D3A1A" />
      <rect x="9" y="2" width="4" height="2" fill="#4C7A34" />
      <rect x="10" y="1" width="3" height="1" fill="#86B854" />
      <rect x="3" y="4" width="4" height="1" fill="#C6332A" />
      <rect x="9" y="4" width="4" height="1" fill="#C6332A" />
      <rect x="2" y="5" width="12" height="6" fill="#C6332A" />
      <rect x="3" y="11" width="10" height="2" fill="#C6332A" />
      <rect x="4" y="13" width="3" height="1" fill="#9E241C" />
      <rect x="9" y="13" width="3" height="1" fill="#9E241C" />
      <rect x="4" y="6" width="2" height="2" fill="#FFFFFF" />
      <rect x="4" y="8" width="1" height="2" fill="#FFDAD5" />
      <rect x="11" y="6" width="2" height="5" fill="#9E241C" />
      <rect x="6" y="11" width="4" height="1" fill="#E85A4F" />
    </svg>
  );
}

function PixelCat({ className = '' }: { className?: string }) {
  return (
    <svg className={`pixelated w-7 h-6 shrink-0 ${className}`} viewBox="0 0 14 12" fill="none" aria-hidden="true">
      <rect x="2" y="1" width="2" height="2" fill="#C6332A" />
      <rect x="10" y="1" width="2" height="2" fill="#C6332A" />
      <rect x="1" y="3" width="12" height="7" fill="#C6332A" />
      <rect x="3" y="4" width="8" height="5" fill="#F4ECD3" />
      <rect x="4" y="5" width="2" height="2" fill="#C6332A" />
      <rect x="8" y="5" width="2" height="2" fill="#C6332A" />
      <rect x="6" y="7" width="2" height="1" fill="#C6332A" />
      <rect x="2" y="10" width="10" height="1" fill="#C6332A" />
    </svg>
  );
}

function MarqueeChunk({ hidden = false }: { hidden?: boolean }) {
  const items = ['FABI', 'FABIANE', 'FABI', 'FABIANE'];
  return (
    <div
      className="flex items-center gap-gutter-lg shrink-0 pr-gutter-lg bg-surface-cream"
      aria-hidden={hidden || undefined}
    >
      {items.map((text, idx) => (
        <div key={`${text}-${idx}`} className="flex items-center gap-gutter-lg">
          <span className="font-title text-title-lg text-primary bg-surface-cream px-1 tracking-widest">
            {text}
          </span>
          <PixelCat />
        </div>
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <>
      <section aria-label="Portfolio Hero" className="bg-primary pt-gutter-lg pb-gutter-xl px-gutter-md md:px-gutter-xl">
        <div className="max-w-5xl mx-auto">
          <div className="bg-on-primary rounded-lg p-2 md:p-2.5 border-2 border-outline ink-shadow-lg">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between px-3 py-2 bg-on-primary rounded-t-md">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="w-3.5 h-3.5 rounded-full dot-gold border border-outline/40" />
                <span className="w-3.5 h-3.5 rounded-full dot-green border border-outline/40" />
                <span className="w-3.5 h-3.5 rounded-full dot-red border border-outline/40" />
              </div>
              <span className="font-title text-title-md text-ink-soft hidden sm:inline">
                FABIANE_NAURA_2026
              </span>
              <span className="font-label text-label-sm text-ink-soft">Jakarta, ID</span>
            </div>

            {/* Pixel Sky Backdrop */}
            <div className="relative overflow-hidden rounded-sm bg-gradient-to-b from-sky-top to-sky-bot py-14 md:py-20">
              {/* Top-right Pixel Clouds */}
              <svg
                className="pixelated absolute top-2 right-4 w-56 md:w-80 h-auto opacity-95 pointer-events-none"
                viewBox="0 0 120 36"
                fill="none"
                aria-hidden="true"
              >
                <rect x="32" y="4" width="20" height="6" fill="#FFFFFF" fillOpacity="0.85" />
                <rect x="20" y="10" width="44" height="6" fill="#FFFFFF" fillOpacity="0.9" />
                <rect x="12" y="16" width="60" height="6" fill="#FFFFFF" />
                <rect x="76" y="8" width="16" height="6" fill="#FFFFFF" fillOpacity="0.85" />
                <rect x="68" y="14" width="38" height="6" fill="#FFFFFF" fillOpacity="0.92" />
                <rect x="80" y="20" width="32" height="6" fill="#FFFFFF" fillOpacity="0.8" />
              </svg>

              {/* Bottom-left Pixel Clouds */}
              <svg
                className="pixelated absolute bottom-1 left-2 w-60 md:w-80 h-auto opacity-95 pointer-events-none"
                viewBox="0 0 120 32"
                fill="none"
                aria-hidden="true"
              >
                <rect x="8" y="10" width="28" height="6" fill="#FFFFFF" fillOpacity="0.9" />
                <rect x="4" y="16" width="52" height="6" fill="#FFFFFF" />
                <rect x="16" y="22" width="44" height="6" fill="#E6EEF6" />
                <rect x="64" y="18" width="36" height="6" fill="#FFFFFF" fillOpacity="0.85" />
                <rect x="74" y="24" width="24" height="6" fill="#FFFFFF" fillOpacity="0.75" />
              </svg>

              {/* Cream Apple Silhouette Behind Center Title */}
              <div className="relative z-10 flex flex-col items-center">
                <svg
                  className="w-40 md:w-52 h-auto -mb-14 md:-mb-20 pointer-events-none"
                  viewBox="0 0 160 110"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M80 42 C78 24, 86 10, 98 6 C100 10, 96 14, 90 16 C86 24, 85 33, 86 42 Z"
                    fill="#F4ECD3"
                  />
                  <path
                    d="M22 105 C18 68, 38 40, 62 40 C72 40, 77 45, 80 48 C83 45, 88 40, 98 40 C122 40, 142 68, 138 105 Z"
                    fill="#F4ECD3"
                  />
                </svg>

                {/* Full-Width Cream Banner Strip */}
                <div className="w-full bg-surface-cream border-y-4 border-surface-cream py-5 md:py-7 px-gutter-md relative">
                  <div className="hidden sm:block absolute top-2 left-0 w-1/3 h-1 bg-primary" aria-hidden="true" />
                  <div className="hidden sm:block absolute top-2 right-0 w-1/3 h-1 bg-primary" aria-hidden="true" />
                  <div className="hidden sm:block absolute bottom-2 left-0 w-1/3 h-1 bg-primary" aria-hidden="true" />
                  <div className="hidden sm:block absolute bottom-2 right-0 w-1/3 h-1 bg-primary" aria-hidden="true" />

                  <div className="max-w-4xl mx-auto flex items-center justify-between gap-gutter-sm md:gap-gutter-lg">
                    <div className="flex items-center gap-gutter-sm md:gap-gutter-lg">
                      <PixelApple />
                      <PixelApple className="hidden sm:block" />
                    </div>

                    <div className="text-center shrink-0 px-2">
                      <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary uppercase">
                        PORT
                        <br />
                        FOLIO
                      </h1>
                    </div>

                    <div className="flex items-center gap-gutter-sm md:gap-gutter-lg">
                      <PixelApple className="hidden sm:block" />
                      <PixelApple />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Pixel Name Marquee Strip */}
      <div
        className="relative z-10 bg-surface-cream border-y-2 border-outline py-3 overflow-hidden marquee-wrap"
        aria-label="Fabiane Naura Aftani name strip"
      >
        <div className="marquee-track bg-surface-cream items-center gap-gutter-lg">
          <MarqueeChunk />
          <MarqueeChunk hidden />
        </div>
      </div>
    </>
  );
}
