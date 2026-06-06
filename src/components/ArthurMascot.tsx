import { useState, useEffect } from 'react';
import { ARTHUR_TIPS } from '../data';
import { cn } from '../lib/utils';

export function ArthurMascot({ className }: { className?: string }) {
  const [tip, setTip] = useState(ARTHUR_TIPS[0]);

  useEffect(() => {
    // Pick a random tip on mount
    const randomTip = ARTHUR_TIPS[Math.floor(Math.random() * ARTHUR_TIPS.length)];
    setTip(randomTip);
  }, []);

  return (
    <div className={cn("text-center", className)}>
      <div className="relative w-32 h-32 mx-auto mb-4 border border-ink rounded-full flex items-center justify-center bg-white overflow-hidden">
        <div className="text-4xl">🐕</div>
        <div className="absolute -bottom-1 bg-ink text-white text-[13px] px-3 py-1 uppercase tracking-widest font-bold">Arthur</div>
      </div>
      <div className="bg-white border border-ink p-4 text-sm relative text-ink inline-block max-w-[320px] text-left">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-ink rotate-45"></div>
        "{tip}"
      </div>
    </div>
  );
}
