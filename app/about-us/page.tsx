import CredentialsGrid from "@/components/credentials-grid";
import { CTA } from "@/components/cta";
import IconsBlock from "@/components/icons-block";
import LeadershipGrid from "@/components/leadership-grid";
import { SectionTitle } from "@/components/section-title";
import SolidCard from "@/components/solid-card";

export default function AboutUsPage() {
  return (
    <main>
      <div className="max-w-7xl flex flex-col justify-center mx-auto px-4 sm:px-6 lg:px-8">
        
      <SectionTitle
        isHero={true}
        badge="About Us"
        title="Who We Are"
        subtitle="Learn more about our mission, values, and the team behind our success."
      />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        <IconsBlock />
        <div className="col-span-2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            We are a team of dedicated professionals committed to delivering top-notch services and solutions to our clients. Our expertise spans various industries, allowing us to tailor our approach to meet the unique needs of each organization we work with.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Our core values of integrity, innovation, and customer-centricity drive everything we do. We believe in building long-term relationships with our clients based on trust and mutual respect.
          </p>
        </div>
      </section>
      <SolidCard
        title="Our Mission"
        desc="As a Minority Woman-Owned, Certified HubZone business, we remain committed to providing accountable, professional team members to support your organization while also leveraging new technology and innovative processes and meeting the highest standard for industry best practices."
      />

      <SectionTitle
        badge="Credentials"
        title="Certified & Compliant"
        subtitle="We are proud to hold the following certifications that demonstrate our commitment to excellence and diversity."
      />
      <CredentialsGrid />

      <SectionTitle
        isHero
        badge="Leadership"
        title="Meet Our Executive Team"
        subtitle="Our experienced leadership team brings decades of expertise in federal contracting, operations, and business excellence."
      />
      <LeadershipGrid />

      </div>
      <CTA />

    </main>
  )
}
