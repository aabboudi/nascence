"use client"

import { CTA } from "@/components/cta"
import { SectionTitle } from "@/components/section-title"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Linkedin, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CEOMessagePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionTitle
        isHero={true}
        badge="Leadership"
        title="Message from Our CEO"
        subtitle="Tamala Roddy shares her vision for The Nascence Group and our commitment to excellence."
      />

      {/* CEO Message Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* CEO Profile */}
            <Card className="mb-12 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="md:col-span-1 p-8 flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <Image
                        src="/leadership/ceo-tamala-roddy.webp"
                        alt="Tamala Roddy"
                        className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
                        height={512}
                        width={512}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Tamala Roddy</h3>
                    <p className="text-slate-700 dark:text-slate-300 font-semibold mb-4">Chief Executive Officer</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://www.linkedin.com/in/tamala-roddy-58bbb119a"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect
                      </Link>
                    </Button>
                  </div>
                  <div className="md:col-span-2 p-8">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">About Tamala</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Tamala Roddy is the CEO of Nascence Group LLC, a Minority Woman-Owned, 8(a), and HUBZone-certified business. With over seven years of experience in federal government contracting, she has led the company&apos;s growth from a small startup into a multi-division enterprise providing janitorial, grounds maintenance, waste management, facility support, IT, and staffing services nationwide. Ms. Roddy is committed to building a business rooted in compliance, innovation, and opportunity creation, while driving scalable impact for both government and corporate clients.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Full Message */}
            <div className="prose prose-lg max-w-none">
              {/* <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200 mb-8">
                <blockquote className="text-xl text-slate-700 italic leading-relaxed border-l-4 border-blue-600 pl-6 mb-0">
                  "At The Nascence Group, we believe that excellence is not just about meeting expectations—it's about
                  exceeding them at every turn. Our commitment to integrity, innovation, and service drives us to be
                  more than just a contractor; we are your trusted partner in success."
                </blockquote>
              </div> */}

              <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  At Nascence Group, our story is one of growth, resilience, and possibility. When I founded this company, I set out with a simple mission: to create opportunities through service. What began as a small, determined business has grown into a multi-division enterprise serving federal and corporate clients across the nation.
                </p>

                <p>
                  Our name, Nascence, means new beginnings — and that is exactly what we stand for. Every contract, every partnership, and every employee we hire represents the beginning of something greater: a chance to deliver excellence, empower communities, and leave a lasting impact.
                </p>

                <p>
                  As a Minority Woman-Owned, HUBZone, and 8(a)-certified business, we embrace our responsibility not only to perform at the highest standards of quality and compliance, but also to open doors for others. Our success is measured not just in revenue or contract awards, but in the jobs we create, the communities we support, and the trust we build with our clients.
                </p>

                <p>
                  Looking ahead, my vision for Nascence Group is bold: to become a model of innovation and integrity in government contracting — scaling from millions to tens of millions in impact while staying true to our roots of service and excellence. By combining people, process, and technology, we are positioning Nascence Group to deliver results that matter today and shape the future of tomorrow.
                </p>

                <p>
                  I am proud of the team we&apos;ve built and grateful for the trust our clients place in us. Together, we are proving that with determination, innovation, and heart, new beginnings can lead to extraordinary outcomes.
                </p>

                <div className="border-2 rounded-lg p-6 mt-8">
                  {/* <p className="text-slate-700 mb-4"> */}
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Tamala Roddy</strong>
                    <br />
                    Chief Executive Officer
                    <br />
                    Nascence Group LLC
                  </p>
                  {/* <p className="text-sm text-slate-600">
                    Degree, University
                    <br />
                    15+ Years in Federal Contracting
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <CTA />
    </div>
  )
}
