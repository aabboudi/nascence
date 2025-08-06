"use client"

import { SectionTitle } from "@/components/section-title"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, ExternalLink, Calendar, MapPin, DollarSign, Award, Building } from "lucide-react"
import Link from "next/link"
import { Contract, contractData, spotlightContracts } from "@/lib/contract-data"
import { ContractSpotlight } from "@/components/experience/contract-spotlight"
import { ContractsTable } from "@/components/experience/awards"
import { useState, useEffect } from "react"
import { TextMorphLoop } from "@/components/text-morph-button"

export default function ExperiencePage() {
  const [awards, setAwards] = useState<Contract[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/awards")
      .then(res => res.json())
      .then(data => setAwards(data.data))
      .finally(() => setLoading(false))
  }, [])

  // console.log('Fetched contracts:', myContracts)
  // Calculate revenue metrics
  const currentRevenue = contractData.metrics.currentYearRevenue
  const previousRevenue = contractData.metrics.previousYearRevenue
  const growthPercentage = ((currentRevenue - previousRevenue) / previousRevenue) * 100
  const isPositiveGrowth = growthPercentage > 0

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <SectionTitle
        isHero={true}
        badge="Experience"
        title="Our Experience"
        subtitle="We have a proven track record of delivering exceptional results across various industries, leveraging our expertise to drive success for our clients."
      >
        <TextMorphLoop
          texts={['DoD', 'USDA', 'FAA', 'GSA']}
        />
      </SectionTitle>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center">
                {/* Left Side - Revenue Metrics */}
                <div className="space-y-8 max-w-2xl">
                  <div>
                    {/* <Badge variant="outline" className="mb-4 px-4 py-2">
                        Contract Performance
                      </Badge> */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                      Proven{" "}
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Excellence
                      </span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Our track record speaks for itself. Delivering exceptional results across federal agencies with
                      consistent growth and outstanding performance ratings.
                    </p>
                  </div>

                  {/* Revenue Card */}
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-foreground">12-Month Revenue</h3>
                        <div
                          className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${isPositiveGrowth
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                            }`}
                        >
                          {isPositiveGrowth ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          <span>{Math.abs(growthPercentage).toFixed(1)}%</span>
                        </div>
                      </div>

                      <div className="text-4xl font-bold text-foreground mb-2">{formatCurrency(currentRevenue)}</div>

                      <p className="text-muted-foreground">
                        {isPositiveGrowth ? "Increased" : "Decreased"} from {formatCurrency(previousRevenue)}
                        in the previous 12 months
                      </p>

                      {/* Additional Metrics */}
                      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
                        <div>
                          <div className="text-2xl font-bold text-foreground">
                            {contractData.metrics.activeContracts}
                          </div>
                          <p className="text-sm text-muted-foreground">Active Contracts</p>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">
                            {contractData.metrics.agenciesServed}
                          </div>
                          <p className="text-sm text-muted-foreground">Agencies Served</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Side - Recent Contracts Table */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Recent Contract Awards</h2>
                    <p className="text-muted-foreground">
                      Our latest contract wins demonstrating continued growth and client confidence.
                    </p>
                  </div>

                  {/* Contracts Table */}
                  <ContractsTable
                    awards={awards}
                  />

                  {/* {contractData.recentContracts.length > 8 && (
                      <div className="text-center">
                        <Button variant="outline">View All {contractData.recentContracts.length} Contracts</Button>
                      </div>
                    )} */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contract Spotlight Section */}

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <SectionTitle
                badge="Featured Contracts"
                title="Latest & Greatest Achievements"
                subtitle="Highlighting our most significant recent contract wins that demonstrate our capabilities and commitment to excellence in federal service delivery."
              />
              <ContractSpotlight contracts={spotlightContracts} />
            </div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">Performance Excellence</h2>
                <p className="text-xl text-muted-foreground">
                  Our commitment to quality is reflected in our outstanding performance metrics.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">98.5%</div>
                    <p className="text-muted-foreground">Customer Satisfaction</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">99.2%</div>
                    <p className="text-muted-foreground">On-Time Delivery</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">15+</div>
                    <p className="text-muted-foreground">Federal Agencies</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">$250M+</div>
                    <p className="text-muted-foreground">Total Contract Value</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Partner With Us?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join the federal agencies that trust The Nascence Group for exceptional service delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Link href="#contact">Start a Conversation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/capabilities">View Our Capabilities</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
