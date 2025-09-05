import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { servicesData } from "@/lib/service-data"
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SectionTitle } from "@/components/section-title"
import { CTA } from "@/components/cta"

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  // Service-specific content
  // const getServiceContent = (content: any, slug: string) => {
  //   return content[slug as keyof typeof content] || content["healthcare-staffing"]
  // }
  // const content = getServiceContent(services_for_slugs, service.slug)

  const industries = [
    "Office Buildings",
    "Government Facilities",
    "Educational Institutions",
    "Medical & Healthcare Centers",
    "Retail & Commercial Spaces",
    "Industrial & Warehouse Locations",
    "Airports & Transportation Hubs",
    "Military & Defense Facilities",
  ]

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        {/* <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 px-4 py-2 bg-white/20 text-white border-white/30">
                Professional Service
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">{service.headline}</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">{service.overview}</p>
            </div>
          </div>
        </section> */}
        <SectionTitle
          isHero
          badge="Service Details"
          title={service.name}
          subtitle={service.headline}
        />

        {/* Main Content */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* First Text & Photo Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground">{service.subtitle}</h2>
                  <h3 className="text-xl font-semibold text-muted-foreground">{service.tagline}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                <div className="relative">
                  <Image
                    src={`/services/${service.slug}-service.png`}
                    alt={`Professional ${service.name} service`}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                  />
                </div>
              </div>

              {/* Services & Industries Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                {/* Services Offered */}
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Our {service.name} Services Include:
                    </h3>
                    <ul className="space-y-3">
                      {service.services.map((item: any, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Industries Served */}
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                      <ArrowRight className="w-6 h-6 text-primary mr-3" />
                      Industries We Serve:
                    </h3>
                    <ul className="space-y-3">
                      {industries.map((industry, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-foreground">{industry}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Soft CTA Section */}
              <div className="bg-primary rounded-lg p-8 text-center mb-20">
                <h3 className="text-2xl font-bold text-white dark:text-background mb-4">{service.ctaTitle}</h3>
                <p className="text-lg text-white/90 dark:text-background mb-6 max-w-3xl mx-auto">{service.ctaDescription}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-primary hover:bg-slate-100 dark:text-black cursor-pointer"
                  >
                    <Link href="/lets-talk">
                      Get a Free Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-black cursor-pointer"
                  >
                    <Link href="/services">View All Services</Link>
                  </Button>
                </div>
              </div>


              {/* Second Text & Photo Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <div className="order-2 lg:order-1 relative">
                  <Image
                    src={`/services/${service.slug}-team.png`}
                    alt={`Professional ${service.name} team`}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                  />
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <h2 className="text-3xl font-bold text-foreground">{service.solutionTitle}</h2>
                  <h3 className="text-xl font-semibold text-muted-foreground">{service.solutionTagline}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{service.solutionDescription}</p>
                </div>
              </div>

              {/* Final CTA Section */}
              {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-center">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Ready to work with our {service.name.toLowerCase()} team?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Experience the difference that professional, reliable service makes. Contact us today to discuss your
                  specific needs and discover how we can help your organization succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                    <Link href="/contact">
                      Get Started Today
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    <Link href="/services">View All Services</Link>
                  </Button>
                </div>
              </div> */}

            </div>
          </div>
        </section>
        <CTA
          title={`Ready to work with our ${service.name.toLowerCase()} team?`}
          action="Experience the difference that professional, reliable service makes. Contact us today to discuss your specific needs and discover how we can help your organization succeed."
        />
      </main>
    </div>
  )
}
