import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface FadeUpProps {
  className?: string;
  children: React.ReactNode;
  initial?: { opacity: number; y: number };
  animate?: { opacity: number; y: number };
  exit?: { opacity: number; y: number };
  transition?: { duration: number };
  viewport?: { once: boolean };
}

export function FadeUp({
  className,
  children,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  exit,
  transition = { duration: 0.5 },
  viewport = { once: false },
}: FadeUpProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      viewport={viewport}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
