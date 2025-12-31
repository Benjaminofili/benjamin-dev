"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function BistroBlissCard() {
  return (
    <div className="flex flex-col h-full min-h-[320px] relative overflow-hidden group">
      {/* Performance Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-md border border-border px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm"
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs font-mono text-muted-foreground">Performance: 100/100</span>
      </motion.div>

      {/* Laptop Image (Self-framed) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]"
      >
        <div className="relative w-full aspect-[16/10]">
          <Image 
            src="/assets/mockup/Bistro.webp" 
            alt="Bistro Bliss Dashboard"
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background via-background/90 to-transparent z-10">
        <Link href="/work/bistro-bliss" className="block group/link cursor-pointer">
          <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover/link:text-neon-cyan">
            Bistro Bliss
          </h3>
          <div className="flex items-center justify-between mt-2">
            <p className="text-sm text-muted-foreground">High-Performance Dashboard</p>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover/link:text-neon-cyan transition-colors" />
          </div>
        </Link>
      </div>
    </div>
  )
}