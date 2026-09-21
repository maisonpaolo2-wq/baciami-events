'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'

interface GalleryProps {
  images: string[]
  alts?: string[]
  aspectRatio?: string
}

export default function Gallery({ images, alts, aspectRatio = '3/4' }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const prev = () => setLightboxIndex(i => (i === null ? 0 : (i - 1 + images.length) % images.length))
  const next = () => setLightboxIndex(i => (i === null ? 0 : (i + 1) % images.length))

  return (
    <>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div
            key={src}
            className="gallery-item"
            style={{ aspectRatio }}
            onClick={() => setLightboxIndex(i)}
          >
            <Image
              src={src}
              alt={alts?.[i] ?? `Foto ${i + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="gallery-item-overlay">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(245,240,234,0.8)" strokeWidth="1.5">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}
