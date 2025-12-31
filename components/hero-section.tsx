"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Cloud, Atom, Code } from "lucide-react" // Added icons
import { useTheme } from "next-themes"
import { TechChip } from "./tech-chip"
import { GlowingSphere } from "./glowing-sphere"
import { TECH_COLORS } from "@/lib/constants" 
import { TechIcon, type IconName } from "@/components/ui/tech-icons"

// Map your icons to the centralized colors
const techStack = [
  { 
    icon: Cloud, 
    label: "Flutter", 
    iconKey: "flutter",
    color: TECH_COLORS.Flutter 
  },
  { 
    icon: Atom, 
    label: "React",
    iconKey: "react", 
    color: TECH_COLORS.React 
  },
  { 
    icon: Code, 
    label: "Python", 
    iconKey: "python",
    color: TECH_COLORS.Python 
  }
]

export function HeroSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === "dark" : true

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight"
                style={{ fontFamily: "var(--font-clash), sans-serif" }}
              >
                Architecting
                <br />
                <span className="text-balance">Scalable Systems</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium gradient-text leading-tight"
                style={{ fontFamily: "var(--font-clash), sans-serif" }}
              >
                with Pixel-Perfect UI
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
            >
              Full-stack engineer crafting high-performance applications with modern technologies and meticulous
              attention to detail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-4"
            >
              {/* Floating Dock */}
              <div 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 flex-wrap"
                style={{
                  background: isDark 
                    ? 'rgba(0, 0, 0, 0.6)' 
                    : 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  border: `1px solid ${isDark 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'rgba(0, 0, 0, 0.08)'}`,
                  boxShadow: isDark
                    ? 'inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 8px 32px rgba(0, 0, 0, 0.4)'
                    : '0 4px 24px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.5)'
                }}
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  >
                    <TechChip {...tech} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Sphere/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            <GlowingSphere />
          </motion.div>
        </div>
      </div>
    </section>
  )
}