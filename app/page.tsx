import { Testimonials } from "@/components/testimonials";
import { USMap } from "@/components/us-map";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollingItemsList } from "@/components/hero-bar";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="min-h-screen w-full relative">
        {/* Radial Gradient Background from Bottom */}
        <div
          className="absolute inset-0 z-0 dark:hidden"
          style={{
            background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
          }}
        />

        <div
          className="absolute inset-0 z-0 hidden dark:block"
          style={{
            background: "radial-gradient(125% 125% at 50% 90%, #1e293b 40%, #0f172a 100%)",
          }}
        />

        <section>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">The Pinnacle of Support Services</h1>
                {/* Description for a govcon firm */}
                <p className="mt-8 max-w-2xl text-pretty text-lg">Highly efficient government support services provider.</p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="px-5 text-base">
                    <Link href="#link">
                      <span className="text-nowrap">Let&apos;s Talk</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base">
                    <Link href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mt-12 flex w-full items-center justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:justify-end lg:pl-8">
                <USMap />
              </div>
              {/* <Image
                className="z-1 order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                src="https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768"
                alt="Abstract Object"
                height="4000"
                width="3000"
              /> */}
            </div>
          </div>
        </section>
      </div>
      <div>

        <ScrollingItemsList
          items={[
            "Acme Corp",
            "Globex Inc.",
            "ISO 9001",
            "CyberSecure Certified",
            "Wayne Enterprises",
            "Stark Industries",
            "SOC 2 Compliant",
          ]}
        />

      </div>
    </main>
  );
}
