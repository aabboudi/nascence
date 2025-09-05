import type React from "react"

import {
  Wrench,
  Building,
  HardHat,
  ClipboardList,
  Zap,
  DollarSign,
  Shield,
  Smile,
  Leaf,
  Sprout,
  Recycle,
  TreePine,
  HeartPulse,
  Stethoscope,
  Syringe,
  ShieldCheck,
  Users,
  Laptop,
  Cloud,
  Lock,
  Server,
  BrushCleaning,
  Droplets,
  SprayCan,
  RecycleIcon,
  Eye,
  Key,
  Bell,
  Camera,
} from "lucide-react"

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

  // From services_for_slugs
  subtitle: string
  tagline: string
  description: string
  services: string[]
  ctaTitle: string
  ctaDescription: string
  solutionTitle: string
  solutionTagline: string
  solutionDescription: string
}


export const servicesData: ServiceDetail[] = [
  {
    id: "facilities-maintenance",
    slug: "facilities-maintenance",
    name: "Facilities Maintenance",
    shortDescription: "Full-spectrum building and equipment support",
    headline: "Keeping Facilities Running at Peak Performance",
    overview:
      "Comprehensive facilities management that keeps your operations running smoothly. Our expert technicians provide preventive maintenance, emergency repairs, and system optimization to minimize downtime and maximize efficiency.",
    features: [
      { icon: Wrench, text: "HVAC system maintenance" },
      { icon: Building, text: "Electrical & plumbing services" },
      { icon: HardHat, text: "Equipment repair & replacement" },
      { icon: ClipboardList, text: "Construction support services" },
    ],
    industryAlignment: {
      title: "Operational Readiness & Safety Compliance",
      points: [
        "Adherence to OSHA workplace safety standards",
        "Integration with preventive maintenance best practices",
        "Compliance with local building and fire codes",
        "Support for sustainable energy-efficient operations",
      ],
    },
    valuePropositions: [
      { icon: Zap, text: "Reduced Downtime & Increased Productivity" },
      { icon: DollarSign, text: "Optimized Maintenance Costs" },
      { icon: Shield, text: "Safety & Compliance Assurance" },
      { icon: Smile, text: "Improved Employee & Occupant Comfort" },
    ],
    ctaText: "Schedule a Facilities Assessment",
    ctaLink: "#contact",
    icon: Wrench,
    gradient: "from-orange-500 to-red-500",
    subtitle: "RELIABLE FACILITIES YOU CAN COUNT ON",
    tagline: "Expert maintenance for every corner of your operation",
    description:
      "Our facilities team delivers a complete range of services to keep your environment efficient, safe, and compliant. From HVAC systems to electrical and plumbing, we make sure your operations run without interruption.",
    services: [
      "Preventive maintenance programs",
      "Emergency repair services",
      "HVAC repair and replacement",
      "Electrical and plumbing services",
      "Building and system inspections",
    ],
    ctaTitle: "Facilities That Never Let You Down",
    ctaDescription:
      "Minimize downtime, reduce costs, and ensure safety with our proactive facilities maintenance approach.",
    solutionTitle: "FULL-SERVICE FACILITIES MANAGEMENT",
    solutionTagline: "From preventive care to emergency response",
    solutionDescription:
      "Our facilities services combine planned maintenance with rapid-response repair teams. We provide detailed reporting, compliance documentation, and system optimization tailored to your organization’s needs.",
  },
  {
    id: "grounds-maintenance",
    slug: "grounds-maintenance",
    name: "Grounds Maintenance",
    shortDescription: "Landscaping and exterior care",
    headline: "Sustainable Outdoor Care for Every Season",
    overview:
      "Professional grounds management services that keep your outdoor spaces safe, functional, and attractive. Our teams specialize in landscaping, seasonal upkeep, and environmentally responsible grounds care.",
    features: [
      { icon: Leaf, text: "Landscaping & lawn care" },
      { icon: Sprout, text: "Seasonal planting" },
      { icon: TreePine, text: "Tree & shrub maintenance" },
      { icon: Recycle, text: "Sustainable grounds care" },
    ],
    industryAlignment: {
      title: "Environmental Responsibility & Site Readiness",
      points: [
        "Compliance with EPA environmental standards",
        "Erosion control and sustainable practices",
        "ADA-compliant outdoor accessibility",
        "Support for LEED green building certification",
      ],
    },
    valuePropositions: [
      { icon: Shield, text: "Safe and accessible outdoor areas" },
      { icon: Leaf, text: "Eco-friendly sustainable practices" },
      { icon: Smile, text: "Enhanced curb appeal" },
      { icon: Zap, text: "Year-round reliability" },
    ],
    ctaText: "Request Grounds Services",
    ctaLink: "#contact",
    icon: Leaf,
    gradient: "from-green-500 to-emerald-500",
    subtitle: "SUSTAINABLE GROUNDS CARE",
    tagline: "Beautiful, safe, and functional landscapes year-round",
    description:
      "We provide full-service landscaping and exterior maintenance to create safe, appealing, and sustainable outdoor spaces.",
    services: [
      "Routine landscaping and lawn care",
      "Snow and ice removal",
      "Tree trimming and maintenance",
      "Pest and invasive species control",
      "Sustainable irrigation solutions",
    ],
    ctaTitle: "Grounds That Impress",
    ctaDescription:
      "Create safe, attractive, and environmentally responsible outdoor environments.",
    solutionTitle: "EXTERIOR FACILITIES MANAGEMENT",
    solutionTagline: "Sustainable outdoor care tailored to your needs",
    solutionDescription:
      "From seasonal upkeep to large-scale landscaping, our grounds services ensure safe, attractive, and eco-conscious outdoor environments.",
  },
  {
    id: "healthcare-support",
    slug: "healthcare-support",
    name: "Healthcare Support",
    shortDescription: "Onsite occupational and wellness solutions",
    headline: "Supporting Workforce Health & Compliance",
    overview:
      "Comprehensive health services that protect employees and support organizational readiness. We deliver occupational health, medical screenings, and emergency response solutions tailored to your workforce.",
    features: [
      { icon: HeartPulse, text: "Occupational health screenings" },
      { icon: Stethoscope, text: "Onsite medical support" },
      { icon: Syringe, text: "Immunization & testing" },
      { icon: ShieldCheck, text: "Workforce wellness programs" },
    ],
    industryAlignment: {
      title: "Workforce Safety & Regulatory Compliance",
      points: [
        "OSHA-mandated health monitoring compliance",
        "HIPAA-secure medical handling",
        "Emergency preparedness and response standards",
        "Alignment with workforce readiness policies",
      ],
    },
    valuePropositions: [
      { icon: Users, text: "Healthier, safer employees" },
      { icon: Shield, text: "Compliance with health regulations" },
      { icon: Zap, text: "Reduced absenteeism" },
      { icon: Smile, text: "Improved employee well-being" },
    ],
    ctaText: "Explore Health Programs",
    ctaLink: "#contact",
    icon: HeartPulse,
    gradient: "from-pink-500 to-rose-500",
    subtitle: "WORKFORCE HEALTH SOLUTIONS",
    tagline: "Keeping your team healthy, safe, and compliant",
    description:
      "From preventive screenings to emergency response, our health services ensure workforce safety and organizational compliance.",
    services: [
      "Pre-employment medical screening",
      "Onsite health clinics",
      "Emergency response teams",
      "Mental health and wellness programs",
      "Vaccinations and health campaigns",
    ],
    ctaTitle: "Health Programs That Protect",
    ctaDescription:
      "Safeguard employees and meet compliance requirements with our integrated health solutions.",
    solutionTitle: "OCCUPATIONAL & WELLNESS PROGRAMS",
    solutionTagline: "Supporting health, compliance, and readiness",
    solutionDescription:
      "We provide complete occupational health and wellness services designed to keep your workforce healthy, compliant, and prepared.",
  },
  {
    id: "it-cybersecurity",
    slug: "it-cybersecurity",
    name: "IT Cybersecurity",
    shortDescription: "Comprehensive technology support solutions",
    headline: "Secure & Reliable IT Services for Modern Operations",
    overview:
      "Our IT support services provide the backbone for your digital operations. From helpdesk assistance to cybersecurity and cloud solutions, we keep your systems running smoothly and securely.",
    features: [
      { icon: Laptop, text: "Helpdesk & user support" },
      { icon: Cloud, text: "Cloud infrastructure management" },
      { icon: Lock, text: "Cybersecurity solutions" },
      { icon: Server, text: "Network & server maintenance" },
    ],
    industryAlignment: {
      title: "Digital Security & Operational Resilience",
      points: [
        "NIST cybersecurity framework compliance",
        "FedRAMP-aligned cloud solutions",
        "24/7 monitoring & incident response",
        "Data privacy & HIPAA compliance support",
      ],
    },
    valuePropositions: [
      { icon: Zap, text: "Fast, reliable IT response" },
      { icon: Shield, text: "Enhanced security posture" },
      { icon: DollarSign, text: "Optimized IT costs" },
      { icon: Smile, text: "Improved user experience" },
    ],
    ctaText: "Get IT Support",
    ctaLink: "#contact",
    icon: Laptop,
    gradient: "from-blue-500 to-cyan-500",
    subtitle: "RELIABLE IT SERVICES",
    tagline: "Technology that keeps your business connected and secure",
    description:
      "We deliver IT support that ensures uptime, data protection, and secure digital transformation.",
    services: [
      "Helpdesk and user support",
      "Cybersecurity assessments",
      "Cloud migration and management",
      "Network administration",
      "Disaster recovery planning",
    ],
    ctaTitle: "Technology That Works",
    ctaDescription:
      "Strengthen your IT backbone with our reliable, secure, and cost-effective solutions.",
    solutionTitle: "COMPLETE IT SUPPORT",
    solutionTagline: "From helpdesk to cloud infrastructure",
    solutionDescription:
      "Our IT support covers the full stack of enterprise needs, with security-first solutions to keep you running.",
  },
  {
    id: "janitorial-services",
    slug: "janitorial-services",
    name: "Janitorial Services",
    shortDescription: "Comprehensive cleaning and sanitation",
    headline: "Creating Safe, Clean & Healthy Environments",
    overview:
      "Professional janitorial solutions that maintain cleanliness, hygiene, and safety. We provide daily cleaning, deep sanitization, and green cleaning programs for organizations of all sizes.",
    features: [
      { icon: BrushCleaning, text: "Daily cleaning services" },
      { icon: Droplets, text: "Sanitization programs" },
      { icon: SprayCan, text: "Specialized deep cleaning" },
      { icon: RecycleIcon, text: "Eco-friendly cleaning solutions" },
    ],
    industryAlignment: {
      title: "Health Standards & Environmental Responsibility",
      points: [
        "CDC-aligned sanitization practices",
        "Green Seal certified cleaning products",
        "EPA-approved disinfectant use",
        "Indoor air quality management",
      ],
    },
    valuePropositions: [
      { icon: Shield, text: "Health & hygiene compliance" },
      { icon: Leaf, text: "Eco-friendly cleaning" },
      { icon: Zap, text: "Consistently clean facilities" },
      { icon: Smile, text: "Improved occupant satisfaction" },
    ],
    ctaText: "Book Janitorial Services",
    ctaLink: "#contact",
    icon: BrushCleaning,
    gradient: "from-purple-500 to-indigo-500",
    subtitle: "CLEAN & SAFE ENVIRONMENTS",
    tagline: "Hygienic spaces that inspire trust and comfort",
    description:
      "Our janitorial services ensure hygienic, sustainable, and spotless facilities that meet the highest health standards.",
    services: [
      "Daily office and facility cleaning",
      "Restroom sanitation",
      "Deep cleaning and disinfection",
      "Special event cleaning",
      "Sustainable green cleaning",
    ],
    ctaTitle: "Sanitation That Protects",
    ctaDescription:
      "Ensure the health, comfort, and confidence of all facility occupants with our professional cleaning solutions.",
    solutionTitle: "FULL-SERVICE JANITORIAL PROGRAMS",
    solutionTagline: "From daily upkeep to specialized sanitation",
    solutionDescription:
      "We provide comprehensive janitorial services with flexible scheduling, eco-friendly products, and adherence to health guidelines.",
  },
  {
    id: "security-services",
    slug: "security-services",
    name: "Security Services",
    shortDescription: "Comprehensive safety and asset protection",
    headline: "Protecting People, Property & Assets",
    overview:
      "Security services that combine trained personnel, modern technology, and proactive monitoring to safeguard your operations. We provide on-site, mobile, and digital security solutions tailored to your risks.",
    features: [
      { icon: Eye, text: "24/7 monitoring" },
      { icon: Key, text: "Access control systems" },
      { icon: Bell, text: "Alarm & incident response" },
      { icon: Camera, text: "Surveillance operations" },
    ],
    industryAlignment: {
      title: "Safety, Compliance & Risk Management",
      points: [
        "Compliance with DHS and local security standards",
        "Trained and licensed security personnel",
        "Integration with physical and digital security",
        "Incident reporting and risk assessments",
      ],
    },
    valuePropositions: [
      { icon: Shield, text: "24/7 safety assurance" },
      { icon: Zap, text: "Fast incident response" },
      { icon: Users, text: "Professional trained staff" },
      { icon: DollarSign, text: "Reduced security risks" },
    ],
    ctaText: "Request Security Assessment",
    ctaLink: "#contact",
    icon: Shield,
    gradient: "from-gray-700 to-black",
    subtitle: "SECURITY YOU CAN TRUST",
    tagline: "Proactive protection for what matters most",
    description:
      "We provide integrated security solutions combining personnel, technology, and compliance with industry standards.",
    services: [
      "Onsite security guards",
      "Mobile patrols",
      "Video monitoring & surveillance",
      "Access control system management",
      "Emergency response coordination",
    ],
    ctaTitle: "Security Without Compromise",
    ctaDescription:
      "Protect your people, property, and reputation with our professional security services.",
    solutionTitle: "COMPLETE SECURITY SOLUTIONS",
    solutionTagline: "From physical to digital protection",
    solutionDescription:
      "Our security services integrate trained personnel, advanced technology, and compliance practices to provide complete protection.",
  },
]
