"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const tags = [
  { label: "FLUTTER", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { label: "CLEAN ARCH", color: "bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30" },
  { label: "RIVERPOD", color: "bg-electric-purple/20 text-electric-purple border-electric-purple/30" },
]

export function FusionFiestaCard() {
  return (
    <div className="flex flex-row h-full min-h-[320px] relative overflow-hidden group bg-card">
      {/* Left Side (Content) */}
      <div className="w-1/2 z-20 flex flex-col justify-between p-6 lg:p-8 pointer-events-none">
        <div>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2 text-left">
            FusionFiesta v2
          </h2>
          <p className="text-muted-foreground text-sm lg:text-base mb-4 text-left">
            Cross-Platform Ecosystem with RBAC & Offline-First Logic.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 pointer-events-auto">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className={`text-[10px] font-mono px-2 py-1 rounded border ${tag.color}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

       <Link 
          href="/work/fusion-fiesta"
          className="flex items-center gap-2 text-sm font-medium text-foreground/80 group-hover:text-neon-cyan transition-colors pointer-events-auto cursor-pointer w-fit"
        >
          View Case Study <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Right Side (Image Only) */}
      <div className="absolute right-0 top-0 w-1/2 h-full z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="absolute top-1/2 right-[5%] -translate-y-1/2 rotate-[-5deg] w-[90%] max-w-[350px] lg:right-[10%] lg:max-w-[400px]"
        >
          <div className="relative w-full aspect-[9/19]">
             <Image 
               src="/assets/mockup/Fusion_3.webp" 
               alt="Fusion Fiesta Mobile App"
               fill
               className="object-contain drop-shadow-2xl"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
             />
          </div>
        </motion.div>
      </div>
    </div>
  )
}