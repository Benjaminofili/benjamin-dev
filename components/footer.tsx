"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Copy } from "lucide-react"
import { TechIcon, type IconName } from "@/components/ui/tech-icons"

const socialLinks: { label: string; href: string; icon: IconName }[] = [
  { 
    label: "LinkedIn", 
    href: "https://linkedin.com/in/benjamin-ofili", // Update with your actual profile URL
    icon: "linkedin-logo" 
  },
  { 
    label: "GitHub", 
    href: "https://github.com/Benjaminofili", 
    icon: "github" 
  },
  { 
    label: "Resume", 
    href: "/resume.pdf", // Make sure your new PDF is named 'resume.pdf' in the 'public' folder
    icon: "file-text" 
  },
]

export function Footer() {
  const [copied, setCopied] = useState(false)
  const email = "benjaminofili34@gmail.com"

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="relative py-32 px-6 overflow-hidden border-t border-border bg-background/50">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric-purple/5 dark:bg-electric-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6">
            Ready to Scale?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Building systems that perform at scale. Let&apos;s turn your complex requirements into elegant solutions.
          </p>

          <div className="flex flex-col items-center gap-4">
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-card backdrop-blur-md border border-neon-cyan/30 hover:border-neon-cyan hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300"
            >
              <span className="text-foreground group-hover:text-neon-cyan font-mono text-lg transition-colors">
                {email}
              </span>
              <span className="w-px h-5 bg-border group-hover:bg-neon-cyan/50 transition-colors" />
              {copied ? (
                <Check className="w-5 h-5 text-green-500 transition-colors" />
              ) : (
                <Copy className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
              )}
            </motion.button>
            
            {copied && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 text-sm font-mono"
              >
                Copied to clipboard!
              </motion.p>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground text-sm font-mono">
            © 2025 Benjamin Ofili. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors text-sm font-medium"
              >
                <TechIcon 
                  name={link.icon} 
                  className="w-5 h-5 fill-current text-muted-foreground group-hover:text-neon-cyan transition-colors" 
                />
                <span className="hidden sm:inline-block">{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}