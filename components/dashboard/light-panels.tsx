"use client"

import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from "recharts"

const radial = [{ name: "Intensity", value: 57, fill: "var(--brand)" }]

export function LightPanels() {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border">
        <h3 className="mb-2 text-sm font-semibold text-foreground dark:text-muted-foreground">Light Intensity</h3>
        <div className="h-44 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart data={radial} startAngle={90} endAngle={-270} innerRadius="70%" outerRadius="100%">
              <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
              {/* background prop draws the track; use themed muted surface instead of default (too dark in dark mode) */}
              <RadialBar background={{ fill: "var(--muted)" }} dataKey="value" cornerRadius={16} />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        {/* use brand helper so it follows color theme switcher */}
        <p className="mt-2 text-center text-2xl font-bold text-brand">57%</p>
      </div>

      <div className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border">
        <h3 className="mb-2 text-sm font-semibold text-foreground dark:text-muted-foreground">Light Color</h3>
        <div className="grid place-items-center">
          <div
            aria-hidden
            className="size-40 rounded-full"
            style={{
              background: "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",
              // keep inner cutout in sync with themed background
              boxShadow: "inset 0 0 0 10px var(--background)",
            }}
          />
        </div>
      </div>
    </section>
  )
}
