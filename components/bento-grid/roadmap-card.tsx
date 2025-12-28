"use client";
import { motion } from "framer-motion";
import { Square, CheckSquare } from "lucide-react";
const roadmapItems = [
  { label: "System Design", completed: true },
  { label: "GraphQL", completed: true },
  { label: "Kubernetes", completed: false },
  { label: "Rust", completed: false },
];
export function RoadmapCard() {
  return (
    <div className="relative h-full min-h-[320px] p-6 flex flex-col">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="font-mono text-xs text-muted-foreground ml-2">
          ~/roadmap
        </span>
      </div>
      {/* Terminal Content */}
      <div className="flex-1 bg-muted/50 rounded-lg border border-border p-4 font-mono text-sm">
        <p className="text-muted-foreground mb-3">$ cat learning.todo</p>

        <div className="space-y-3">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              {item.completed ? (
                <CheckSquare className="w-4 h-4 text-neon-cyan" />
              ) : (
                <Square className="w-4 h-4 text-muted-foreground" />
              )}
              <span
                className={
                  item.completed
                    ? "text-foreground/80 line-through"
                    : "text-muted-foreground"
                }
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-neon-cyan/60 mt-4 flex items-center"
        >
          <span className="animate-pulse mr-1">▋</span>
          <span className="text-muted-foreground">_</span>
        </motion.p>
      </div>
    </div>
  );
}
