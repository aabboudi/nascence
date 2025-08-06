import { SectionTitle } from '@/components/section-title';
import { CTA } from '@/components/cta';

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { servicesData } from "@/lib/service-data"
import { cn } from "@/lib/utils"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionTitle
        isHero={true}
        badge="Services"
        title="Our Services"
        // subtitle="At Nascence Group, we offer a wide range of services to meet your needs. Our team is dedicated to providing high-quality solutions tailored to your requirements."
        subtitle="Explore our comprehensive range of support services, each tailored to meet the unique demands of specific industries and operational environments."
      />
      {/* <CTA action='test' /> */}
    </div>
  )
}
