"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function GlowingSphere() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const isDark = mounted && theme === "dark";
  // Adjust glow intensity based on theme
  const glowIntensity = isDark ? 0.3 : 0.15;
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer Glow Ring */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [
            0.3 * glowIntensity,
            0.5 * glowIntensity,
            0.3 * glowIntensity,
          ],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(0, ${
            isDark ? 240 : 217
          }, 255, ${isDark ? 0.2 : 0.12}) 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      {/* Secondary Purple Glow */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [
            0.2 * glowIntensity,
            0.4 * glowIntensity,
            0.2 * glowIntensity,
          ],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(112, 0, 255, ${
            isDark ? 0.3 : 0.15
          }) 0%, transparent 60%)`,
          filter: "blur(30px)",
        }}
      />

      {/* Main Sphere */}
      <motion.div
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full"
        style={{
          background: isDark
            ? `
          radial-gradient(circle at 30% 30%, rgba(0, 240, 255, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(112, 0, 255, 0.4) 0%, transparent 50%),
          radial-gradient(circle, rgba(5, 5, 5, 0.8) 0%, rgba(5, 5, 5, 1) 100%)
        `
            : `
          radial-gradient(circle at 30% 30%, rgba(0, 217, 255, 0.25) 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(112, 0, 255, 0.25) 0%, transparent 50%),
          radial-gradient(circle, rgba(250, 250, 250, 0.9) 0%, rgba(245, 245, 245, 1) 100%)
        `,
          boxShadow: isDark
            ? `
          0 0 60px rgba(0, 240, 255, 0.3),
          0 0 120px rgba(112, 0, 255, 0.2),
          inset 0 0 60px rgba(0, 240, 255, 0.1)
        `
            : `
          0 0 40px rgba(0, 217, 255, 0.15),
          0 0 80px rgba(112, 0, 255, 0.1),
          inset 0 0 40px rgba(0, 217, 255, 0.05)
        `,
        }}
      >
        {/* Inner Highlight */}
        <div
          className="absolute top-[15%] left-[20%] w-[30%] h-[30%] rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, rgba(255, 255, 255, ${
              isDark ? 0.4 : 0.6
            }) 0%, transparent 70%)`,
            filter: "blur(10px)",
          }}
        />
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-neon-cyan/60"
          animate={{
            y: [0, -20, 0],
            x: [0, Math.sin(i) * 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
          style={{
            left: `${30 + i * 10}%`,
            top: `${40 + (i % 3) * 15}%`,
          }}
        />
      ))}
    </div>
  );
}
