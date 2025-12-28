"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface BentoCardProps {
  children: ReactNode
  className?: string
  colSpan?: "4" | "8" | "12"
}

export function BentoCard({ children, className = "", colSpan = "4" }: BentoCardProps) {
  const spanClasses = {
    "4": "col-span-12 md:col-span-4",
    "8": "col-span-12 md:col-span-8",
    "12": "col-span-12",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-2xl bg-card border border-border noise-overlay backdrop-blur-sm ${spanClasses[colSpan]} ${className}`}
    >
      {children}
    </motion.div>
  )
}