export default function CodeLine({
  n,
  children,
}: {
  n: number;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-start">
      <span className="w-9 text-right mr-5 select-none shrink-0 text-xs leading-7 font-mono" style={{ color: "#252525" }}>
        {n}
      </span>
      <span className="flex-1 text-sm leading-7">{children ?? " "}</span>
    </div>
  );
}
