"use client"

import { useState } from "react"

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Journey", href: "#journey" },
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
]

export function DynamicIslandNavbar() {
  // PHASE 2: No complex hooks, no scroll listeners, no theme logic.
  const [activeSection, setActiveSection] = useState<string>("Work")

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      {/* Container: Added bg-red-500 temporarily to PROVE the container exists */}
      <div className="glass rounded-full px-6 py-3 flex items-center gap-8 bg-background/80 backdrop-blur-md border border-border/40 shadow-lg">
        
        <span 
          className="text-xl font-bold text-foreground cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          BO
        </span>

        {/* CRITICAL CHANGE: 
           Removed "hidden md:flex". Now it is just "flex". 
           If this shows up on mobile now, that's fine. We just want to see it exist.
        */}
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                setActiveSection(link.name)
                // Basic scroll to ID
                document.getElementById(link.href.replace("#", ""))?.scrollIntoView()
              }}
              // PHASE 2: Standard, loud colors to ensure visibility
              className={`text-sm font-medium transition-colors ${
                activeSection === link.name 
                  ? "text-blue-600 font-bold" 
                  : "text-gray-600 hover:text-black"
              }`}
            >                  
              {link.name}
            </a>
          ))}
        </div>

        {/* Theme/Menu Toggle Placeholders (Visual only, no logic) */}
        <div className="w-8 h-8 rounded-full bg-gray-200" />
      </div>
    </nav>
  )
}