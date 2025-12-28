"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  color: "purple" | "cyan" | "mixed";
}
interface Edge {
  from: string;
  to: string;
}
const nodes: Node[] = [
  { id: "design", x: 10, y: 50, label: "Design", color: "purple" },
  { id: "ui", x: 25, y: 25, label: "UI/UX", color: "purple" },
  { id: "motion", x: 30, y: 70, label: "Motion", color: "purple" },
  { id: "systems", x: 50, y: 45, label: "Systems", color: "mixed" },
  { id: "frontend", x: 70, y: 30, label: "Frontend", color: "cyan" },
  { id: "backend", x: 75, y: 65, label: "Backend", color: "cyan" },
  { id: "engineering", x: 90, y: 50, label: "Engineering", color: "cyan" },
];
const edges: Edge[] = [
  { from: "design", to: "ui" },
  { from: "design", to: "motion" },
  { from: "ui", to: "systems" },
  { from: "motion", to: "systems" },
  { from: "systems", to: "frontend" },
  { from: "systems", to: "backend" },
  { from: "frontend", to: "engineering" },
  { from: "backend", to: "engineering" },
  { from: "ui", to: "frontend" },
  { from: "motion", to: "frontend" },
];
function getNodeColor(color: Node["color"], isDark: boolean) {
  switch (color) {
    case "purple":
      return {
        bg: "bg-purple-500",
        shadow: isDark
          ? "shadow-[0_0_15px_rgba(112,0,255,0.6)]"
          : "shadow-[0_0_10px_rgba(112,0,255,0.4)]",
        text: "text-purple-400",
      };
    case "cyan":
      return {
        bg: "bg-cyan-400",
        shadow: isDark
          ? "shadow-[0_0_15px_rgba(0,240,255,0.6)]"
          : "shadow-[0_0_10px_rgba(0,217,255,0.4)]",
        text: "text-cyan-400",
      };
    case "mixed":
      return {
        bg: "bg-gradient-to-r from-purple-500 to-cyan-400",
        shadow: isDark
          ? "shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          : "shadow-[0_0_15px_rgba(0,217,255,0.3)]",
        text: isDark ? "text-white" : "text-foreground",
      };
  }
}
export function ConstellationGraph() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const isDark = mounted && theme === "dark";
  const getNodePosition = (id: string) => {
    const node = nodes.find((n) => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* SVG for connection lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              stopColor={isDark ? "rgba(112,0,255,0.4)" : "rgba(112,0,255,0.3)"}
            />
            <stop
              offset="100%"
              stopColor={isDark ? "rgba(0,240,255,0.4)" : "rgba(0,217,255,0.3)"}
            />
          </linearGradient>
        </defs>
        {edges.map((edge, index) => {
          const from = getNodePosition(edge.from);
          const to = getNodePosition(edge.to);
          return (
            <motion.line
              key={index}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#lineGradient)"
              strokeWidth="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          );
        })}
      </svg>
      {/* Nodes */}
      {nodes.map((node, index) => {
        const colors = getNodeColor(node.color, isDark);
        return (
          <motion.div
            key={node.id}
            className="absolute flex flex-col items-center gap-2"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
          >
            <div
              className={`relative w-4 h-4 rounded-full ${colors.bg} ${colors.shadow}`}
            >
              <div
                className={`absolute inset-0 rounded-full ${colors.bg} animate-pulse opacity-50`}
              />
            </div>
            <span
              className={`text-[10px] md:text-xs font-mono ${colors.text} whitespace-nowrap`}
            >
              {node.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
