export interface FAQ {
  id: string
  question: string
  answer: string
  tags: string[]
  category: string
}

export const faqData: FAQ[] = [
  {
    id: "1",
    question: "What certifications does The Nascence Group hold?",
    answer:
      "The Nascence Group holds several key certifications including Minority Woman-Owned Small Business (MWOSB), 8(a) Business Development Program certification, HubZone certification, Economically Disadvantaged Woman-Owned Small Business (EDWOSB), ISO-9001/14001 for quality and environmental management, EPA certification for environmental compliance, OSHA compliance certification, and Green Seal certification for sustainable practices.",
    tags: ["certifications", "8(a)", "MWOSB"],
    category: "Certifications & Compliance",
  },
  {
    id: "2",
    question: "How do I get started with The Nascence Group's services?",
    answer:
    "Getting started is simple with our three-step process: 1) Schedule a discovery call where we discuss your specific needs, compliance requirements, and operational goals. 2) Our certified professionals are deployed and integrate seamlessly with your existing operations. 3) Your dedicated account manager ensures continuous quality assurance and responsive support. You can contact us through our website, phone, or email to begin the process.",
    tags: ["getting started", "process", "consultation", "onboarding"],
    category: "Certifications & Compliance",
    // category: "Getting Started",
  },
  {
    id: "21",
    question: "Why did The Nascence Group rebrand and redesign the website?",
    answer:
    "Our rebrand reflects our evolution and growth as a leading federal contractor. The new website features a modern, professional design that better showcases our capabilities, includes enhanced functionality like our FAQ section and industry blog, and provides an improved user experience across all devices. This rebrand reinforces our commitment to excellence and innovation in serving our federal and commercial clients.",
    tags: ["rebrand", "website", "redesign", "modern", "user experience", "innovation"],
    category: "Certifications & Compliance",
    // category: "Company Overview",
  },
  {
    id: "22",
    question: "What's new in the rebranded Nascence Group website?",
    answer:
      "Our new website includes several exciting features: a comprehensive FAQ section for quick answers, an industry insights blog feed with expert articles, detailed service pages tailored to specific industries, an interactive experiences page showcasing our contract performance, theme customization options, improved mobile responsiveness, and enhanced accessibility. We've also streamlined navigation and improved the overall user experience.",
    tags: ["new features", "FAQ", "blog", "services", "experiences", "mobile", "accessibility"],
    category: "Website Features",
  },
  {
    id: "3",
    question: "What types of federal agencies do you work with?",
    answer:
      "We work with a wide range of federal agencies including the Department of Defense (DoD), Department of Transportation (DOT), Department of Interior (DOI), Department of Commerce (DOC), U.S. Army Corps of Engineers (USACE), U.S. Department of Agriculture (USDA), Federal Aviation Administration (FAA), Department of Veterans Affairs, Department of Homeland Security, Centers for Disease Control, and many others.",
    tags: ["federal agencies", "DoD", "DOT", "DOI", "USACE", "USDA", "FAA", "VA", "DHS", "CDC"],
    category: "Federal Contracting",
  },
  {
    id: "4",
    question: "Do you provide 24/7 emergency services?",
    answer:
      "Yes, we provide 24/7 emergency response services for critical situations. This includes emergency facilities maintenance, IT support, security response, and other urgent operational needs. Our emergency response protocols ensure rapid deployment and resolution of critical issues to minimize downtime and maintain operational continuity.",
    tags: ["24/7", "emergency", "response", "support", "critical"],
    category: "Service Delivery",
  },
  {
    id: "5",
    question: "What is your approach to cybersecurity and data protection?",
    answer:
      "We take cybersecurity very seriously and maintain CMMC Level 2 compliance for Department of Defense contracts. Our approach includes implementing zero-trust architecture, advanced threat detection and response systems, regular security assessments, employee training programs, and strict data handling protocols. We also maintain compliance with NIST cybersecurity frameworks and other federal security standards.",
    tags: ["cybersecurity", "CMMC", "data protection", "zero-trust", "NIST", "security"],
    category: "Cybersecurity",
  },
  {
    id: "6",
    question: "How do you ensure quality control across all services?",
    answer:
      "Our quality control process includes regular performance inspections, photographic documentation, performance scorecards, corrective action procedures, and continuous improvement processes. We maintain detailed reporting requirements including monthly performance reports, service delivery metrics, and customer satisfaction tracking. All services are delivered according to agreed-upon Service Level Agreements (SLAs).",
    tags: ["quality control", "SLA", "performance", "inspections", "reporting"],
    category: "Quality Assurance",
  },
  {
    id: "7",
    question: "What sustainable practices do you implement?",
    answer:
      "We implement comprehensive sustainable practices including the use of EPA-approved green cleaning products, energy-efficient equipment and procedures, water conservation measures, comprehensive recycling programs, native plant landscaping, integrated pest management (IPM), and sustainable supply chain management. We support LEED certification requirements and help clients achieve their environmental goals.",
    tags: ["sustainability", "green cleaning", "EPA", "LEED", "recycling", "IPM", "environmental"],
    category: "Sustainability",
  },
  {
    id: "8",
    question: "How do you handle security clearance requirements?",
    answer:
      "We maintain a pipeline of personnel with various levels of security clearances and can assist with the clearance process for new hires. Our team includes individuals with Secret, Top Secret, and specialized clearances as required by different federal contracts. We also have established procedures for working in secure environments and handling classified information when necessary.",
    tags: ["security clearance", "classified", "Secret", "Top Secret", "federal"],
    category: "Security Clearances",
  },
  {
    id: "9",
    question: "What is your pricing structure?",
    answer:
      "Our pricing is competitive and tailored to each client's specific needs and requirements. We offer various pricing models including fixed-price contracts, time and materials, and performance-based contracts. Pricing factors include scope of work, location, duration, compliance requirements, and service level agreements. We provide detailed cost breakdowns and work within your budget constraints.",
    tags: ["pricing", "cost", "budget", "contracts", "competitive"],
    category: "Pricing & Contracts",
  },
  {
    id: "10",
    question: "How do you ensure HIPAA compliance in healthcare settings?",
    answer:
      "In healthcare environments, we strictly adhere to HIPAA regulations through comprehensive staff training, signed confidentiality agreements, limited access protocols, secure handling of patient information, regular compliance audits, and incident reporting procedures. All healthcare support staff receive specialized training in patient privacy and data security requirements.",
    tags: ["HIPAA", "healthcare", "privacy", "compliance", "patient data", "training"],
    category: "Healthcare Compliance",
  },
  {
    id: "11",
    question: "What geographic areas do you serve?",
    answer:
      "We provide services nationwide with primary offices in Arlington, TX (headquarters) and Baltimore, MD. We have the capability to deploy teams across the United States for federal contracts and can establish local presence as needed for long-term contracts. Our geographic flexibility allows us to support clients wherever they need our services.",
    tags: ["geographic", "nationwide", "Arlington", "Baltimore", "deployment", "locations"],
    category: "Service Areas",
  },
  {
    id: "12",
    question: "How do you handle staff training and certifications?",
    answer:
      "We invest heavily in staff training and maintain current certifications relevant to each service area. This includes ongoing professional development, industry-specific training, safety certifications, compliance training, and specialized skill development. We track certification renewals and ensure all staff meet or exceed industry standards and client requirements.",
    tags: ["training", "certifications", "professional development", "safety", "compliance"],
    category: "Staff & Training",
  },
  {
    id: "13",
    question: "What is your approach to environmental compliance?",
    answer:
      "We maintain strict environmental compliance through adherence to EPA regulations, state and local environmental laws, proper waste disposal procedures, use of environmentally friendly products and practices, regular environmental impact assessments, and implementation of sustainable operational procedures. We help clients meet their environmental goals and regulatory requirements.",
    tags: ["environmental compliance", "EPA", "waste disposal", "regulations", "sustainable"],
    category: "Environmental Compliance",
  },
  {
    id: "14",
    question: "How do you measure customer satisfaction?",
    answer:
      "We measure customer satisfaction through regular surveys, performance scorecards, direct feedback sessions, key performance indicator (KPI) tracking, and formal review meetings. We maintain a customer satisfaction rating of 98.5% and use feedback to continuously improve our services. Client feedback is incorporated into our quality improvement processes.",
    tags: ["customer satisfaction", "surveys", "KPI", "feedback", "performance"],
    category: "Customer Service",
  },
  {
    id: "15",
    question: "What happens if there's a service issue or complaint?",
    answer:
      "We have a structured process for handling service issues: immediate acknowledgment of the concern, rapid investigation and assessment, corrective action implementation, follow-up to ensure resolution, and process improvement to prevent recurrence. We maintain a 24-hour response guarantee for all service issues and complaints.",
    tags: ["service issues", "complaints", "resolution", "corrective action", "response time"],
    category: "Issue Resolution",
  },
  {
    id: "16",
    question: "Do you provide services to commercial clients as well as federal?",
    answer:
      "Yes, we serve both federal and commercial clients. Our commercial services include corporate office facilities management, retail and commercial real estate support, healthcare facility services, industrial and warehouse support, and other specialized commercial applications. We adapt our federal-grade standards and processes to meet commercial client needs.",
    tags: ["commercial", "corporate", "retail", "healthcare", "industrial", "federal"],
    category: "Client Types",
  },
  {
    id: "17",
    question: "How do you ensure business continuity during emergencies?",
    answer:
      "Our business continuity plan includes backup staffing protocols, emergency response procedures, alternative service delivery methods, communication plans, and coordination with client emergency procedures. We maintain emergency supplies, backup equipment, and established relationships with emergency service providers to ensure uninterrupted service delivery.",
    tags: ["business continuity", "emergency planning", "backup", "disaster recovery"],
    category: "Emergency Preparedness",
  },
  {
    id: "18",
    question: "What technology do you use to manage operations?",
    answer:
      "We utilize advanced technology including workforce management systems, real-time monitoring and reporting platforms, mobile applications for field staff, GPS tracking for equipment and vehicles, digital documentation systems, and integrated communication tools. This technology enables efficient operations, real-time visibility, and enhanced service delivery.",
    tags: ["technology", "workforce management", "monitoring", "mobile apps", "GPS", "digital"],
    category: "Technology",
  },
]

export const faqCategories = Array.from(new Set(faqData.map((faq) => faq.category)))
export const allFaqTags = Array.from(new Set(faqData.flatMap((faq) => faq.tags)))


export const faqs = [
  {
    question: "What is The Nascence Group?",
    answer: "The Nascence Group is a government contracting company that provides a wide range of support services, including facilities maintenance, groundskeeping, and information technology. We are committed to delivering exceptional solutions to our government clients.",
  },
  {
    question: "What is your primary mission?",
    answer: "Our mission is to provide exceptional services that enhance the efficiency, security, and scalability of our clients' operations. We are dedicated to delivering innovative, cost-effective solutions while upholding the highest standards of quality and integrity.",
  },
  {
    question: "Where is The Nascence Group located?",
    answer: "The Nascence Group is headquartered in Arlington, Texas, in the Dallas/Fort Worth area. However, our services extend across all 50 states, the District of Columbia, Puerto Rico, and Guam, supporting over 100 clients nationwide.",
  },
  {
    question: "How long has The Nascence Group been in business?",
    answer: "The company was founded in July 2017. Since then, we have been delivering high-quality services and building strong partnerships with various government agencies.",
  },
  {
    question: "What makes The Nascence Group different from other contractors?",
    answer: "We pride ourselves on a client-centric approach, offering personalized solutions that exceed expectations. Our commitment to open communication, responsiveness, and transparency ensures a supportive partnership throughout every project.",
  },
  {
    question: "What types of services do you offer?",
    answer: `We offer a broad portfolio of support services. Our core offerings include:
- Facilities Support: Janitorial, custodial, and cleaning services.
- Grounds Maintenance: Landscaping, mowing, tree removal, and snow/ice removal.
- Waste Management: Solid waste collection and hazardous waste (HAZMAT) disposal.
- Information Technology (IT): IT support, computer systems design, and facilities management.
- Operations & Maintenance: General operations support and facility maintenance.`,
  },
  {
    question: "Can you provide examples of your services for specific clients?",
    answer: "Yes. For example, we have provided grounds maintenance services for the Department of the Interior's Bureau of Land Management and routine custodial services for the Department of the Army.",
  },
  {
    question: "Are your services scalable?",
    answer: "Absolutely. We have a flexible and scalable approach that allows our solutions to grow and adapt to the evolving requirements of our clients, whether a small project or a large-scale, nationwide operation.",
  },
  {
    question: "Do you provide staffing services?",
    answer: "Yes, we offer staffing services to assist businesses with their temporary help needs, providing reliable and vetted team members who are a great fit for your business culture and operational requirements.",
  },
  {
    question: "What is your approach to service delivery and quality?",
    answer: "We use a data-driven approach to ensure quality and efficiency. We are also committed to continuous improvement, always seeking new ways to enhance the client experience and strengthen our partnerships.",
  },
  {
    question: "What certifications does The Nascence Group hold?",
    answer: "We are a certified 8(a), HUBZone, and Economically Disadvantaged Woman-Owned Small Business (EDWOSB). These certifications provide our clients with strategic advantages in meeting their small business contracting goals.",
  },
  {
    question: "What is an 8(a) certification, and how does it benefit a government agency?",
    answer: "The 8(a) Business Development Program is a U.S. Small Business Administration (SBA) program designed to help small, disadvantaged businesses compete in the marketplace. As an 8(a) firm, we can be awarded sole-source contracts of up to $4.5 million, significantly streamlining the procurement process for agencies.",
  },
  {
    question: "What does being a HUBZone-certified firm mean?",
    answer: "A HUBZone (Historically Underutilized Business Zone) certification signifies that our company is located in and primarily employs residents of a HUBZone. This certification helps agencies meet their small business contracting goals and supports economic development in distressed communities.",
  },
  {
    question: "How does your EDWOSB certification help government agencies?",
    answer: "Our Economically Disadvantaged Woman-Owned Small Business (EDWOSB) status allows agencies to award set-aside contracts specifically for EDWOSB firms, helping them meet their mandated contracting goals for women-owned businesses.",
  },
  {
    question: "What type of contract vehicles do you use?",
    answer: "We primarily utilize sole-source contracting capabilities for projects up to $4.5 million due to our 8(a) certification. We also compete for and are awarded contracts through various competitive bidding processes.",
  },
  {
    question: "Which government agencies have you worked with?",
    answer: "We are proud to have served a diverse range of clients, including the Department of the Army, the U.S. Army Corps of Engineers (USACE), the U.S. Air Force, the U.S. Department of Agriculture (USDA), and the Department of the Interior (DOI).",
  },
  {
    question: "What is your process for starting a new project?",
    answer: "The process begins with a consultation to understand your specific business requirements. Our team works with you to gain a full understanding of your needs before deploying our vetted team members to provide the best-fit solution.",
  },
  {
    question: "How do you ensure client satisfaction?",
    answer: "We measure our success by the positive experiences we create for our clients. By prioritizing open communication, responsiveness, and transparency, we ensure our clients feel supported and confident in our partnership at every stage of a project.",
  },
  {
    question: "How can a potential client get in touch with you?",
    answer: "Prospective clients can contact us through our website. We encourage scheduling a call to discuss your business needs with our team of experts.",
  },
  {
    question: "Can partnering with The Nascence Group help a government agency scale its operations faster?",
    answer: "Yes. By outsourcing services to us, agencies can meet growing demands without the overhead associated with hiring and training new staff. This allows you to scale faster and focus on your core mission while we handle the support services.",
  },
];
