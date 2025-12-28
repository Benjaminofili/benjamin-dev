"use client"

import { motion } from "framer-motion"
import { Monitor } from "lucide-react"

export function BistroBlissCard() {
  return (
    <div className="flex flex-col h-full min-h-[320px] relative overflow-hidden">
      {/* Performance Badge - absolute top-4 right-4 z-20 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-md border border-border px-3 py-1.5 rounded-full flex items-center gap-2"
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs font-mono text-muted-foreground">Performance: 100/100</span>
      </motion.div>

      {/* Laptop Mockup - absolute centered, w-[120%] for overflow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%]"
        style={{ transform: "translate(-50%, -50%) perspective(500px) rotateY(-10deg) rotateX(5deg)" }}
      >
        {/* Laptop Screen */}
        <div className="w-full max-w-[280px] mx-auto">
          <div className="aspect-[16/10] bg-muted rounded-lg border border-border p-2 shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-foreground/10 to-foreground/5 rounded flex items-center justify-center">
              <Monitor className="w-12 h-12 text-muted-foreground" />
            </div>
          </div>
          {/* Laptop Base */}
          <div className="w-[110%] h-3 bg-muted rounded-b-lg mx-auto border-t border-border -ml-[5%]" />
        </div>
      </motion.div>

      {/* Text - absolute bottom-6 left-6 */}
      <div className="absolute bottom-6 left-6 z-10">
        <h3 className="font-display text-xl font-bold text-foreground mb-1 text-left">Bistro Bliss</h3>
        <p className="text-sm text-muted-foreground text-left">Pixel-Perfect Figma to React Implementation.</p>
      </div>
    </div>
  )
}