export interface Contract {
  awardId: string
  name: string
  agency: string
  type: string
  value: number
  placeOfPerformance: string
  startDate: string
  endDate: string
  usaSpendingUrl: string
  description?: string
  status: "active" | "completed" | "upcoming"
}

export interface SpotlightContract extends Contract {
  highlights: string[]
  image?: string
  performanceRating?: number
  keyAchievements: string[]
}

export const contractData = {
  metrics: {
    currentYearRevenue: 47500000, // $47.5M
    previousYearRevenue: 38200000, // $38.2M
    activeContracts: 23,
    agenciesServed: 15,
  },
  recentContracts: [
    {
      awardId: "W912DY24C0045",
      name: "Comprehensive Facilities Management Services",
      agency: "U.S. Army Corps of Engineers",
      type: "Facilities Management",
      value: 8500000,
      placeOfPerformance: "Fort Belvoir, VA",
      startDate: "2024-01-15",
      endDate: "2027-01-14",
      usaSpendingUrl: "https://www.usaspending.gov/award/CONT_AWD_W912DY24C0045_9700_-NONE-_-NONE-",
      status: "active" as const,
    },
    {
      awardId: "GS35F0119Y",
      name: "IT Infrastructure Support and Cybersecurity Services",
      agency: "General Services Administration",
      type: "Information Technology",
      value: 12300000,
      placeOfPerformance: "Washington, DC",
      startDate: "2023-10-01",
      endDate: "2028-09-30",
      usaSpendingUrl: "https://www.usaspending.gov/award/CONT_AWD_GS35F0119Y_4732_-NONE-_-NONE-",
      status: "active" as const,
    },
    {
      awardId: "DTFAWA24C00156",
      name: "Multi-Site Janitorial and Custodial Services",
      agency: "Department of Transportation",
      type: "Janitorial Services",
      value: 3200000,
      placeOfPerformance: "Baltimore, MD",
      startDate: "2024-03-01",
      endDate: "2026-02-28",
      usaSpendingUrl: "https://www.usaspending.gov/award/CONT_AWD_DTFAWA24C00156_6900_-NONE-_-NONE-",
      status: "active" as const,
    },
    {
      awardId: "140D0424C0089",
      name: "Healthcare Staffing and Support Services",
      agency: "Department of Veterans Affairs",
      type: "Healthcare Staffing",
      value: 6800000,
      placeOfPerformance: "Richmond, VA",
      startDate: "2024-02-15",
      endDate: "2026-02-14",
      usaSpendingUrl: "https://www.usaspending.gov/award/CONT_AWD_140D0424C0089_3600_-NONE-_-NONE-",
      status: "active" as const,
    },
    {
      awardId: "70CDCR24C00000045",
      name: "Environmental Services and Grounds Maintenance",
      agency: "Centers for Disease Control",
      type: "Grounds Maintenance",
      value: 2100000,
      placeOfPerformance: "Atlanta, GA",
      startDate: "2023-11-01",
      endDate: "2025-10-31",
      usaSpendingUrl: "https://www.usaspending.gov/award/CONT_AWD_70CDCR24C00000045_7523_-NONE-_-NONE-",
      status: "active" as const,
    },
    {
      awardId: "HSCG3224C00078",
      name: "Security Personnel and Access Control Services",
      agency: "Department of Homeland Security",
      type: "Security Services",
      value: 4500000,
      placeOfPerformance: "Arlington, VA",
      startDate: "2024-01-01",
      endDate: "2026-12-31",
      usaSpendingUrl: "https://www.usaspending.gov/award/CONT_AWD_HSCG3224C00078_7012_-NONE-_-NONE-",
      status: "active" as const,
    },
    {
      awardId: "AG3142C24000012",
      name: "Agricultural Facility Management and Support",
      agency: "U.S. Department of Agriculture",
      type: "Facilities Management",
      value: 1800000,
      placeOfPerformance: "College Park, MD",
      startDate: "2023-09-15",
      endDate: "2025-09-14",
      usaSpendingUrl: "https://www.usaspending.gov/award/CONT_AWD_AG3142C24000012_1200_-NONE-_-NONE-",
      status: "active" as const,
    },
    {
      awardId: "DTNH2224C00089",
      name: "Transportation Hub Cleaning and Maintenance",
      agency: "Department of Transportation",
      type: "Janitorial Services",
      value: 2700000,
      placeOfPerformance: "Reagan National Airport, VA",
      startDate: "2024-04-01",
      endDate: "2026-03-31",
      usaSpendingUrl: "https://www.usaspending.gov/award/CONT_AWD_DTNH2224C00089_6900_-NONE-_-NONE-",
      status: "active" as const,
    },
    {
      awardId: "N0018924C6789",
      name: "Naval Facility Comprehensive Support Services",
      agency: "Department of the Navy",
      type: "Facilities Management",
      value: 9200000,
      placeOfPerformance: "Norfolk, VA",
      startDate: "2023-12-01",
      endDate: "2026-11-30",
      usaSpendingUrl: "https://www.usaspending.gov/award/CONT_AWD_N0018924C6789_1700_-NONE-_-NONE-",
      status: "active" as const,
    },
    {
      awardId: "W15P7T24C3456",
      name: "Defense Logistics Agency IT Support",
      agency: "Defense Logistics Agency",
      type: "Information Technology",
      value: 5600000,
      placeOfPerformance: "Fort Belvoir, VA",
      startDate: "2024-01-30",
      endDate: "2027-01-29",
      usaSpendingUrl: "https://www.usaspending.gov/award/CONT_AWD_W15P7T24C3456_9700_-NONE-_-NONE-",
      status: "active" as const,
    },
  ] as Contract[],
}

export const spotlightContracts: SpotlightContract[] = [
  {
    awardId: "W912DY24C0045",
    name: "Comprehensive Facilities Management Services - Fort Belvoir",
    agency: "U.S. Army Corps of Engineers",
    type: "Facilities Management",
    value: 8500000,
    placeOfPerformance: "Fort Belvoir, VA",
    startDate: "2024-01-15",
    endDate: "2027-01-14",
    usaSpendingUrl: "https://www.usaspending.gov/award/CONT_AWD_W912DY24C0045_9700_-NONE-_-NONE-",
    status: "active",
    description:
      "Complete facilities management for a 250,000 sq ft military installation including HVAC maintenance, electrical systems, plumbing, and emergency response services.",
    highlights: [
      "24/7 emergency response capability",
      "LEED Gold sustainability standards",
      "Advanced building automation systems",
      "Comprehensive preventive maintenance program",
    ],
    performanceRating: 98.5,
    keyAchievements: [
      "Reduced energy consumption by 23% in first year",
      "Achieved 99.8% uptime for critical systems",
      "Implemented predictive maintenance protocols",
      "Zero safety incidents in 12 months of operation",
    ],
    image: "/placeholder.svg?height=400&width=600&text=Fort+Belvoir+Facilities",
  },
  {
    awardId: "GS35F0119Y",
    name: "Enterprise IT Infrastructure and Cybersecurity Services",
    agency: "General Services Administration",
    type: "Information Technology",
    value: 12300000,
    placeOfPerformance: "Washington, DC",
    startDate: "2023-10-01",
    endDate: "2028-09-30",
    usaSpendingUrl: "https://www.usaspending.gov/award/CONT_AWD_GS35F0119Y_4732_-NONE-_-NONE-",
    status: "active",
    description:
      "Comprehensive IT infrastructure support including cloud migration, cybersecurity implementation, and 24/7 managed services for multiple federal agencies.",
    highlights: [
      "CMMC Level 2 compliance achieved",
      "Zero-trust architecture implementation",
      "Cloud-first migration strategy",
      "Advanced threat detection and response",
    ],
    performanceRating: 97.2,
    keyAchievements: [
      "Migrated 85% of legacy systems to cloud",
      "Reduced security incidents by 67%",
      "Achieved 99.9% network uptime",
      "Completed FedRAMP authorization process",
    ],
    image: "/placeholder.svg?height=400&width=600&text=IT+Infrastructure+Services",
  },
  {
    awardId: "140D0424C0089",
    name: "Specialized Healthcare Staffing Solutions",
    agency: "Department of Veterans Affairs",
    type: "Healthcare Staffing",
    value: 6800000,
    placeOfPerformance: "Richmond, VA",
    startDate: "2024-02-15",
    endDate: "2026-02-14",
    usaSpendingUrl: "https://www.usaspending.gov/award/CONT_AWD_140D0424C0089_3600_-NONE-_-NONE-",
    status: "active",
    description:
      "Providing qualified healthcare professionals including registered nurses, licensed practical nurses, and specialized medical technicians to support veteran care services.",
    highlights: [
      "Board-certified medical professionals",
      "Rapid deployment capability",
      "Comprehensive credentialing process",
      "Specialized veteran care training",
    ],
    performanceRating: 99.1,
    keyAchievements: [
      "100% credentialing compliance maintained",
      "Average deployment time under 48 hours",
      "98.7% client satisfaction rating",
      "Zero compliance violations in 12 months",
    ],
    image: "/placeholder.svg?height=400&width=600&text=Healthcare+Staffing+Services",
  },
]
