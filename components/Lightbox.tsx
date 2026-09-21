'use client'

import { useEffect } from 'react'
import Image from 'next/image'

interface LightboxProps {
  images: string[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <button
        onClick={e => { e.stopPropagation(); onPrev() }}
        aria-label="Anterior"
        style={{
          position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)',
          background: 'none', border: '1px solid rgba(245,240,234,0.2)', color: 'rgba(245,240,234,0.7)',
          width: 48, height: 48, cursor: 'pointer', fontSize: 20, borderRadius: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >&#8592;</button>

      <div
        style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh', width: '100%', height: '100%' }}
        onClick={e => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`Foto ${index + 1}`}
          fill
          style={{ objectFit: 'contain' }}
          sizes="90vw"
          priority
        />
      </div>

      <button
        onClick={e => { e.stopPropagation(); onNext() }}
        aria-label="Siguiente"
        style={{
          position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)',
          background: 'none', border: '1px solid rgba(245,240,234,0.2)', color: 'rgba(245,240,234,0.7)',
          width: 48, height: 48, cursor: 'pointer', fontSize: 20, borderRadius: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >&#8594;</button>

      <button
        onClick={onClose}
        aria-label="Cerrar"
        style={{
          position: 'absolute', top: 24, right: 24,
          background: 'none', border: '1px solid rgba(245,240,234,0.2)', color: 'rgba(245,240,234,0.7)',
          width: 44, height: 44, cursor: 'pointer', fontSize: 18, borderRadius: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >✕</button>

      <p style={{
        position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
        color: 'rgba(245,240,234,0.4)', fontSize: 11, letterSpacing: '0.2em',
        fontFamily: 'var(--sans)',
      }}>
        {index + 1} / {images.length}
      </p>
    </div>
  )
}
