import Link from "next/link";
import { Button } from "./ui/button";
import { USMap } from "./us-map";
import { RandomLetsTalk } from "./cta";

export default function HeroSection() {
  return (
    <section>
      <div className="pb-24 pt-12 md:pb-32 lg:py-32">
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center items-center px-6 lg:block">
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
            <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">The Pinnacle of Support Services</h1>
            {/* Description for a govcon firm */}
            <p className="mt-8 max-w-2xl text-pretty text-lg">Highly efficient government support services provider.</p>

            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
              <RandomLetsTalk />
              <Button
                key={2}
                asChild
                size="lg"
                variant="ghost"
                className="px-5 text-base">
                <Link href="/services">
                  <span className="text-nowrap">Browse</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-12 flex w-full max-w-xl min-h-[30vh] items-center justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:justify-end lg:pl-8">
            <USMap />
          </div>
        </div>
      </div>
    </section>
  )
}
