"use client";

import { scrollTo } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

export default function ViewWorkBtn() {
  return (
    <button onClick={() => scrollTo("work")}
      className="flex items-center gap-2 text-sm text-muted-foreground font-mono hover:text-foreground transition-colors
  group self-start sm:self-auto"
    >
      View Work
      <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
    </button>
  );
}
