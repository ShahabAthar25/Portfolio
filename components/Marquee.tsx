export default function Marquee() {
  const MARQUEE_TEXT =
    "AVAILABLE FOR PROJECTS · OPEN TO INTERESTING PROBLEMS · AUTOMATION ENGINEER · FRONTEND DEVELOPER · ";

  return (
    <div className="overflow-hidden border-y border-border py-3">
      {/* Seamless looping array of 2 identical tracks */}
      <div className="flex w-max animate-marquee animate-[marquee_60s_linear_infinite]">
        <div className="flex whitespace-nowrap">
          {[1, 2, 3].map((i) => (
            <span key={i} className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-mono">
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
        <div className="flex whitespace-nowrap" aria-hidden="true">
          {[1, 2, 3].map((i) => (
            <span key={i} className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-mono">
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
