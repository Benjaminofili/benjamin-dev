"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { AmbientBackground } from "@/components/ambient-background"
import { DynamicIslandNavbar } from "@/components/dynamic-island-navbar"
import { Footer } from "@/components/footer"
import { TechChip } from "@/components/tech-chip"
import { TechIcon, type IconName } from "@/components/ui/tech-icons"

// --- Project Configuration ---
const project = {
  title: "FusionFiesta v2",
  tagline: "Cross-Platform Event Management Ecosystem",
  role: "Lead Full-Stack Engineer",
  timeline: "4 Months",
  // Updated Stack: Removed Python/Firebase, kept Core + PostgreSQL
  stack: [
    { label: "Flutter", iconKey: "dart", color: "#0175C2" },
    { label: "Riverpod", iconKey: "stack", color: "#00B4AB" }, // Using 'stack' icon for Riverpod/State
    { label: "Clean Arch", iconKey: "tree-structure", color: "#76B900" },
    { label: "PostgreSQL", iconKey: "postgresql", color: "#336791" },
  ],
  metrics: [
    { label: "Sync Latency", value: "<100ms" },
    { label: "Uptime", value: "99.9%" },
    { label: "Conflicts", value: "0" },
  ],
  githubUrl: "https://github.com/Benjaminofili/Fusion_fiesta_v2",
}

export default function FusionFiestaPage() {
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
            className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-neutral-900"
          >
            {/* Using the image you provided */}
            <Image 
              src="/assets/mockup/Fusion_2.webp"
              alt="FusionFiesta App Showcase"
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
              
              {/* The Problem */}
              <section className="space-y-4">
                <h3 className="font-display text-2xl font-bold text-foreground">The Problem</h3>
                <div className="prose prose-invert text-muted-foreground leading-relaxed">
                  <p>
                    Colleges organize numerous events regularly—fests, technical competitions, and seminars. 
                    However, managing these manually led to significant operational bottlenecks.
                  </p>
                  <ul className="list-disc pl-4 space-y-2 mt-4">
                    <li>
                      <strong className="text-foreground">Communication Gap:</strong> Students often missed updates due to scattered notices and word-of-mouth reliance.
                    </li>
                    <li>
                      <strong className="text-foreground">Resource Mismanagement:</strong> Manual scheduling caused venue conflicts and poor volunteer allocation.
                    </li>
                    <li>
                      <strong className="text-foreground">Low Engagement:</strong> The lack of a centralized platform resulted in poor student participation.
                    </li>
                  </ul>
                </div>
              </section>

              {/* The Solution & Architecture */}
              <section className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-foreground">The Solution & Architecture</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We engineered a <strong>Cross-Platform Application</strong> that serves as a single source of truth for all campus activities. 
                  The system was built using <strong>Clean Architecture</strong> to ensure scalability and testability.
                </p>
                
                {/* Diagram / Architecture Block */}
                <div className="bg-muted/30 border border-border rounded-xl p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <TechIcon name="react" className="w-6 h-6 text-blue-400" /> 
                      {/* Note: Using React icon as generic UI placeholder or swap to Smartphone icon if available */}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">Presentation Layer</h4>
                      <p className="text-sm text-muted-foreground mt-1">Flutter UI with optimistic state management using <strong>Riverpod</strong> for immediate user feedback.</p>
                    </div>
                  </div>
                  
                  <div className="w-px h-6 bg-border ml-5" /> {/* Connector Line */}

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <TechIcon name="tree-structure" className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">Domain Layer</h4>
                      <p className="text-sm text-muted-foreground mt-1">Pure Dart objects containing business logic (e.g., preventing double-booking of venues).</p>
                    </div>
                  </div>

                  <div className="w-px h-6 bg-border ml-5" /> {/* Connector Line */}

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <TechIcon name="postgresql" className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">Data Layer</h4>
                      <p className="text-sm text-muted-foreground mt-1">Repository pattern mediating between a local <strong>SQLite</strong> cache (offline) and the remote <strong>PostgreSQL</strong> backend.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Challenges */}
              <section className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-foreground">Technical Challenges</h3>
                
                <div className="grid gap-6">
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-neon-cyan/50 transition-colors">
                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-neon-cyan">01.</span> Concurrent Booking Conflicts
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong>The Issue:</strong> During high-demand events, multiple users might try to book the last seat simultaneously.
                      <br/><br/>
                      <strong>The Solution:</strong> Implemented database-level locking and a queue system. On the frontend, we used Optimistic UI to give immediate feedback while a background worker reconciled the transaction.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6 hover:border-neon-cyan/50 transition-colors">
                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-neon-cyan">02.</span> Offline-First Consistency
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong>The Issue:</strong> Ensuring students can view schedules without internet while keeping data fresh.
                      <br/><br/>
                      <strong>The Solution:</strong> Utilized a robust SQLite caching strategy. When connectivity is restored, a background sync service reconciles local changes with the PostgreSQL server using timestamp-based conflict resolution.
                    </p>
                  </div>
                </div>
              </section>

            </div>

            {/* RIGHT COLUMN: Sticky Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack Widget */}
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
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Impact</h4>
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
                    View Source <ArrowUpRight className="w-4 h-4" />
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