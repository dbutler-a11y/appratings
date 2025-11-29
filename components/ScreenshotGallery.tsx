'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Screenshot } from '@/lib/types';

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
  appName: string;
}

export function ScreenshotGallery({ screenshots, appName }: ScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (screenshots.length === 0) {
    return null;
  }

  const activeScreenshot = screenshots[activeIndex];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Screenshots
      </h2>

      <div
        className="relative w-full bg-gray-100 rounded-xl overflow-hidden cursor-pointer group"
        style={{ aspectRatio: '16/10' }}
        onClick={() => setIsLightboxOpen(true)}
      >
        <Image
          src={activeScreenshot.src}
          alt={activeScreenshot.alt}
          fill
          className="object-contain"
          priority={activeIndex === 0}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>

        {activeScreenshot.platform && (
          <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full capitalize">
            {activeScreenshot.platform}
          </div>
        )}
      </div>

      {activeScreenshot.caption && (
        <p className="mt-2 text-sm text-gray-600 text-center">
          {activeScreenshot.caption}
        </p>
      )}

      {screenshots.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                index === activeIndex
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            onClick={() => setIsLightboxOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {screenshots.length > 1 && (
            <>
              <button
                className="absolute left-4 text-white/80 hover:text-white p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
                }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute right-4 text-white/80 hover:text-white p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
                }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeScreenshot.src}
              alt={activeScreenshot.alt}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {activeIndex + 1} / {screenshots.length}
          </div>
        </div>
      )}
    </section>
  );
}
