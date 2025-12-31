"use client"

import { motion } from "framer-motion"
import { Code, Layers, Server, Pencil } from "lucide-react"
import { TechChip } from "@/components/tech-chip" 
import { TechIcon, type IconName } from "@/components/ui/tech-icons"
import { TECH_COLORS } from "@/lib/constants"

// Helper to wrap your Custom Icon for the TechChip
const IconWrapper = (name: IconName) => (props: { className?: string }) => (
  <TechIcon name={name} {...props} />
);

const arsenalData = [
  {
    iconLabel: " CORE STACK",
    icon: Code,
    title: "Languages & Frameworks",
    items: [
      { label: "Flutter / Dart", iconKey: "dart", color: "#0175C2" }, 
      { label: "React Ecosystem", iconKey: "react", color: "#61DAFB" },
      { label: "Python / Django", iconKey: "python", color: "#3776AB" },
    ],
  },
  {
    iconLabel: " ARCHITECTURE",
    icon: Layers,
    title: "System Design",
    items: [
      { label: "Clean Architecture", iconKey: "tree-structure", color: "#76B900" },
      { label: "MVVM / Riverpod", iconKey: "stack", color: "#00B4AB" }, // fallback icon if specific one missing
      { label: "Microservices", iconKey: "hive", color: "#E33332" },
    ],
  },
  {
    iconLabel: " INFRASTRUCTURE",
    icon: Server,
    title: "Backend & DevOps",
    items: [
      { label: "Supabase / PostgreSQL", iconKey: "postgresql", color: "#336791" },
      { label: "Firebase", iconKey: "firebase", color: "#FFCA28" },
      { label: "Docker / CI/CD", iconKey: "docker", color: "#2496ED" },
    ],
  },
  {
    iconLabel: " DESIGN & TOOLS",
    icon: Pencil,
    title: "Workflow",
    items: [
      { label: "Figma (Dev Mode)", iconKey: "figma", color: "#F24E1E" },
      { label: "Git / GitHub Flow", iconKey: "share-network", color: "#F05032" },
      { label: "Postman", iconKey: "postman", color: "#FF6C37" },
    ],
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

              <div className="flex flex-col gap-3 mt-6">
                {column.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: colIndex * 0.1 + itemIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <TechChip 
                      label={item.label}
                      color={item.color} // Using manual color here, or use your color file
                      icon={IconWrapper(item.iconKey as IconName)}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}