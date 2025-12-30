import { AmbientBackground } from "@/components/ambient-background"
// import { DynamicIslandNavbar } from "@/components/dynamic-island-navbar"
import { NavbarStyleTest } from "@/components/dynamic-island-navbar"
import { HeroSection } from "@/components/hero-section"
import { BentoGrid } from "@/components/bento-grid"
import { ExperienceSection } from "@/components/experience-section"
import { AboutSection } from "@/components/about-section"
import { ArsenalSection } from "@/components/arsenal-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <AmbientBackground>
      {/* <DynamicIslandNavbar /> */}
      <NavbarStyleTest />
      <main>
        <HeroSection />
        <BentoGrid />
        <ExperienceSection />
        <AboutSection />
        <ArsenalSection />
      </main>
      <Footer />
    </AmbientBackground>
  )
}
