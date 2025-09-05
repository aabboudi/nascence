import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export default function CredentialsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
      {certifications.map((cert, index) => (
        <Card
          key={cert.title}
          className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
          style={{
            animationDelay: `${index * 100}ms`,
            transitionDelay: `${index * 100}ms`,
          }}
        >
          <CardContent className="p-6 text-center">
            <div
              className="w-32 h-32 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden"
            >
              <Image
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain"
                height={100}
                width={100}
              />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {cert.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-white mb-3 leading-relaxed">{cert.description}</p>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-300">
              <p className="text-xs text-slate-500 dark:text-slate-300 font-medium">{cert.compliance}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

const certifications = [
  {
    image: "/badges/sba-wosb.png",
    title: "Minority Woman-Owned",
    description: "Certified small disadvantaged business enterprise",
    compliance: "SBA verified and maintained",
    color: "from-purple-500 to-pink-500",
  },
  {
    image: "/badges/sba-8a.png",
    title: "8(a) Certified",
    description: "SBA 8(a) Business Development Program participant",
    compliance: "Federal contracting advantages",
    color: "from-blue-500 to-indigo-500",
  },
  {
    image: "/badges/sba-hubzone.png",
    title: "HubZone",
    description: "Historically Underutilized Business Zone certified",
    compliance: "Set-aside contract eligibility",
    color: "from-green-500 to-emerald-500",
  },
  {
    image: "/badges/iso-9001.png",
    title: "ISO-9001",
    description: "Quality Management System",
    compliance: "International standards compliance",
    color: "from-cyan-500 to-blue-500",
  },
  {
    image: "/badges/iso-14001.png",
    title: "ISO-14001",
    description: "Environmental Management System",
    compliance: "International standards compliance",
    color: "from-cyan-500 to-blue-500",
  },
  {
    image: "/badges/epa.png",
    title: "EPA Certified",
    description: "Environmental Protection Agency compliance",
    compliance: "Green cleaning and sustainability",
    color: "from-green-600 to-teal-600",
  },
  {
    image: "/badges/osha.png",
    title: "OSHA Compliant",
    description: "Occupational Safety and Health Administration",
    compliance: "Workplace safety standards",
    color: "from-red-500 to-pink-500",
  },
  {
    image: "/badges/greenseal.png",
    title: "Green Seal",
    description: "Environmental sustainability certification",
    compliance: "Eco-friendly products and practices",
    color: "from-emerald-500 to-green-600",
  },
]