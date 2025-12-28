"use client"

import { motion } from "framer-motion"

interface ExperienceItem {
  role: string
  project: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    role: "Lead Full-Stack Engineer",
    project: "FusionFiesta v2",
    description:
      "Architected a role-based event ecosystem with real-time collaboration features, handling 10K+ concurrent users with sub-100ms latency.",
  },
  {
    role: "Frontend Engineer & Designer",
    project: "Bistro Bliss",
    description:
      "Engineered high-performance React interfaces with complex state management, achieving 95+ Lighthouse scores across all metrics.",
  },
  {
    role: "Software Engineer",
    project: "Antonio Translator",
    description:
      "Built real-time translation infrastructure supporting 50+ languages with WebSocket-based streaming and offline-first architecture.",
  },
]

function TimelineNode() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
      <div className="absolute w-3 h-3 rounded-full bg-cyan-400 animate-ping opacity-50" />
    </div>
  )
}

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex items-start gap-4"
    >
      <div className="flex flex-col items-center pt-2">
        <TimelineNode />
        {index < experiences.length - 1 && (
          <div className="w-px h-full min-h-[80px] bg-gradient-to-b from-cyan-400/50 to-transparent" />
        )}
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl p-6 hover:bg-muted/50 transition-colors duration-300">
        <div className="flex flex-col gap-1 mb-3">
          <h3 className="text-lg font-semibold text-foreground font-display">{item.role}</h3>
          <span className="text-sm text-cyan-400">{item.project}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24" id="journey">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-4">Experience</h2>
          <p className="text-muted-foreground">A timeline of my professional journey.</p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} item={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}