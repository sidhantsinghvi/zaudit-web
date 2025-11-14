import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

type LogoProps = {
  width?: number;
  height?: number;
  showTagline?: boolean;
  className?: string;
  src?: string;
};

export default function Logo({
  width = 220,
  height = 120,
  showTagline = false,
  className,
  src = '/logos/zaudit-logo.png',
}: LogoProps) {
  return (
    <div className={`inline-flex flex-col items-center ${className ?? ''}`}>
      <ImageWithFallback
        src={src}
        alt="Zaudit — End to End Accounting Automated"
        width={width}
        height={height}
        className="object-contain"
      />
      {showTagline && (
        <span className="mt-2 text-sm text-[#1a1a1a]">End to End Accounting Automated</span>
      )}
    </div>
  );
}



