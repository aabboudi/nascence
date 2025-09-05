"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export function CTA({
  title = "The Next Step",
  action = "Take control of your time and your future. Our team is here to provide the support you need to make it happen.",
}: {
  title?: string;
  action?: string;
}) {
  return (
    <section className="py-16 bg-muted/80 dark:bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-xl text-balance text-muted-foreground mb-8">
            {action}
          </p>
          <div className="max-w-lg mx-auto">
            <RandomLetsTalk />
          </div>
        </div>
      </div>
    </section>
  );
}

const ctaOptions = [
  "Let's Get Started",
  "Ready to Begin?",
  "Take the First Step",
  "Find Out Why",
  "See How it Works",
  "Make it Happen",
  "Start Your Story",
  "Begin Your Journey",
  "Start a Conversation",
  "Schedule a Consultation",
];

export function RandomLetsTalk() {
  const [randomCta, setRandomCta] = useState<string>("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * ctaOptions.length);
    setRandomCta(ctaOptions[randomIndex]);
  }, []);

  return (
    <Button
      asChild
      className="bg-primary text-white dark:text-black hover:bg-primary/90 w-full sm:w-auto cursor-pointer"
    >
      <Link href="/lets-talk">{randomCta || "Let's Talk"}</Link>
    </Button>
  );
}
