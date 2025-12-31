"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Journey", href: "#journey" },
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
]

export function DynamicIslandNavbar() {
  const { setTheme, resolvedTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("Work")
  // Simple mount check to avoid hydration mismatch
  const [mounted, setMounted] = useState(false)
  if (typeof window !== "undefined" && !mounted) setMounted(true)

  const isDark = mounted ? resolvedTheme === "dark" : true

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div className="glass rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center gap-4 md:gap-8 bg-background/60 backdrop-blur-md border border-border/40 shadow-lg">
          
          <span 
            className="text-lg md:text-xl font-bold text-foreground cursor-pointer tracking-tight"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            BO
          </span>

          {/* FIX APPLIED HERE:
             Changed from 'hidden md:flex' -> 'max-md:hidden flex'
             This means: "Always display flex, BUT hide if screen is smaller than md"
             This defaults to VISIBLE if something goes wrong.
          */}
          <div className="max-md:hidden flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveSection(link.name)
                  document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.name 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >                  
                {link.name}
                {activeSection === link.name && (
                   // Simple line, no complex motion layout for now to ensure stability
                   <span className="absolute -bottom-1 left-2 right-2 h-[2px] rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-accent/20 transition-colors"
            >
              {mounted ? (isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />) : <div className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              // Hide on Desktop (md:hidden), Show on Mobile (default)
              className="md:hidden p-2 rounded-full hover:bg-accent/20 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
        
        {/* DEBUGGER: This will show you exactly what Tailwind thinks your screen is */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground bg-black/10 px-2 rounded pointer-events-none whitespace-nowrap">
          Screen: <span className="md:hidden">Mobile (&lt;768px)</span><span className="hidden md:inline">Desktop (&ge;768px)</span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-[300px] md:hidden"
          >
            <div className="glass rounded-2xl p-4 flex flex-col gap-2 bg-background/95 border border-border shadow-2xl backdrop-blur-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.name)
                    setIsMobileMenuOpen(false)
                    document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`p-3 text-center rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.name ? "bg-accent/20 text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}