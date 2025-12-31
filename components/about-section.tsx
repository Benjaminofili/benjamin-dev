"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TechIcon } from "@/components/ui/tech-icons";
import { ConstellationGraph } from "./constellation-graph";
const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/awelechukwu-ofili-3b9450367/" },
  { label: "GitHub", href: "https://github.com/Benjaminofili" },
  { label: "Read My Resume", href: "/resume.pdf" },
];
export function AboutSection() {
  return (
    <section
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-background"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - The Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-display leading-tight">
              The Person Behind
              <br />
              the Pixels.
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Senior Design Engineer bridging the gap between beautiful
                interfaces and robust system architecture. My approach combines
                pixel-perfect aesthetics with performance-first engineering
                principles.
              </p>
              <p>
                With a background in Full-Stack Architecture, I specialize in
                building scalable applications that handle real-world complexity
                while maintaining elegant user experiences. From database design
                to micro-interactions, I obsess over every layer.
              </p>
              <p>
                Based in Lagos, I spend my days architecting systems and my
                evenings managing my FC Barcelona B squad in FIFA—applying the
                same strategic thinking to both.
              </p>
            </div>

            {/* Footer Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-6 mt-4"
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors group"
                >
                {link.label === "LinkedIn" && (
                    <TechIcon name="linkedin-logo" className="w-4 h-4 mr-1 text-cyan-400" />
                )}
                {link.label === "GitHub" && (
                    <TechIcon name="github" className="w-4 h-4 mr-1 text-cyan-400" />
                )}
                  {link.label}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Constellation Graph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <ConstellationGraph />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
