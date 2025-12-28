"use client"

import { motion } from "framer-motion"
import { Code, Layers, Server, Pencil } from "lucide-react"

const arsenalData = [
  {
    iconLabel: " CORE STACK",
    icon: Code,
    title: "Languages & Frameworks",
    items: ["Flutter / Dart", "React Ecosystem", "Python / Django"],
  },
  {
    iconLabel: " ARCHITECTURE",
    icon: Layers,
    title: "System Design",
    items: ["Clean Architecture", "MVVM / Riverpod", "Microservices"],
  },
  {
    iconLabel: " INFRASTRUCTURE",
    icon: Server,
    title: "Backend & DevOps",
    items: ["Supabase / PostgreSQL", "Firebase", "Docker / CI/CD"],
  },
  {
    iconLabel: " DESIGN & TOOLS",
    icon: Pencil,
    title: "Workflow",
    items: ["Figma (Dev Mode)", "Git / GitHub Flow", "Postman"],
  },
]

export function ArsenalSection() {
  return (
    <section className="py-32 px-6" id="stack">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground">Engineering Arsenal</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {arsenalData.map((column, colIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: colIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="border-t-2 border-cyan-500 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <column.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 uppercase font-mono text-xs tracking-wider">{column.iconLabel}</span>
                </div>

                <h3 className="text-foreground font-display font-bold text-xl mb-6">{column.title}</h3>
              </div>

              <ul className="space-y-3 mt-6">
                {column.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: colIndex * 0.1 + itemIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-500 inline-block mr-3 flex-shrink-0" />
                    <span className="font-mono text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}