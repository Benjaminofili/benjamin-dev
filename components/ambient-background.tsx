"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import type { ReactNode } from "react"

interface AmbientBackgroundProps {
  children: ReactNode
}

export function AmbientBackground({ children }: AmbientBackgroundProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === "dark"

  return (
    <div className="relative min-h-screen bg-background overflow-hidden transition-colors duration-300">
      {/* Technical Grid Overlay */}
      <div className="fixed inset-0 z-0 tech-grid pointer-events-none" />

      {/* Light Mode - Subtle Ambient Orbs */}
      {!isDark && (
        <>
          {/* Top Right - Cyan Tint */}
          <div
            className="fixed top-[-15%] right-[-10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 217, 255, 0.08) 0%, rgba(0, 217, 255, 0.03) 40%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          {/* Bottom Left - Purple Tint */}
          <div
            className="fixed bottom-[-25%] left-[-15%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(112, 0, 255, 0.06) 0%, rgba(168, 85, 247, 0.03) 40%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />

          {/* Center Accent - Very Subtle */}
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 pointer-events-none opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 217, 255, 0.04) 0%, transparent 60%)",
              filter: "blur(120px)",
            }}
          />
        </>
      )}

      {/* Dark Mode - Intense Fresnel Orbs */}
      {isDark && (
        <>
          {/* Fresnel Lens Orb - Cyan (Top Right) */}
          <div
            className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(0, 240, 255, 0.05) 40%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Fresnel Lens Orb - Purple (Bottom Left) */}
          <div
            className="fixed bottom-[-30%] left-[-15%] w-[700px] h-[700px] md:w-[900px] md:h-[900px] z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(112, 0, 255, 0.2) 0%, rgba(112, 0, 255, 0.05) 40%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </>
      )}

      {/* Content Layer */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}