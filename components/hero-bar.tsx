"use client";

import { AnimationOptions, AnimationPlaybackControls, motion, TargetAndTransition, useAnimate } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface ScrollingItemsListProps {
  items: string[];
}

export function ScrollingItemsList({ items }: ScrollingItemsListProps) {
  if (!items || items.length === 0) return null;

  const numRows = 3;
  const buttonWidthPx = 160;
  const gapPx = 16;
  const rowGapPx = 16;
  const duplicationFactor = 4;
  const baseDurationPerItem = 5;

  const itemsByRow: string[][] = Array.from({ length: numRows }, () => []);
  items.forEach((item, index) => {
    itemsByRow[index % numRows].push(item);
  });

  const createRowProps = (rowIndex: number) => {
    const rowItems = itemsByRow[rowIndex];
    if (rowItems.length === 0) return null;

    const duplicatedRowItems = Array(duplicationFactor).fill(rowItems).flat();
    const totalWidth = rowItems.length * (buttonWidthPx + gapPx);
    const duration = rowItems.length * baseDurationPerItem;

    return {
      key: `row-${rowIndex}`,
      items: duplicatedRowItems,
      animate: { x: [0, -totalWidth] },
      transition: {
        duration,
        ease: "linear" as const,
        repeat: Infinity,
      },
      style: { x: 0 },
    };
  };

  const rowsData = Array.from({ length: numRows }, (_, i) => createRowProps(i)).filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full overflow-hidden mb-8 flex flex-col py-2 -my-2"
      style={{
        gap: `${rowGapPx}px`,
        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      {rowsData.map((rowData, rowIndex) => (
        <AnimatedRow key={rowData!.key} target={rowData!.animate} options={rowData!.transition}>
          <div className="flex flex-shrink-0" style={{ gap: `${gapPx}px` }}>
            {rowData!.items.map((item, index) => (
              <motion.div
                key={`${item}-${rowData!.key}-${index}`}
                className="flex-shrink-0 min-w-[160px]"
                whileHover={{ scale: 1.02, y: -3, zIndex: 20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button
                  className={cn(
                    "flex w-full h-full items-center justify-center relative transition-colors duration-200 bg-primary/10",
                    "hover:shadow-lg px-4 py-3",
                    rowIndex % 2 === 0 ? "skew-x-[15deg]" : "skew-x-[-15deg]",
                  )}
                  variant="ghost"
                >
                  <span
                    className={cn(
                      "capitalize px-1 leading-tight",
                      rowIndex % 2 === 0 ? "skew-x-[-15deg]" : "skew-x-[15deg]",
                    )}
                  >
                    {item}
                  </span>
                </Button>
              </motion.div>
            ))}
          </div>
        </AnimatedRow>
      ))}
    </motion.div>
  );
}

interface AnimatedRowProps {
  children: React.ReactNode;
  target: TargetAndTransition;
  options: AnimationOptions;
}

function AnimatedRow({ children, target, options }: AnimatedRowProps) {
  const [scope, animate] = useAnimate();
  const controls = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    controls.current = animate(scope.current, target, options);
  }, [target, options, animate, scope]);

  return (
    <motion.div
      ref={scope}
      className="flex"
      onHoverStart={() => controls.current?.pause()}
      onHoverEnd={() => controls.current?.play()}
    >
      {children}
    </motion.div>
  );
}
