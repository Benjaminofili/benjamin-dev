"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { TechIcon, type IconName } from "@/components/ui/tech-icons"

interface TechChipProps {
  label: string
  color: string
  iconSrc?: string
  iconKey?: string
  icon?: React.ComponentType<{ className?: string, style?: React.CSSProperties }>
  className?: string
  compact?: boolean // NEW: Add compact mode
}

export function TechChip({ 
  label, 
  color, 
  iconSrc, 
  iconKey,
  icon: Icon,
  className,
  compact = false // NEW: Default to false for backward compatibility
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

  // Glow filter for the icon container
  const iconFilter = isDark 
    ? `drop-shadow(0 0 8px ${hexToRgba(color, 0.6)})`
    : `drop-shadow(0 0 4px ${hexToRgba(color, 0.4)})`

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "flex items-center rounded-lg transition-all duration-300 cursor-pointer",
        // UPDATED: Responsive padding and gap
        compact 
          ? "gap-1.5 px-3 py-1.5" 
          : "gap-2 px-3 py-2 sm:gap-3 sm:px-5 sm:py-3",
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
        className={cn(
          "relative flex items-center justify-center shrink-0",
          // UPDATED: Responsive icon size
          compact ? "w-4 h-4" : "w-5 h-5 sm:w-6 sm:h-6"
        )}
        style={{ filter: iconFilter }}
      >
        {iconSrc ? (
          <Image 
            src={iconSrc} 
            alt={label} 
            fill 
            className="object-contain" 
            sizes="24px"
          />
        ) : iconKey ? (
          <TechIcon 
            name={iconKey as IconName} 
            className={compact ? "w-4 h-4" : "w-4 h-4 sm:w-5 sm:h-5"}
            style={{ color: color }} 
          />
        ) : Icon ? (
          <Icon 
            className={compact ? "w-4 h-4" : "w-4 h-4 sm:w-5 sm:h-5"}
            style={{ color: color }} 
          />
        ) : null}
      </div>

      {/* Label */}
      <span
        className={cn(
          "font-mono font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap",
          // UPDATED: Responsive text size
          compact ? "text-xs" : "text-xs sm:text-sm"
        )}
        style={{ color: textColor }}
      >
        {label}
      </span>
    </motion.div>
  )
}

// --- HELPERS ---
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