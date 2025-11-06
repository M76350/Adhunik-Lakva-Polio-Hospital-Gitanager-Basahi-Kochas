import React from "react";

type CubeColor = {
  base: string; // main front face color
  top: string;  // lighter top face color
  side: string; // darker side face color
};

type CubeGridProps = {
  rows?: number;
  cols?: number;
  colors?: CubeColor[]; // optional custom palette to cycle through
  className?: string;
};

const DEFAULT_COLORS: CubeColor[] = [
  { base: "#ff3e9e", top: "#ff7ac8", side: "#d31677" }, // pink
  { base: "#38bdf8", top: "#7dd3fc", side: "#0891b2" }, // sky
  { base: "#34d399", top: "#6ee7b7", side: "#059669" }, // green
  { base: "#f59e0b", top: "#fbbf24", side: "#b45309" }, // amber
  { base: "#a78bfa", top: "#c4b5fd", side: "#7c3aed" }, // violet
  { base: "#f472b6", top: "#f9a8d4", side: "#db2777" }, // rose
  { base: "#22d3ee", top: "#67e8f9", side: "#0ea5b6" }, // cyan
  { base: "#f97316", top: "#fdba74", side: "#c2410c" }, // orange
];

export default function CubeGrid({
  rows = 5,
  cols = 5,
  colors = DEFAULT_COLORS,
  className = "",
}: CubeGridProps) {
  const cells = Array.from({ length: rows * cols });

  return (
    <div className={`iso-grid ${className}`} style={{
      // allow responsive wrapping controlled by CSS
    }}>
      {cells.map((_, i) => {
        const palette = colors[i % colors.length];
        const style: React.CSSProperties = {
          // expose colors to CSS via variables for gradients and glow
          ["--cube-base" as any]: palette.base,
          ["--cube-top" as any]: palette.top,
          ["--cube-side" as any]: palette.side,
        };
        return <div key={i} className="iso-cube group" style={style} aria-hidden="true" />;
      })}
    </div>
  );
}


