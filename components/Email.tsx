"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function Email() {
const [copied, setCopied] = useState(false);

const copyEmail = () => {
navigator.clipboard.writeText("raishahabathar@gmail.com");
setCopied(true);
setTimeout(() => setCopied(false), 2200);
};

return (
<button onClick={copyEmail}
  className="group flex items-center gap-3 text-left hover:text-accent transition-colors duration-150 font-display"
  style={{ fontSize: "clamp(1rem, 1.8vw, 1.35rem)" , fontWeight: 600 }}>
  raishahabathar@gmail.com
  <span
    className="flex items-center gap-1.5 text-xs font-normal text-foreground group-hover:text-accent transition-colors">
    {copied ? (
    <>
      <Check className="w-3.5 h-3.5 text-accent" />
      <span className="font-mono">Copied!</span>
    </>
    ) : (
    <>
      <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono">
        Copy
      </span>
    </>
    )}
  </span>
</button>
);
}
