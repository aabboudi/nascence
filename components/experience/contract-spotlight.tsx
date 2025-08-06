"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar, MapPin, DollarSign, ExternalLink, Star, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { SpotlightContract } from "@/lib/contract-data"

interface ContractSpotlightProps {
  contracts: SpotlightContract[]
}

export function ContractSpotlight({ contracts }: ContractSpotlightProps) {
  const [selectedContract, setSelectedContract] = useState(0)

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
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  const currentContract = contracts[selectedContract]

  return (
    <div className="space-y-8">
      {/* Contract Navigation */}
      <div className="flex flex-wrap gap-4 justify-center">
        {contracts.map((contract, index) => (
          <Button
            key={contract.awardId}
            variant={selectedContract === index ? "default" : "outline"}
            onClick={() => setSelectedContract(index)}
            className="text-sm"
          >
            {contract.agency}
          </Button>
        ))}
      </div>

      {/* Featured Contract */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contract Image and Basic Info */}
        <div className="space-y-6">
          <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={currentContract.image || "/placeholder.svg"}
              alt={currentContract.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white mb-2">Featured Contract</Badge>
              <h3 className="text-white text-xl font-bold leading-tight">{currentContract.name}</h3>
            </div>
          </div>

          {/* Contract Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-2xl font-bold text-foreground">{currentContract.performanceRating}%</span>
                </div>
                <p className="text-sm text-muted-foreground">Performance Rating</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span className="text-2xl font-bold text-foreground">
                    {formatCurrency(currentContract.value).replace("$", "").replace(",000,000", "M")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Contract Value</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contract Details */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary">{currentContract.type}</Badge>
              <Badge
                variant="outline"
                className="text-green-600 border-green-600 dark:text-green-400 dark:border-green-400"
              >
                {currentContract.status.charAt(0).toUpperCase() + currentContract.status.slice(1)}
              </Badge>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">{currentContract.agency}</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">{currentContract.description}</p>

            {/* Contract Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Duration:</span>
                <span className="font-medium text-foreground">
                  {formatDate(currentContract.startDate)} - {formatDate(currentContract.endDate)}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Location:</span>
                <span className="font-medium text-foreground">{currentContract.placeOfPerformance}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <span className="font-mono text-muted-foreground">Award ID:</span>
                <span className="font-mono font-medium text-foreground">{currentContract.awardId}</span>
              </div>
            </div>

            {/* Performance Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Performance Rating</span>
                <span className="text-sm text-muted-foreground">{currentContract.performanceRating}%</span>
              </div>
              <Progress value={currentContract.performanceRating} className="h-2" />
            </div>

            <Button asChild className="w-full mb-4">
              <Link
                href={currentContract.usaSpendingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View on USASpending.gov</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Contract Highlights and Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Key Highlights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>Key Highlights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {currentContract.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Key Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Key Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {currentContract.keyAchievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
