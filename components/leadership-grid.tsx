import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Award, ExternalLink, Linkedin } from "lucide-react";
import Image from "next/image";

export default function LeadershipGrid() {
  return (
    <section className="my-12 space-y-12">
      {/* CEO Spotlight */}
      {leadership
        .filter((leader) => leader.isCEO)
        .map((ceo, index) => (
          <Card
            key={ceo.name}
            className="mb-12 overflow-hidden border-primary"
          >
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="lg:col-span-1 p-8 flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <Image
                      src={ceo.image || "/placeholder.svg"}
                      alt={ceo.name}
                      className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                      height={512}
                      width={512}
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{ceo.name}</h4>
                    <p className="text-slate-700 dark:text-slate-300 font-semibold mb-4">{ceo.position}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={ceo.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Biography</h5>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{ceo.bio}</p>
                  </div>
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Message from Our CEO</h5>
                    <blockquote className="text-slate-700 dark:text-slate-300 italic text-lg leading-relaxed border-l-4 border-primary pl-4">
                      "{ceo.message}"
                    </blockquote>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href="/leadership/ceo-message">
                      Read Full Message
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

      {/* Other Leadership Team */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leadership
          .filter((leader) => !leader.isCEO)
          .map((leader, index) => (
            <Card
              key={leader.name}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-2 border-primary group-hover:border-primary transition-colors duration-300"
                    height={512}
                    width={512}
                  />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{leader.name}</h4>
                  <p className="text-slate-700 dark:text-slate-300 font-semibold text-sm mb-3">{leader.position}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect
                    </Link>
                  </Button>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{leader.bio}</p>
              </CardContent>
            </Card>
          ))}
      </div>
    </section>
  );
}


const leadership = [
  {
    name: "Tamala Roddy",
    position: "Chief Executive Officer",
    image: "/leadership/ceo-tamala-roddy.webp",
    linkedin: "https://www.linkedin.com/in/tamala-roddy-58bbb119a",
    bio: "Tamala Roddy is the CEO of Nascence Group LLC, a Minority Woman-Owned, 8(a), and HUBZone-certified business. With over seven years of experience in federal government contracting, she has led the company’s growth from a small startup into a multi-division enterprise providing janitorial, grounds maintenance, waste management, facility support, IT, and staffing services nationwide. Ms. Roddy is committed to building a business rooted in compliance, innovation, and opportunity creation, while driving scalable impact for both government and corporate clients.",
    isCEO: true,
    message:
      "At Nascence Group, our story is one of growth, resilience, and possibility. When I founded this company, I set out with a simple mission: to create opportunities through service. What began as a small, determined business has grown into a multi-division enterprise serving federal and corporate clients across the nation.",
  },
  {
    name: "Michael Kearns",
    position: "Chief Operations Officer",
    image: "/leadership/coo-michael-kearns.webp",
    linkedin: "https://www.linkedin.com/in/michael-kearns-b5b986323",
    bio: "",
    isCEO: false,
  },
  {
    name: "Taijah Smith",
    position: "Regional Operations Manager",
    image: "/leadership/rom-taijah-smith.webp",
    linkedin: "https://linkedin.com/company/nascence-group",
    bio: "",
    isCEO: false,
  },
  {
    name: "Kismet",
    position: "Human Resources Manager",
    image: "/leadership/hrm-kismet.webp",
    linkedin: "https://linkedin.com/company/nascence-group",
    bio: "",
    isCEO: false,
  },
  {
    name: "Kendall Smith",
    position: "Project Manager",
    image: "/leadership/pm-kendall-smith.webp",
    linkedin: "https://linkedin.com/company/nascence-group",
    bio: "",
    isCEO: false,
  },
  {
    name: "TaiVon Beasley",
    position: "Operations Manager",
    image: "/leadership/om-taivon-beasley.webp",
    linkedin: "https://linkedin.com/company/nascence-group",
    bio: "",
    isCEO: false,
  },
]
