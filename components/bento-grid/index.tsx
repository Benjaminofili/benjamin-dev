"use client"

import { BentoCard } from "./bento-card"
import { FusionFiestaCard } from "./fusion-fiesta-card"
import { BistroBlissCard } from "./bistro-bliss-card"
import { IdentityCard } from "./identity-card"
import { RealtimeCard } from "./realtime-card"
import { RoadmapCard } from "./roadmap-card"

export function BentoGrid() {
  return (
    <section className="px-4 py-20 lg:py-32" id="work">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">Featured Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated selection of projects showcasing scalable architecture, performance optimization, and
            pixel-perfect implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Row 1: 8+4 Split */}
          <BentoCard colSpan="8">
            <FusionFiestaCard />
          </BentoCard>

          <BentoCard colSpan="4">
            <BistroBlissCard />
          </BentoCard>

          {/* Row 2: 4+4+4 Split */}
          <BentoCard colSpan="4">
            <RealtimeCard />
          </BentoCard>

          <BentoCard colSpan="4">
            <RoadmapCard />
          </BentoCard>

          <BentoCard colSpan="4">
            <IdentityCard />
          </BentoCard>
        </div>
      </div>
    </section>
  )
}