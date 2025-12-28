"use client"

import { motion } from "framer-motion"
import { ArrowRight, Database, GitBranch, Smartphone } from "lucide-react"

const tags = [
  { label: "FLUTTER", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { label: "CLEAN ARCH", color: "bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30" },
  { label: "RIVERPOD", color: "bg-electric-purple/20 text-electric-purple border-electric-purple/30" },
]

export function FusionFiestaCard() {
  return (
    <div className="flex flex-row h-full min-h-[320px] relative overflow-hidden">
      {/* Left Side (Content) - w-1/2 z-20, text aligned top-left */}
      <div className="w-1/2 z-20 flex flex-col justify-between p-6 lg:p-8">
        <div>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2 text-left">
            FusionFiesta v2
          </h2>
          <p className="text-muted-foreground text-sm lg:text-base mb-4 text-left">
            Cross-Platform Ecosystem with RBAC & Offline-First Logic.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag.label} className={`px-3 py-1 text-xs font-mono rounded-full border ${tag.color}`}>
                {tag.label}
              </span>
            ))}
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="text-foreground/80">
              <span className="text-neon-cyan font-semibold">1.2M+</span> Potential Users
            </span>
            <span className="text-muted-foreground">|</span>
            <span className="text-foreground/80">
              <span className="text-neon-cyan font-semibold">&lt;100ms</span> Sync Latency
            </span>
          </div>
        </div>

        {/* CTA Button at bottom */}
        <motion.button
          whileHover={{ x: 4 }}
          className="flex items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors group w-fit mt-6"
        >
          <span className="text-sm font-medium">Read Case Study</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      {/* Right Side (Visual) - absolute right-0 top-0 h-full w-1/2 */}
      <div className="w-1/2 absolute right-0 top-0 h-full">
        {/* Visual Stack Container */}
        <div className="relative w-full h-full">
          {/* Layer 1: Purple DB Icon - bottom-10 right-10 opacity-20 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-10 right-10 opacity-20"
          >
            <Database className="w-32 h-32 text-electric-purple" />
          </motion.div>

          {/* Layer 2: Cyan Diagram - center opacity-60 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"
          >
            <div className="w-40 h-28 border border-neon-cyan/40 rounded-lg p-4 bg-neon-cyan/5">
              <GitBranch className="w-6 h-6 text-neon-cyan/80 mb-2" />
              <div className="space-y-1.5">
                <div className="h-2 bg-neon-cyan/30 rounded w-full" />
                <div className="h-2 bg-neon-cyan/20 rounded w-3/4" />
                <div className="h-2 bg-neon-cyan/10 rounded w-1/2" />
              </div>
            </div>
          </motion.div>

          {/* Layer 3: iPhone Mockup - absolute -right-4 -bottom-12 w-[80%] rotate-[-5deg] */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="absolute -right-4 -bottom-12 w-[80%] rotate-[-5deg]"
          >
            <div className="w-full aspect-[9/16] max-w-[180px] bg-muted rounded-3xl border border-border p-2 shadow-2xl ml-auto">
              <div className="w-full h-full bg-gradient-to-br from-neon-cyan/20 to-electric-purple/20 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-10 h-10 text-muted-foreground" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}