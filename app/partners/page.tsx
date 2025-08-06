import PartnersForm from "@/components/partners-form"
import { SectionTitle } from "@/components/section-title"

export default function PartnersPage() {
  return (
    <div>
      <SectionTitle
        isHero={true}
        badge="Partners"
        title="Join Our Partner Network"
        subtitle="We collaborate with industry leaders to deliver exceptional solutions. Explore partnership opportunities with us."
      />
      <PartnersForm />
    </div>
  )
}
