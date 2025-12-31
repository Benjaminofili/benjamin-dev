"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { AmbientBackground } from "@/components/ambient-background"
import { DynamicIslandNavbar } from "@/components/dynamic-island-navbar"
import { Footer } from "@/components/footer"
import { TechChip } from "@/components/tech-chip"
import { TechIcon } from "@/components/ui/tech-icons"

// --- Project Configuration ---
const project = {
  title: "Bistro Bliss",
  tagline: "High-Performance Restaurant Landing Page",
  role: "Frontend Engineer & Designer",
  timeline: "3 Weeks",
  stack: [
    { label: "React", iconKey: "react", color: "#61DAFB" },
    { label: "Vite", iconKey: "vite", color: "#646CFF" },
    { label: "Tailwind", iconKey: "tailwindcss", color: "#38B2AC" },
    { label: "Figma", iconKey: "figma", color: "#F24E1E" },
  ],
  metrics: [
    { label: "Performance", value: "100" },
    { label: "Accessibility", value: "100" },
    { label: "SEO Score", value: "100" },
  ],
  githubUrl: "https://github.com/Benjaminofili/BistroBliss-Website",
}

export default function BistroBlissPage() {
  return (
    <AmbientBackground>
      <DynamicIslandNavbar />
      
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          
          {/* 1. HERO HEADER */}
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <Link 
                href="/#work" 
                className="group flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Work
              </Link>
            </motion.div>

            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-5xl md:text-7xl font-bold text-foreground"
              >
                {project.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
              >
                {project.tagline}
              </motion.p>

              {/* Quick Info Bar */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-x-12 gap-y-4 pt-4 border-t border-border/50"
              >
                <div>
                  <span className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Role</span>
                  <span className="font-medium text-foreground">{project.role}</span>
                </div>
                <div>
                  <span className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Timeline</span>
                  <span className="font-medium text-foreground">{project.timeline}</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 2. HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-neutral-900"
          >
            <Image 
              src="/assets/mockup/Bistro.webp"
              alt="Bistro Bliss Dashboard"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>

          {/* 3. CASE STUDY CONTENT */}
          <div className="grid md:grid-cols-[1fr_300px] gap-16">
            
            {/* LEFT COLUMN: Narrative */}
            <div className="space-y-16">
              
              {/* The Goal */}
              <section className="space-y-4">
                <h3 className="font-display text-2xl font-bold text-foreground">The Goal</h3>
                <div className="prose prose-invert text-muted-foreground leading-relaxed">
                  <p>
                    In the highly competitive hospitality industry, a restaurant's website is often its first impression. 
                    The goal of <strong>Bistro Bliss</strong> was to translate a high-fidelity Figma design into a 
                    living, breathing application with zero visual compromise.
                  </p>
                  <p>
                    Beyond aesthetics, the critical requirement was <strong>speed</strong>. 
                    We aimed for perfect Google Lighthouse scores to ensure SEO ranking and immediate load times 
                    on mobile networks.
                  </p>
                </div>
              </section>

              {/* Engineering Focus */}
              <section className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-foreground">Engineering Focus</h3>
                
                {/* 1. Component Architecture */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-neon-cyan/50 transition-colors">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-neon-cyan">01.</span> Component-Driven Development
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Adopted an atomic design methodology. Reusable UI tokens (colors, typography, spacing) were 
                    abstracted into a Tailwind configuration, ensuring consistency and making theme updates instant across the entire application.
                  </p>
                </div>

                {/* 2. Performance */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-neon-cyan/50 transition-colors">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-neon-cyan">02.</span> Performance Optimization
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Achieved a 100/100 Performance score by implementing:
                  </p>
                  <ul className="list-disc pl-4 mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>Lazy loading for images and non-critical routes.</li>
                    <li>Code splitting via Vite to minimize bundle size.</li>
                    <li>Font subsetting to reduce CLS (Cumulative Layout Shift).</li>
                  </ul>
                </div>

                {/* 3. Responsiveness */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-neon-cyan/50 transition-colors">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-neon-cyan">03.</span> Adaptive Responsiveness
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Designed a fluid layout system that adapts gracefully from 320px mobile screens to 4k desktops, 
                    using modern CSS Grid and Flexbox patterns instead of rigid media queries.
                  </p>
                </div>
              </section>

            </div>

            {/* RIGHT COLUMN: Sticky Sidebar */}
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <TechChip 
                      key={tech.label}
                      label={tech.label}
                      color={tech.color}
                      iconKey={tech.iconKey}
                      className="text-xs px-3 py-1.5"
                    />
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Lighthouse Scores</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl font-bold text-foreground font-display">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <a 
                    href={project.githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-foreground text-background font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <TechIcon name="github" className="w-5 h-5 fill-current" />
                    <span>View Source</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </AmbientBackground>
  )
}