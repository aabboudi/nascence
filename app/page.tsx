import { HeroMarquee } from "@/components/hero-marquee";

import { RebrandWelcomeModal } from "@/components/rebrand-welcome";
import { ServicesSection } from "@/components/services-section";
import { SectionTitle } from "@/components/section-title";
import { ProcessSectionHorizontal, ProcessSectionVertical } from "@/components/process-section";
import HeroSection from "@/components/hero-section";
import { CTA } from "@/components/cta";
import CardsSection from "@/components/cards-section";

import { Aperture, HardDrive, TrendingUp, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative z-10 m-2">
        <RebrandWelcomeModal />
      </section>
      <div className="min-h-[60vh] w-full relative">
        {/* Radial Gradient Background from Bottom */}
        {/* <div
          className="absolute inset-0 z-0 dark:hidden"
          style={{
            background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
          }}
        />

        <div
          className="absolute inset-0 z-0 hidden dark:block"
          style={{
            background: "radial-gradient(125% 125% at 50% 90%, #1e293b 30%, #0f172a 100%)",
          }}
        /> */}

        <HeroSection />
      </div>

      {/* <SectionTitle
        badge="Our Credentials"
        title="Certifications, Clients, and Services"
        subtitle="Go over all the things that make us the best fit for your organization's needs."
      /> */}
      <HeroMarquee />

      <SectionTitle
        isHero
        badge="Our Services"
        title="Comprehensive Support Solutions"
        subtitle="Our management team has 70 years of combined experience in several projects for the Federal Government. Trust Nascence Group to drive your success with precision and excellence."
      />
      <ServicesSection />

      <SectionTitle
        isHero
        badge="Let&apos;s Talk"
        title="How It Works"
        subtitle="Our mission is to provide you with the best service, the right technology, and the right solutions to elevate your business - without the stress"
      />
      <div className="hidden lg:block"><ProcessSectionHorizontal /></div>
      <div className="lg:hidden"><ProcessSectionVertical /></div>

      <CardsSection
        title="Working with Nascense Group goes beyond reducing your operating cost"
        cards={[
          {
            title: "Scale Faster",
            desc: "Working with us will allow you to meet your growing demand without occurring all the overhead that comes with hiring.",
            icon: TrendingUp,
          },
          {
            title: "Quality & Efficiency",
            desc: " Our reliable and efficient team members work to provide a quality service that makes you look good.",
            icon: Zap,
          },
          {
            title: "The Latest Equipment",
            desc: " Take advantage of the latest service equipment without having to make the investment for yourself.",
            icon: HardDrive,
          },
          {
            title: "Focus on Core Business",
            desc: " Focus on what you do best. From hiring to payroll, let our team of experts handle the rest.",
            icon: Aperture,
          },
        ]}
      />

      <CTA />


    </main>
  );
}
