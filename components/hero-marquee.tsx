"use client";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/marquee';
import { desc } from 'drizzle-orm';
import Link from 'next/link';
import { SectionTitle } from './section-title';
import { cn } from '@/lib/utils';

const certifications = [
  {
    name: "SBA 8(a) Certified",
    desc: "yimingdothan",
    href: "https://x.com/yimingdothan/status/1923833970799608086",
    img: "/badges/sba-8a.png"
  },
  {
    name: "SBA HUBZone Certified",
    desc: "rauchg",
    href: "https://x.com/rauchg/status/1938745259204493738",
    img: "/badges/sba-hubzone.png"
  },
  {
    name: "SBA WOSB Certified",
    desc: "shadcn",
    href: "https://x.com/shadcn/status/1909619407124676701",
    img: "/badges/sba-wosb.png"
  },
  {
    name: "ISO 9001 Certified",
    desc: "Quality Management",
    href: "https://x.com/kregenrek/status/1911892242568216618",
    img: "/badges/iso-9001.png"
  },
  {
    name: "ISO 14001 Certified",
    desc: "Environmental Management",
    href: "https://x.com/theorcdev/status/1923396394452124081",
    img: "/badges/iso-14001.png"
  },
  {
    name: "OSHA Certified",
    desc: "Safety & Health",
    href: "https://x.com/nocheerleader/status/1934648830315684275",
    img: "/badges/osha.png"
  },
  {
    name: "Green Seal Certified",
    desc: "Sustainable Products",
    href: "https://x.com/JollyTanpreet/status/1926923858721808484",
    img: "/badges/greenseal.png"
  },
  {
    name: "EPA Certified",
    desc: "Environmental Protection",
    href: "https://x.com/YTCodeAntonio/status/1938314416497549430",
    img: "/badges/epa.png"
  },
]

const clients = [
  {
    name: "Department of Defense",
    desc: "DoD",
    href: "https://x.com/emirthedev/status/1919418644183843211",
  },
  {
    name: "US Air Force",
    desc: "elithrar",
    href: "https://x.com/elithrar/status/1905704716589510889",
  },
  {
    name: "US Army",
    desc: "elithrar",
    href: "https://x.com/elithrar/status/1905704716589510889",
  },
  {
    name: "US Navy",
    desc: "elithrar",
    href: "https://x.com/elithrar/status/1905704716589510889",
  },
  {
    name: "US Marine Corps",
    desc: "elithrar",
    href: "https://x.com/elithrar/status/1905704716589510889",
  },
  {
    name: "US Coast Guard",
    desc: "elithrar",
    href: "https://x.com/elithrar/status/1905704716589510889",
  },
  {
    name: "NASA",
    desc: "elithrar",
    href: "https://x.com/elithrar/status/1905704716589510889",
  },
  {
    name: "GSA",
    desc: "elithrar",
    href: "https://x.com/elithrar/status/1905704716589510889",
  },
]

const services = [
  {
    name: "Facilities Support",
    desc: "elithrar",
    href: "/services/facilities-support",
  },
  {
    name: "Grounds Maintenance",
    desc: "elithrar",
    href: "/services/grounds-maintenance",
  },
  {
    name: "Healthcare Support",
    desc: "elithrar",
    href: "/services/healthcare-support",
  },
  {
    name: "IT Support",
    desc: "elithrar",
    href: "/services/it-support",
  },
  {
    name: "Janitorial Services",
    desc: "elithrar",
    href: "/services/janitorial-services",
  },
  {
    name: "Security Support",
    desc: "elithrar",
    href: "/services/security-support",
  },
]


type MaruqeeCardProps = {
  name: string;
  desc: string;
  href: string;
  img?: string;
  rowIndex: number;
}

function TestimonialCard({ name, desc, href, img, rowIndex }: MaruqeeCardProps) {
  return (
    <Link href={href}>
      <Card className={cn(
        "w-full min-w-[180px] max-w-sm shrink-0 border-foreground/10 bg-background/50 shadow-md transition hover:scale-[1.02] hover:shadow-lg",
        rowIndex % 2 === 0 ? "skew-x-[15deg]" : "skew-x-[-15deg]",
        img && "py-4",
      )}>
        <CardContent className={ rowIndex % 2 === 0 ? "skew-x-[-15deg]" : "skew-x-[15deg]" }>
          <div className="flex items-center gap-2.5">
            {img && (<Avatar className="size-9">
              <AvatarImage className="object-contain" src={img} alt="Image" />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>)}
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
                {name}
              </figcaption>
            </div>
          </div>
          {/* <blockquote className="mt-3 text-sm text-secondary-foreground">{desc}</blockquote> */}
        </CardContent>
      </Card>
    </Link>
  );
}

export function HeroMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-1 overflow-hidden py-8">
      {/* Marquee moving left to right (default) */}
      <Marquee pauseOnHover repeat={3} className="[--duration:90s]">
        {certifications.map((review) => (
          <TestimonialCard key={review.name} rowIndex={0} {...review} />
        ))}
      </Marquee>
      {/* Marquee moving right to left (reverse) */}
      <Marquee pauseOnHover reverse repeat={3} className="[--duration:90s]">
        {clients.map((review) => (
          <TestimonialCard key={review.name} rowIndex={1} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover repeat={6} className="[--duration:60s]">
        {services.map((review) => (
          <TestimonialCard key={review.name} rowIndex={2} {...review} />
        ))}
      </Marquee>
      {/* Stylish gradient overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background/95 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background/95 to-transparent"></div>
      <div className="pointer-events-none absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background/90 to-transparent"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background/90 to-transparent"></div>
    </div>
  );
}
