'use client'

import { motion } from 'framer-motion'

interface VideoBackgroundProps {
  src: string
  children: React.ReactNode
  className?: string
}

const VideoBackground = ({ src, children, className = '' }: VideoBackgroundProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
        {/* Fallback gradient background */}
        <div className="absolute inset-0 gradient-bubblegum-subtle" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  )
}

export default VideoBackground
