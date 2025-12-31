"use client";
import { motion } from "framer-motion";
export function IdentityCard() {
  return (
    <div className="relative h-full min-h-[320px] p-6 flex flex-col items-center justify-center">
      {/* Large Circular Avatar with Cyan Glow */}
      <div className="glitch-container relative mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-neon-cyan/50 shadow-[0_0_30px_rgba(0,240,255,0.3)]"
        >
          <img
            src="/professional-portrait.webp"
            alt="Benjamin Ofili"
            className="glitch-image w-full h-full object-cover"
          />
          {/* RGB Split Layers */}
          <div
            className="glitch-r absolute inset-0 opacity-0"
            style={{
              backgroundImage:
                "url('/professional-portrait-silhouette-dark.jpg')",
              backgroundSize: "cover",
              mixBlendMode: "screen",
              filter: "url('#redChannel')",
            }}
          />
          <div
            className="glitch-b absolute inset-0 opacity-0"
            style={{
              backgroundImage:
                "url('/professional-portrait-silhouette-dark.jpg')",
              backgroundSize: "cover",
              mixBlendMode: "screen",
              filter: "url('#blueChannel')",
            }}
          />
        </motion.div>

        {/* SVG Filters for RGB Split */}
        <svg className="hidden">
          <defs>
            <filter id="redChannel">
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              />
            </filter>
            <filter id="blueChannel">
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Name */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-xl font-bold text-foreground mb-1 text-center"
      >
        Benjamin Ofili
      </motion.h3>
      <p className="font-mono text-xs text-neon-cyan mb-4 text-center">
        Senior Design Engineer
      </p>

      {/* Status Badge */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs text-muted-foreground">
          Available for work
        </span>
      </div>
    </div>
  );
}
