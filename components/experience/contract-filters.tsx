"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building, FileText } from "lucide-react"

interface ContractFiltersProps {
  agencies: string[]
  contractTypes: string[]
  selectedAgency: string
  selectedType: string
  onFilterChange: (agency: string, type: string) => void
}

export function ContractFilters({
  agencies,
  contractTypes,
  selectedAgency,
  selectedType,
  onFilterChange,
}: ContractFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      {/* Agency Filter */}
      <div className="flex items-center space-x-2">
        <Building className="w-4 h-4 text-muted-foreground" />
        <Select value={selectedAgency} onValueChange={(value) => onFilterChange(value, selectedType)}>
          <SelectTrigger className="w-64">
            <SelectValue placeholder="All Agencies" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Agencies</SelectItem>
            {agencies.map((agency) => (
              <SelectItem key={agency} value={agency}>
                {agency}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Contract Type Filter */}
      <div className="flex items-center space-x-2">
        <FileText className="w-4 h-4 text-muted-foreground" />
        <Select value={selectedType} onValueChange={(value) => onFilterChange(selectedAgency, value)}>
          <SelectTrigger className="w-64">
            <SelectValue placeholder="All Contract Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Contract Types</SelectItem>
            {contractTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
