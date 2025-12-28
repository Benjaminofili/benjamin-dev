"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check, ArrowUpRight } from "lucide-react"

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Resume", href: "/resume.pdf" },
]

export function Footer() {
  const [copied, setCopied] = useState(false)
  const email = "hello@benjamin.dev"

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="relative py-32 px-6 overflow-hidden border-t border-border">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric-purple/10 dark:bg-electric-purple/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-4">
            Ready to Scale?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-10">Building systems that perform at scale.</p>

          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-card backdrop-blur-md border border-cyan-500/50 hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300"
          >
            <span className="text-cyan-400 group-hover:text-black dark:group-hover:text-black font-mono text-lg transition-colors">{email}</span>
            <span className="w-px h-5 bg-cyan-500/50 group-hover:bg-black/30 transition-colors" />
            {copied ? (
              <Check className="w-5 h-5 text-cyan-400 group-hover:text-black dark:group-hover:text-black transition-colors" />
            ) : (
              <Copy className="w-5 h-5 text-cyan-400 group-hover:text-black dark:group-hover:text-black transition-colors" />
            )}
          </motion.button>

          {copied && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-cyan-400 text-sm mt-4"
            >
              Copied to clipboard!
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground text-sm">© 2025 Benjamin Ofili. Crafted in Lagos.</p>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-muted-foreground hover:text-cyan-400 transition-colors text-sm"
              >
                {link.label}
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}