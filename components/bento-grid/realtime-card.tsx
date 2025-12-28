"use client"

import { motion } from "framer-motion"

export function RealtimeCard() {
  return (
    <div className="relative h-full min-h-[320px] p-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Sine Wave Animation Container */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-60">
        <svg className="sine-wave w-[200%] h-24" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0,50 Q150,0 300,50 T600,50 T900,50 T1200,50"
            fill="none"
            stroke="url(#cyanGradient)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="currentColor" className="text-neon-cyan" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl lg:text-5xl font-bold text-neon-cyan glow-cyan-text mb-2"
        >
          &lt; 50ms
        </motion.p>
        <p className="text-lg text-foreground/80 mb-1">Latency</p>
        <p className="font-mono text-xs text-muted-foreground">WebSocket Stream</p>
      </div>
    </div>
  )
}