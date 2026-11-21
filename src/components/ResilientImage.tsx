import { useState, type CSSProperties } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  fallbackLabel?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  style,
  fallbackLabel,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-surface-cream text-on-surface-cream p-4 text-center ${className}`}
        style={style}
      >
        <span className="material-symbols-outlined text-3xl text-primary mb-2" aria-hidden="true">
          image
        </span>
        <span className="font-headline text-headline-md text-on-surface-cream leading-tight">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      style={style}
    />
  );
}
