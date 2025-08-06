import type React from "react"
import { Syringe, Building, TreePine, Trash2, HardHat, HeartPulse, Shield, CheckCircle, DollarSign, Zap, Leaf, Users, Clock, Lock, RefreshCw, Smile, Briefcase, Lightbulb, Handshake, Scale, Recycle, Truck, Wifi, Server, Headphones, Database, UserCheck, ClipboardList, Stethoscope, CalendarCheck, Wrench, Snowflake, Droplets, Mountain } from 'lucide-react'

// // Custom icons (moved from previous page.tsx)
// function Snowflake(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="2" x2="22" y1="12" y2="12" />
//       <line x1="12" x2="12" y1="2" y2="22" />
//       <path d="M20 16v-4h-4" />
//       <path d="M4 8v4h4" />
//       <path d="M16 4h4v4" />
//       <path d="M8 20h-4v-4" />
//     </svg>
//   )
// }

// function Droplets(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M7 16.3c2.8 0 5-2.24 5-5s-2.2-5-5-5c-1.3 0-2.5.56-3.4 1.5C2.56 7.5 2 8.7 2 10c0 2.8 2.2 5 5 5Z" />
//       <path d="M12.5 13h5c1.3 0 2.5-.56 3.4-1.5 1-1 1.5-2.2 1.5-3.5 0-2.8-2.2-5-5-5-1.3 0-2.5.56-3.4 1.5-.9.9-1.5 2.1-1.5 3.4 0 2.8 2.2 5 5 5Z" />
//     </svg>
//   )
// }

// function Mountain(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M8 3L4 11V16H20V11L16 3H8Z" />
//       <path d="M12 16V22" />
//       <path d="M16 16V22" />
//       <path d="M8 16V22" />
//     </svg>
//   )
// }

export interface ServiceDetail {
  id: string
  slug: string
  name: string // For the main showcase page
  shortDescription: string // For the main showcase page
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

export const servicesData: ServiceDetail[] = [
  {
    id: "janitorial-healthcare",
    slug: "janitorial-healthcare",
    name: "Janitorial Support",
    shortDescription: "Specialized cleaning and disinfection for healthcare facilities, ensuring patient safety and hygiene.",
    headline: "Ensuring Patient Safety and Hygiene Through Specialized Janitorial Support",
    overview: "In healthcare facilities, cleanliness is paramount to patient safety and infection control. Our specialized janitorial services go beyond surface cleaning to create sterile, hygienic environments that protect patients and staff.",
    features: [
      { icon: Syringe, text: "Advanced Disinfection Protocols (EPA-approved)" },
      { icon: Building, text: "Restroom Sanitation & Odor Control" },
      { icon: RefreshCw, text: "Terminal Cleaning for Operating Rooms & Patient Areas" },
      { icon: Trash2, text: "Biohazard Waste Disposal Management" },
      { icon: CheckCircle, text: "Floor Care & Maintenance (e.g., VCT, LVT, Epoxy)" },
      { icon: Shield, text: "Cross-Contamination Prevention" },
    ],
    industryAlignment: {
      title: "Healthcare Sanitation & Infection Control Standards",
      points: [
        "Adherence to CDC guidelines for environmental cleaning",
        "Compliance with OSHA bloodborne pathogen standards",
        "Strict protocols for HIPAA and patient privacy",
        "Use of hospital-grade disinfectants and equipment",
      ],
    },
    valuePropositions: [
      { icon: DollarSign, text: "Lower Infection Risk & Improved Patient Outcomes" },
      { icon: Scale, text: "Ensured Regulatory Compliance & Audit Readiness" },
      { icon: Smile, text: "Enhanced Patient & Staff Trust and Confidence" },
      { icon: Briefcase, text: "Professional & Hygienic Facility Presentation" },
    ],
    ctaText: "Schedule a Walkthrough",
    ctaLink: "#contact",
    icon: Syringe,
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: "facilities-corporate",
    slug: "facilities-corporate",
    name: "Facilities Support",
    shortDescription: "Comprehensive facilities management for corporate offices, optimizing workplace operations and efficiency.",
    headline: "Optimizing Workplace Operations for Peak Corporate Performance",
    overview: "A well-managed corporate office is crucial for productivity, employee well-being, and brand image. Our facilities support services ensure your workplace operates seamlessly, allowing your team to focus on core business objectives.",
    features: [
      { icon: Wrench, text: "Preventive & Reactive Maintenance Coordination" },
      { icon: Handshake, text: "Vendor Management & Contract Oversight" },
      { icon: Lightbulb, text: "Energy Management & Efficiency Solutions" },
      { icon: Users, text: "Space Planning & Office Reconfiguration" },
      { icon: Clock, text: "24/7 Emergency Response & Support" },
      { icon: ClipboardList, text: "Asset Management & Inventory Control" },
    ],
    industryAlignment: {
      title: "Service-Level Expectations & Business Continuity",
      points: [
        "Adherence to agreed-upon Service Level Agreements (SLAs)",
        "Integration with business continuity and disaster recovery plans",
        "Compliance with building codes and safety regulations",
        "Focus on minimizing disruption to daily operations",
      ],
    },
    valuePropositions: [
      { icon: Zap, text: "Smooth Operations & Reduced Downtime" },
      { icon: DollarSign, text: "Optimized Budget Control & Cost Savings" },
      { icon: Smile, text: "Enhanced Employee Satisfaction & Productivity" },
      { icon: Briefcase, text: "Professional & Well-Maintained Corporate Image" },
    ],
    ctaText: "Schedule a Consultation",
    ctaLink: "#contact",
    icon: Building,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: "grounds-government",
    slug: "grounds-government",
    name: "Grounds Maintenance",
    shortDescription: "Year-round grounds care for federal and municipal government campuses, emphasizing appearance, security, and sustainability.",
    headline: "Maintaining Pristine, Secure, and Sustainable Government Campuses",
    overview: "The grounds of federal and municipal government campuses reflect national pride and operational readiness. Our grounds maintenance services ensure these properties are not only aesthetically pleasing but also secure, sustainable, and compliant with federal mandates.",
    features: [
      { icon: TreePine, text: "Professional Lawn Care & Landscaping" },
      { icon: Leaf, text: "Tree & Shrub Pruning and Health Management" },
      { icon: CalendarCheck, text: "Seasonal Cleanup & Preparation" },
      { icon: Snowflake, text: "Snow & Ice Removal (24/7 Response)" },
      { icon: Droplets, text: "Irrigation System Monitoring & Optimization" },
      { icon: Mountain, text: "Erosion Control & Stormwater Management" },
    ],
    industryAlignment: {
      title: "Federal Compliance & Eco-Responsibility",
      points: [
        "Compliance with GSA and DoD grounds maintenance standards",
        "Adherence to federal environmental regulations (e.g., NEPA)",
        "Implementation of sustainable landscaping practices (e.g., IPM)",
        "Focus on native plant species and water conservation",
      ],
    },
    valuePropositions: [
      { icon: Smile, text: "Enhanced Curb Appeal & Public Perception" },
      { icon: Shield, text: "Mission-Ready & Secure Property" },
      { icon: Leaf, text: "Demonstrated Environmental Stewardship" },
      { icon: DollarSign, text: "Cost-Effective & Efficient Grounds Management" },
    ],
    ctaText: "Request a Free Site Assessment",
    ctaLink: "#contact",
    icon: TreePine,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "waste-retail",
    slug: "waste-retail",
    name: "Solid Waste Collection",
    shortDescription: "Efficient waste management and recycling services for retail shopping centers and commercial real estate.",
    headline: "Maintaining Impeccable Common Areas for Thriving Retail & Commercial Complexes",
    overview: "Cleanliness and efficient waste management are critical for the success of retail shopping centers and commercial real estate. Our solid waste collection services ensure your complex maintains a pristine appearance, enhancing tenant satisfaction and customer experience.",
    features: [
      { icon: Trash2, text: "Scheduled Trash Pickup & Disposal" },
      { icon: Recycle, text: "Comprehensive Recycling Programs" },
      { icon: Truck, text: "Bulk Item Removal & Special Hauls" },
      { icon: Database, text: "Waste Stream Management & Reporting" },
      { icon: Building, text: "Compactor & Baler Servicing" },
      { icon: Clock, text: "Flexible Pickup Schedules (Daily, Weekly, On-Demand)" },
    ],
    industryAlignment: {
      title: "Environmental Policies & Local Regulations",
      points: [
        "Compliance with local waste management ordinances",
        "Adherence to environmental protection agency guidelines",
        "Support for LEED certification requirements (waste diversion)",
        "Implementation of best practices for odor and pest control",
      ],
    },
    valuePropositions: [
      { icon: Smile, text: "Pristine Presentation & Enhanced Customer Experience" },
      { icon: Users, text: "Increased Tenant Satisfaction & Retention" },
      { icon: Leaf, text: "Improved Sustainability Metrics & Brand Image" },
      { icon: DollarSign, text: "Optimized Waste Costs & Operational Efficiency" },
    ],
    ctaText: "Get a Quote Today",
    ctaLink: "#contact",
    icon: Trash2,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "it-warehouse",
    slug: "it-warehouse",
    name: "IT Support",
    shortDescription: "Ensuring maximum uptime and robust security for industrial warehouse and logistics IT systems.",
    headline: "Ensuring Uptime and Operational Continuity for Critical Warehouse & Logistics IT",
    overview: "In industrial warehouses and logistics operations, IT systems are the backbone of efficiency. Our IT support services are designed to ensure maximum uptime, seamless data flow, and robust security, preventing costly disruptions to your supply chain.",
    features: [
      { icon: Wifi, text: "24/7 Network Monitoring & Management" },
      { icon: Headphones, text: "Responsive Help Desk Support" },
      { icon: Server, text: "Server & Infrastructure Maintenance" },
      { icon: Lock, text: "Cybersecurity & Data Protection" },
      { icon: Database, text: "Data Backup & Disaster Recovery" },
      { icon: HardHat, text: "On-Site & Remote Technical Support" },
    ],
    industryAlignment: {
      title: "Uptime & Security Requirements for Logistics",
      points: [
        "Adherence to strict uptime Service Level Agreements (SLAs)",
        "Compliance with industry data security standards (e.g., NIST)",
        "Integration with Warehouse Management Systems (WMS)",
        "Focus on operational continuity and supply chain resilience",
      ],
    },
    valuePropositions: [
      { icon: Zap, text: "Reduced Downtime & Operational Disruptions" },
      { icon: DollarSign, text: "Enhanced Cost Efficiency & ROI" },
      { icon: Shield, text: "Robust Data Security & Compliance" },
      { icon: Users, text: "Smoother Operations & Increased Productivity" },
    ],
    ctaText: "Contact IT Support Specialists",
    ctaLink: "#contact",
    icon: HardHat,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "healthcare-support-clinic",
    slug: "healthcare-support-clinic",
    name: "Health Care Support",
    shortDescription: "Non-clinical patient-focused support services for medical clinics and outpatient centers, enhancing patient experience.",
    headline: "Specialized Patient-Focused Support Services for Optimal Clinic Operations",
    overview: "Medical clinics and outpatient centers require seamless operations to deliver exceptional patient care. Our healthcare support services provide essential non-clinical assistance, allowing your medical staff to focus entirely on patient well-being.",
    features: [
      { icon: UserCheck, text: "Patient Intake & Registration Assistance" },
      { icon: CalendarCheck, text: "Appointment Scheduling & Coordination" },
      { icon: Stethoscope, text: "Non-Clinical Patient Navigation & Guidance" },
      { icon: ClipboardList, text: "Administrative & Clerical Support" },
      { icon: Syringe, text: "Medical Supply Management & Inventory" },
      { icon: Building, text: "Facility Wayfinding & Patient Flow Optimization" },
    ],
    industryAlignment: {
      title: "HIPAA & Facility Accreditation Standards",
      points: [
        "Strict adherence to HIPAA for patient privacy and data security",
        "Compliance with facility accreditation standards (e.g., Joint Commission)",
        "Training in patient-centered care and communication",
        "Protocols for maintaining a clean and safe patient environment",
      ],
    },
    valuePropositions: [
      { icon: Smile, text: "Improved Patient Experience & Satisfaction" },
      { icon: Users, text: "Allows Clinical Staff to Focus on Core Care" },
      { icon: Zap, text: "Enhanced Operational Efficiency & Workflow" },
      { icon: Shield, text: "Ensured Compliance & Reduced Administrative Burden" },
    ],
    ctaText: "Connect with Our Care Support Team",
    ctaLink: "#contact",
    icon: HeartPulse,
    gradient: "from-teal-500 to-green-500",
  },
]
