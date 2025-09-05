"use client"

import { cn } from "@/lib/utils";
import { FadeUp } from "./fade-up";
import { Badge } from "./ui/badge";

export function SectionTitle(
  { isHero, badge, title, subtitle, children }: {
    isHero?: boolean;
    badge?: string;
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
  }) {
  return (
    <div className="relative z-10">
      <FadeUp className={cn(
        "mb-12 mx-8 flex flex-col items-center justify-center space-y-4 text-center",
        isHero && "pt-32",
      )}>
        {/* <Badge
          className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm"
          variant="secondary"
        >
          <span className="text-primary mr-1">✦</span> {badge}
        </Badge> */}

        <Badge variant="outline" className="mb-4 px-4 py-2">
          {badge}
        </Badge>
        {isHero === true ? (
          <h1 className="from-foreground to-foreground/80 max-w-[600px] bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            {title}
          </h1>
        ) : (
          <h2 className="from-foreground to-foreground/80 max-w-[600px] bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            {title}
          </h2>
        )}

        <p className="text-balance text-muted-foreground max-w-[500px] md:text-lg">
          {subtitle}
        </p>

        {children && (
          <div>
            {children}
          </div>
        )}
      </FadeUp>
    </div>
  );
}
