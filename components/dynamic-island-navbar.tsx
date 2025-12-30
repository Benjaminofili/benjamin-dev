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
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string>("Work")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      const sections = navLinks.map(link => ({
        name: link.name,
        element: document.getElementById(link.href.replace("#", ""))
      }))

      const scrollPosition = window.scrollY + window.innerHeight / 3
      let currentSection = "Work"
      
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          const sectionTop = window.scrollY + rect.top
          const sectionBottom = sectionTop + rect.height
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.name
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted])

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
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
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

          {/* Desktop Navigation - Show on md and up */}
          <div className="hidden md:flex items-center gap-2">
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
                    isActive ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >                  
                  {link.name}
                  
                  {isActive && mounted && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      // CHANGED: Added 'mx-1' to shorten width, custom h-[1.5px] to thin it
                      className="absolute -bottom-1 left-0 right-0 mx-4 h-[1.5px] rounded-full"
                      style={{
                        backgroundColor: '#00f0ff',
                        boxShadow: '0 0 8px #00f0ff' 
                      }}
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
              suppressHydrationWarning
            >
              {mounted ? (
                isDark ? (
                  <Sun className="w-4 h-4 text-foreground/70 transition-colors" />
                ) : (
                  <Moon className="w-4 h-4 text-foreground/70 transition-colors" />
                )
              ) : (
                <div className="w-4 h-4" />
              )}
            </motion.button>

            {/* Mobile menu button - Show below md */}
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
                    {isActive && (
                      <motion.span
                        layoutId="mobile-active-indicator"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full"
                        style={{
                          background: isDark 
                            ? 'linear-gradient(90deg, #00f0ff 0%, #7000ff 50%, #00f0ff 100%)'
                            : 'linear-gradient(90deg, #0d9488 0%, #6366f1 50%, #0d9488 100%)'
                        }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
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