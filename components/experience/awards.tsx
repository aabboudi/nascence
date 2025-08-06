"use client"

import { MapPin, Link, ExternalLink, TrendingDown, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Contract, contractData } from "@/lib/contract-data";

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


export function ContractsTable({ awards }: { awards: Contract[] }) {
  return (

    <div>
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[120px]">Award ID</TableHead>
                <TableHead className="min-w-[200px]">Contract Name</TableHead>
                <TableHead className="min-w-[100px]">Value</TableHead>
                <TableHead className="min-w-[150px]">Location</TableHead>
                {/* <TableHead className="min-w-[100px]">Start Date</TableHead>
                <TableHead className="min-w-[100px]">End Date</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {awards.slice(0, 8).map((contract) => (
                <TableRow key={contract.awardId} className="hover:bg-muted/50">
                  <TableCell className="font-mono text-sm">
                    <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                      <Link href={contract.usaSpendingUrl} target="_blank">
                        <ExternalLink className="w-4 h-4" />
                        <span className="sr-only">View contract details</span>
                      </Link>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium text-foreground line-clamp-2">{contract.name}</div>
                      <div className="text-sm text-muted-foreground">{contract.agency}</div>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold text-green-600 dark:text-green-400">
                    {formatCurrency(contract.value)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1 text-sm">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span>{contract.placeOfPerformance}</span>
                    </div>
                  </TableCell>
                  {/* <TableCell className="text-sm">{formatDate(contract.startDate)}</TableCell>
                  <TableCell className="text-sm">{formatDate(contract.endDate)}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}

export function RevenueCard() {
  // Calculate revenue metrics
  const currentRevenue = contractData.metrics.currentYearRevenue
  const previousRevenue = contractData.metrics.previousYearRevenue
  const growthPercentage = ((currentRevenue - previousRevenue) / previousRevenue) * 100
  const isPositiveGrowth = growthPercentage > 0

  return (
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
  )
}