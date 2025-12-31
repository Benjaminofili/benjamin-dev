"use client"

import { useState, useEffect } from "react"
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
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // RESTORED: State for hover animations
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string>("Work")

  useEffect(() => {
    setMounted(true)
  }, [])

  // Keep scroll logic simple for now (manual click updates it), 
  // we will re-enable the auto-scroll spy in the next step.

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    // Update active state immediately for instant feedback
    const targetName = navLinks.find(link => link.href === href)?.name
    if (targetName) setActiveSection(targetName)

    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: "smooth" })
  }

  const isDark = mounted ? resolvedTheme === "dark" : true

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="glass rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center gap-4 md:gap-8 bg-background/60 backdrop-blur-md border border-border/40 shadow-lg">
          
          <motion.span
            className="text-lg md:text-xl font-bold text-foreground tracking-tight font-display cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            BO
          </motion.span>

          {/* Desktop Navigation */}
          {/* KEEPING THE FIX: max-md:hidden */}
          <div className="max-md:hidden flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollClick(e, link.href)}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >                  
                  {/* RESTORED: Hover Pill Background */}
                  {hoveredLink === link.name && !isActive && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 bg-accent/50 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {link.name}
                  
                  {/* RESTORED: Active Glowing Underline */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      // Using Tailwind Arbitrary values for the glow to ensure it works
                      className="absolute -bottom-1 left-0 right-0 mx-2 h-[1.5px] rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-accent/20 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted ? (
                isDark ? (
                  <Sun className="w-4 h-4 text-foreground/70" />
                ) : (
                  <Moon className="w-4 h-4 text-foreground/70" />
                )
              ) : (
                <div className="w-4 h-4" />
              )}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-accent/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 text-foreground" />
              ) : (
                <Menu className="w-4 h-4 text-foreground" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && mounted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-40 md:hidden w-[90%] max-w-[300px]"
          >
            <div className="glass rounded-2xl p-4 flex flex-col gap-2 bg-background/90 border border-border shadow-2xl backdrop-blur-xl">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.name
                
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      handleScrollClick(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`text-sm font-medium rounded-lg py-3 text-center transition-all relative ${
                      isActive 
                        ? 'text-foreground bg-accent/30' 
                        : 'text-foreground/80 hover:text-primary hover:bg-accent/50'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}