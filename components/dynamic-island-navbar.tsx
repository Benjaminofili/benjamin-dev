"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Journey", href: "#journey" },
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
]

export function DynamicIslandNavbar() {
  const [activeSection, setActiveSection] = useState<string>("Work")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="glass rounded-full px-6 py-3 flex items-center gap-8 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-lg">
        
        <span 
          className="text-xl font-bold text-black dark:text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          BO
        </span>

        {/* TEST 3: Re-added "hidden md:flex". 
            If links disappear on Desktop now, your Tailwind Breakpoints are broken. 
        */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                setActiveSection(link.name)
                document.getElementById(link.href.replace("#", ""))?.scrollIntoView()
              }}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.name 
                  ? "text-blue-600 font-bold" 
                  : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
              }`}
            >                  
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle - Only shows on small screens */}
        <button 
            className="md:hidden p-1 text-black dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Simple Mobile Menu (No Framer Motion yet) */}
      {isMobileMenuOpen && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-[300px] bg-white dark:bg-black border border-gray-200 dark:border-gray-800 p-4 rounded-xl shadow-xl flex flex-col gap-2">
             {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="p-2 text-center text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                    {link.name}
                </a>
             ))}
        </div>
      )}
    </nav>
  )
}