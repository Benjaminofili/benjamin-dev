"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image" // Import Next.js Image
import { cn } from "@/lib/utils"

interface TechChipProps {
  label: string
  color: string
  /** * Path to your local icon in public folder (e.g. "/icons/flutter.svg") 
   * This takes priority over the `icon` prop.
   */
  iconSrc?: string
  /**
   * Fallback Lucide icon if you don't have a file for this tech
   */
  icon?: React.ComponentType<{ className?: string }>
  className?: string
}

export function TechChip({ 
  label, 
  color, 
  iconSrc, 
  icon: Icon,
  className 
}: TechChipProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === "dark" : true

  // --- STYLES ---
  const bgStyle = isDark ? '#1A1A1A' : '#F5F5F5'
  const borderStyle = `1px solid ${hexToRgba(color, isDark ? 0.2 : 0.15)}`
  
  const shadowStyle = isDark
    ? `inset 0 0 20px ${hexToRgba(color, 0.1)}, 0 4px 12px rgba(0, 0, 0, 0.3)`
    : `inset 0 0 20px ${hexToRgba(color, 0.05)}, 0 2px 8px rgba(0, 0, 0, 0.08)`

  const textColor = isDark ? color : adjustColorBrightness(color, -20)

  // Note: We can't use drop-shadow on <Image> as easily as SVG, 
  // so we use a subtle glow on the container instead for local files.
  const iconFilter = isDark 
    ? `drop-shadow(0 0 8px ${hexToRgba(color, 0.6)})`
    : `drop-shadow(0 0 4px ${hexToRgba(color, 0.4)})`

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "flex items-center gap-3 px-5 py-3 rounded-lg transition-all duration-300 cursor-pointer",
        className
      )}
      style={{
        background: bgStyle,
        border: borderStyle,
        boxShadow: shadowStyle,
      }}
    >
      {/* Icon Container */}
      <div 
        className="relative flex items-center justify-center w-6 h-6"
        // Apply glow filter only if it's a Component, or use CSS class for Image if needed
        style={Icon ? { filter: iconFilter } : {}}
      >
        {iconSrc ? (
          <Image 
            src={iconSrc} 
            alt={label} 
            fill 
            className="object-contain" 
            sizes="24px"
          />
        ) : Icon ? (
          <Icon className="w-5 h-5" style={{ color: color }} />
        ) : null}
      </div>

      {/* Label */}
      <span
        className="font-mono text-sm font-semibold tracking-wide transition-colors duration-300"
        style={{ color: textColor }}
      >
        {label}
      </span>
    </motion.div>
  )
}

// --- HELPERS (Keep these at the bottom) ---
function hexToRgba(hex: string, alpha: number) {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function adjustColorBrightness(hex: string, percent: number) {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const B = ((num >> 8) & 0x00ff) + amt;
    const G = (num & 0x0000ff) + amt;
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
}