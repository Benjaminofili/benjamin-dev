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
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div className="glass rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center gap-4 md:gap-8 bg-background/60 backdrop-blur-md border border-border/40 shadow-lg">
          
          <span
            className="text-lg md:text-xl font-bold text-foreground tracking-tight font-display cursor-pointer"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            BO
          </span>

          {/* Desktop Navigation - STRIPPED DOWN */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollClick(e, link.href)}
                  // STRIPPED: No style prop, hardcoded safe colors
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive 
                      ? "text-black dark:text-white font-bold" 
                      : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
                  }`}
                >                  
                  {link.name}
                  {/* STRIPPED: Removed motion.span active indicator completely */}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
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
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-accent/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 text-foreground" />
              ) : (
                <Menu className="w-4 h-4 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Kept mostly same but simplified colors */}
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
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      handleScrollClick(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-sm font-medium rounded-lg py-3 text-center transition-all relative ${
                      isActive 
                        ? 'text-black dark:text-white bg-gray-100 dark:bg-gray-800' 
                        : 'text-gray-500'
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}