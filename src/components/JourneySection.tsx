import { JOURNEY_BOOKS, type JourneyBook } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface JourneySectionProps {
  onSelectBook: (book: JourneyBook) => void;
}

export function JourneySection({ onSelectBook }: JourneySectionProps) {
  return (
    <section
      id="journey"
      className="bg-surface-cream py-section px-gutter-md md:px-gutter-xl border-t-2 border-outline"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-gutter-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-md">
          <div>
            <span className="font-title text-title-md text-primary uppercase">
              04 // Scrapbook Shelf
            </span>
            <h2 className="font-display text-display-md-mobile md:text-display-md text-on-surface-cream mt-1">
              The Journey
            </h2>
          </div>
          <p className="font-headline text-headline-md text-ink-soft">
            click a year book to open its scrapbook spread
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-xl">
          {JOURNEY_BOOKS.map((book) => (
            <button
              key={book.year}
              type="button"
              onClick={() => onSelectBook(book)}
              className={`text-left ${book.variantClass} border-2 border-outline rounded-sm p-gutter-lg ink-shadow-lg hover:-translate-y-1 transition-transform duration-state-change flex flex-col gap-gutter-md cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-selection-blue`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-title text-title-lg ${book.yearTextClass}`}>{book.year}</span>
                <span className="font-label text-label-sm px-2.5 py-1 bg-surface-cream text-on-surface-cream border border-outline rounded-sm">
                  {book.photoCountLabel}
                </span>
              </div>
              <div className="aspect-[4/3] overflow-hidden border-2 border-outline rounded-sm bg-surface">
                <ResilientImage
                  src={book.coverSrc}
                  alt={book.coverAlt}
                  className="w-full h-full object-cover"
                  fallbackLabel={book.subtitle}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="font-headline text-headline-md text-surface-cream">
                  {book.subtitle}
                </span>
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  menu_book
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
