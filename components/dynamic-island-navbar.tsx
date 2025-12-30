"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const navLinks = [
  { name: "Style Work", href: "#work" },
  { name: "Style Journey", href: "#journey" },
]

export function NavbarStyleTest() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string>("Style Work")

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50">
      <div className="glass rounded-full px-6 py-3 flex items-center gap-8 bg-white/10 backdrop-blur-md border border-white/20">
        
        <span style={{ fontWeight: 'bold', color: 'var(--foreground)' }}>
          STYLE TEST
        </span>

        <div className="flex items-center gap-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name
            
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); setActiveSection(link.name); }}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-4 py-2 text-sm font-medium transition-all duration-300"
                // TEST: Pure Inline Styles
                style={{
                  color: isActive 
                    ? 'var(--foreground)' // This relies on the global variable working
                    : '#888888',          // Hardcoded fallback for inactive
                  cursor: 'pointer'
                }}
              >                  
                {link.name}
                
                {isActive && (
                  <motion.span
                    layoutId="style-active"
                    className="absolute -bottom-1 left-0 right-0 mx-2 h-[2px] rounded-full"
                    // TEST: Pure Inline Style for glow
                    style={{
                      backgroundColor: '#00f0ff',
                      boxShadow: '0 0 10px #00f0ff' 
                    }}
                  />
                )}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}