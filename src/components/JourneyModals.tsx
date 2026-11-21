import { useEffect } from 'react';
import type { JourneyBook, JourneyPhoto } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface JourneyModalsProps {
  activeBook: JourneyBook | null;
  activePhoto: JourneyPhoto | null;
  onCloseBook: () => void;
  onSelectPhoto: (photo: JourneyPhoto) => void;
  onClosePhoto: () => void;
}

export function JourneyModals({
  activeBook,
  activePhoto,
  onCloseBook,
  onSelectPhoto,
  onClosePhoto,
}: JourneyModalsProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (activePhoto) {
          onClosePhoto();
        } else if (activeBook) {
          onCloseBook();
        }
      }
    };

    if (activeBook || activePhoto) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [activeBook, activePhoto, onCloseBook, onClosePhoto]);

  return (
    <>
      {activeBook && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="journey-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget || e.target === e.currentTarget.firstElementChild) {
              onCloseBook();
            }
          }}
          className="fixed inset-0 z-50 bg-ink/80 p-gutter-md md:p-gutter-xl overflow-y-auto"
        >
          <div className="min-h-full flex items-center justify-center">
            <div className="bg-surface-cream border-2 border-outline rounded-md max-w-3xl w-full p-gutter-lg md:p-gutter-xl ink-shadow-lg relative">
              <div className="flex items-center justify-between gap-gutter-md border-b-2 border-outline/20 pb-3 mb-gutter-lg">
                <div>
                  <span className="font-title text-title-md text-primary">{activeBook.year}</span>
                  <h3
                    id="journey-modal-title"
                    className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface-cream"
                  >
                    {activeBook.title}
                  </h3>
                </div>
                <button
                  type="button"
                  aria-label="Close scrapbook modal"
                  onClick={onCloseBook}
                  className="inline-flex items-center justify-center w-10 h-10 bg-surface text-on-surface border-2 border-outline rounded-sm ink-shadow-sm hover:-translate-y-0.5 transition-transform duration-state-change cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl" aria-hidden="true">
                    close
                  </span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
                {activeBook.photos.map((photo) => (
                  <button
                    key={photo.caption}
                    type="button"
                    onClick={() => onSelectPhoto(photo)}
                    className={`${
                      photo.fullWidth ? 'md:col-span-2' : ''
                    } text-left bg-surface border-2 border-outline p-3 pb-4 ink-shadow-sm hover:-translate-y-0.5 transition-transform cursor-zoom-in`}
                  >
                    <div className="aspect-video overflow-hidden border border-outline/30 mb-2 bg-surface-cream">
                      <ResilientImage
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-full object-cover"
                        fallbackLabel={photo.caption}
                      />
                    </div>
                    <p className="font-headline text-headline-md text-on-surface text-center">
                      {photo.caption}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo zoom view"
          onClick={(e) => {
            if (e.target === e.currentTarget || e.target === e.currentTarget.firstElementChild) {
              onClosePhoto();
            }
          }}
          className="fixed inset-0 z-50 bg-ink/90 p-gutter-md md:p-gutter-xl"
        >
          <div className="min-h-full flex flex-col items-center justify-center gap-gutter-md">
            <div className="max-w-3xl w-full flex justify-end">
              <button
                type="button"
                aria-label="Close photo zoom"
                onClick={onClosePhoto}
                className="inline-flex items-center justify-center w-10 h-10 bg-surface text-on-surface border-2 border-outline rounded-sm ink-shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  close
                </span>
              </button>
            </div>
            <figure className="bg-surface-cream border-2 border-outline p-3 pb-5 ink-shadow-lg max-w-3xl w-full">
              <ResilientImage
                src={activePhoto.src}
                alt={activePhoto.caption}
                className="w-full max-h-[70vh] object-contain bg-surface"
                fallbackLabel={activePhoto.caption}
              />
              <figcaption className="pt-3 text-center font-headline text-headline-md text-on-surface-cream">
                {activePhoto.caption}
              </figcaption>
            </figure>
          </div>
        </div>
      )}
    </>
  );
}
