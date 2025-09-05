import { Sparkles, TreePine, Wrench, UserCheck, Lock, Monitor } from "lucide-react"

export const services = [
  {
    icon: Wrench,
    title: "Facilities Maintenance",
    slug: "facilities-maintenance",
    shortDescription: "Full-spectrum building and equipment support",
    description:
      "Comprehensive facilities management that keeps your operations running smoothly. Our expert technicians provide preventive maintenance, emergency repairs, and system optimization to minimize downtime and maximize efficiency.",
    features: [
      "HVAC system maintenance",
      "Electrical & plumbing services",
      "Equipment repair & replacement",
      "Construction support services",
    ],
    gradient: "from-orange-500 to-red-500",
    image: "/services/facilities-maintenance-service.png",
  },
  {
    icon: TreePine,
    title: "Grounds Maintenance",
    slug: "grounds-maintenance",
    shortDescription: "Complete landscape and exterior property care",
    description:
      "Professional grounds maintenance services that ensure your property reflects excellence and operational readiness. From seasonal landscaping to snow removal, we maintain pristine outdoor environments year-round.",
    features: [
      "Professional mowing & landscaping",
      "Irrigation system management",
      "Debris removal & cleanup",
      "Erosion & pest control",
    ],
    gradient: "from-green-500 to-emerald-500",
    image: "/services/grounds-maintenance-service.png",
  },
  {
    icon: UserCheck,
    title: "Healthcare Support",
    slug: "healthcare-support",
    shortDescription: "Certified healthcare professionals",
    description:
      "Qualified healthcare professionals who meet the highest standards of certification and compliance. Our staff provides essential support services while maintaining strict adherence to healthcare regulations and patient privacy requirements.",
    features: [
      "Licensed medical staff",
      "Compliance documentation",
      "Emergency response teams",
      "Specialized care services",
    ],
    gradient: "from-pink-500 to-rose-500",
    image: "/services/healthcare-support-service.png",
  },
  {
    icon: Monitor,
    title: "IT & Cybersecurity",
    slug: "it-cybersecurity",
    shortDescription: "Comprehensive technology and security solutions",
    description:
      "Advanced IT support and cybersecurity services designed for mission-critical environments. We ensure maximum uptime, robust security, and compliance with federal standards including FISMA, NIST, and CMMC requirements.",
    features: [
      "Managed IT services",
      "Cloud infrastructure support",
      "FISMA/NIST/CMMC compliance",
      "24/7 helpdesk support",
    ],
    gradient: "from-purple-500 to-indigo-500",
    image: "/services/it-cybersecurity-service.png",
  },
  {
    icon: Sparkles,
    title: "Janitorial Services",
    slug: "janitorial-services",
    shortDescription: "Comprehensive cleaning and disinfection solutions",
    description:
      "Our specialized janitorial services go beyond surface cleaning to create sterile, hygienic environments that protect patients and staff. We use EPA-approved disinfection protocols and hospital-grade equipment to ensure the highest standards of cleanliness.",
    features: [
      "Deep cleaning & disinfection",
      "Sustainable supply management",
      "Anti-cross-contamination protocols",
      "EPA-compliant procedures",
    ],
    gradient: "from-blue-500 to-cyan-500",
    image: "/services/janitorial-services-service.png",
  },
  {
    icon: Lock,
    title: "Security Services",
    slug: "security-services",
    shortDescription: "Professional security and safety personnel",
    description:
      "Highly trained security professionals with federal clearances and specialized expertise. Our security staff ensures comprehensive protection through access control, emergency response, and continuous monitoring protocols.",
    features: [
      "Federal clearance staff",
      "Access control management",
      "Emergency response protocols",
      "Comprehensive background checks",
    ],
    gradient: "from-slate-600 to-slate-800",
    image: "/services/security-services-service.png",
  },
]
