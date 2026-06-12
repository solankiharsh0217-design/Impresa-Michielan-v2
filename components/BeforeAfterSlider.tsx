'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  title: string
}

export default function BeforeAfterSlider({ beforeImage, afterImage, title }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = (x / rect.width) * 100
    setSliderPosition(percent)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    const handleUp = () => setIsDragging(false)
    window.addEventListener('mouseup', handleUp)
    window.addEventListener('touchend', handleUp)
    return () => {
      window.removeEventListener('mouseup', handleUp)
      window.removeEventListener('touchend', handleUp)
    }
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <div 
        ref={containerRef}
        className="relative h-[400px] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={`${title} - Dopo`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-primary/80 text-white px-4 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
            DOPO
          </div>
        </div>

        {/* Before Image (Overlay with Clip) */}
        <div 
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={`${title} - Prima`}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-cta/80 text-white px-4 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
            PRIMA
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute inset-y-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-primary" />
              <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-primary" />
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold text-primary text-center">{title}</h3>
    </div>
  )
}
