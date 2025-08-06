'use client';
import { useEffect, useState } from 'react';
import { TextMorph } from '@/components/motion/text-morph';
import { Badge } from '@/components/ui/badge';

export function TextMorphLoop({ texts }: { texts: string[]}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Badge variant={'secondary'} className="inline-flex items-center gap-2">
      <TextMorph>{texts[index]}</TextMorph>
    </Badge>
  );
}
