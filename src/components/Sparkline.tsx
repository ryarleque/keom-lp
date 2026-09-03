const COLOR: Record<string, string> = {
  mint: "var(--mint)",
  danger: "var(--danger)",
  info: "var(--info)",
};

/** Tiny area chart. `data` is a list of values; scaled to fit the box. */
export function Sparkline({
  data,
  tone = "mint",
  width = 116,
  height = 46,
}: {
  data: number[];
  tone?: "mint" | "danger" | "info";
  width?: number;
  height?: number;
}) {
  const color = COLOR[tone] ?? COLOR.mint;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const pad = 3;
  const stepX = (width - pad * 2) / (data.length - 1);
  const pts = data.map((v, i) => {
    const x = pad + i * stepX;
    const y = pad + (height - pad * 2) * (1 - (v - min) / span);
    return [x, y] as const;
  });
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ");
  const area = `${line} L${pts[pts.length - 1][0]} ${height} L${pts[0][0]} ${height} Z`;
  const gid = `spark-${tone}-${data.length}-${Math.round(data[0])}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.28" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gid})`} />
      <path
        d={line}
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="2.2" fill={color} />
    </svg>
  );
}
