import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Shield, DollarSign } from 'lucide-react' // Common icons

interface ServiceSectionProps {
  id: string
  headline: string
  overview: string
  features: { icon: React.ComponentType<{ className?: string }>; text: string }[]
  industryAlignment: { title: string; points: string[] }
  valuePropositions: { icon: React.ComponentType<{ className?: string }>; text: string }[]
  ctaText: string
  ctaLink: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
}

export function ServiceSection({
  id,
  headline,
  overview,
  features,
  industryAlignment,
  valuePropositions,
  ctaText,
  ctaLink,
  icon: SectionIcon,
  gradient,
}: ServiceSectionProps) {
  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Features & Industry Alignment */}
            <div className="space-y-12">
              {/* Service Features */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center space-x-3">
                    <SectionIcon className={cn("w-6 h-6", `text-${gradient.split('-')[1]}-600`)} />
                    <span>Service Features</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {features.map((feature, index) => {
                      const FeatureIcon = feature.icon
                      return (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 flex-shrink-0 text-primary mt-0.5">
                            <FeatureIcon className="w-full h-full" />
                          </div>
                          <span className="text-foreground leading-relaxed">{feature.text}</span>
                        </li>
                      )
                    })}
                  </ul>
                </CardContent>
              </Card>

              {/* Industry Alignment */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <span>{industryAlignment.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {industryAlignment.points.map((point, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Value Propositions & CTA */}
            <div className="space-y-12">
              {/* Client Value Propositions */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-yellow-600" />
                    <span>Client Value Propositions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {valuePropositions.map((value, index) => {
                      const ValueIcon = value.icon
                      return (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 flex-shrink-0 text-accent-foreground mt-0.5">
                            <ValueIcon className="w-full h-full" />
                          </div>
                          <span className="text-foreground leading-relaxed">{value.text}</span>
                        </li>
                      )
                    })}
                  </ul>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className={cn("bg-gradient-to-r p-8 text-center shadow-lg", gradient)}>
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Operations?</h3>
                <p className="text-white/90 text-lg mb-8">
                  Discover how our specialized "{headline.split(" for ")[0]}" services can benefit your organization.
                </p>
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                  <Link href={ctaLink}>{ctaText}</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
