"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const navLinks = [
  { name: "Tailwind Work", href: "#work" },
  { name: "Tailwind Journey", href: "#journey" },
]

export function NavbarTailwindTest() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string>("Tailwind Work")

  return (
    <div className="fixed top-40 left-1/2 -translate-x-1/2 z-50">
      <div className="glass rounded-full px-6 py-3 flex items-center gap-8 bg-background/60 backdrop-blur-md border border-border/40">
        
        <span className="font-bold text-foreground">
          TW TEST
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
                // TEST: Pure Tailwind Classes
                // using text-foreground for active, and explicit text-zinc-500 for inactive
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-foreground" : "text-zinc-500"
                }`}
              >                  
                {link.name}
                
                {isActive && (
                  <motion.span
                    layoutId="tw-active"
                    // TEST: Pure Tailwind Arbitrary Values for glow
                    className="absolute -bottom-1 left-0 right-0 mx-2 h-[2px] rounded-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]"
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