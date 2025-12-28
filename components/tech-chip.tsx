"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface TechChipProps {
  label: string
  /**
   * Main brand color in Hex format (e.g. #00F0FF for Flutter)
   */
  color: string
  /**
   * Optional custom icon (SVG). If not provided, you can pass a Lucide icon component via the `icon` prop.
   */
  customIcon?: React.ReactNode
  /**
   * Fallback for standard Lucide icons
   */
  icon?: React.ComponentType<{ className?: string }>
  className?: string
}

export function TechChip({ 
  label, 
  color, 
  customIcon, 
  icon: Icon,
  className 
}: TechChipProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Default to dark styles if not yet mounted (prevents flicker)
  const isDark = mounted ? resolvedTheme === "dark" : true

  // --- STYLES BASED ON FIGMA CODE ---
  
  // Background
  const bgStyle = isDark ? '#1A1A1A' : '#F5F5F5'
  
  // Border
  // Dark: 20% opacity of brand color
  // Light: 15% opacity of brand color
  const borderStyle = `1px solid ${hexToRgba(color, isDark ? 0.2 : 0.15)}`
  
  // Box Shadow (Complex Glow)
  // Dark: Inset glow (10%) + Drop shadow (30% black)
  // Light: Inset glow (5%) + Drop shadow (8% black)
  const shadowStyle = isDark
    ? `inset 0 0 20px ${hexToRgba(color, 0.1)}, 0 4px 12px rgba(0, 0, 0, 0.3)`
    : `inset 0 0 20px ${hexToRgba(color, 0.05)}, 0 2px 8px rgba(0, 0, 0, 0.08)`

  // Text Color
  // Light mode uses a slightly darker version of the brand color for readability
  const textColor = isDark ? color : adjustColorBrightness(color, -20)

  // Icon Glow Filter
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
        className="flex items-center justify-center transition-all duration-300"
        style={{ filter: iconFilter }}
      >
        {customIcon ? (
          customIcon
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

// --- HELPER FUNCTIONS ---

/**
 * Helper to convert Hex to RGBA for opacity handling
 */
function hexToRgba(hex: string, alpha: number) {
  // Remove # if present
  const cleanHex = hex.replace('#', '');
  
  // Parse r, g, b
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Helper to darken/lighten a color (for Light Mode text readability)
 * percent: negative to darken, positive to lighten
 */
function adjustColorBrightness(hex: string, percent: number) {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const B = ((num >> 8) & 0x00ff) + amt;
    const G = (num & 0x0000ff) + amt;

    return (
        "#" +
        (
            0x1000000 +
            (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
            (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
            (G < 255 ? (G < 1 ? 0 : G) : 255)
        )
        .toString(16)
        .slice(1)
    );
}