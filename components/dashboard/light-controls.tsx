"use client"
import { useState, useMemo } from "react"

export function LightControls() {
  const [intensity, setIntensity] = useState(57)
  const trackBg = useMemo(
    () => `linear-gradient(hsl(var(--brand)), hsl(var(--brand))) 0/ ${intensity}% 100% no-repeat, hsl(var(--muted))`,
    [intensity],
  )

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-border bg-card p-4">
        <h3 className="text-sm font-semibold text-foreground dark:text-muted-foreground">Light Intensity</h3>
        <div className="mt-4">
          <div className="text-5xl font-bold text-foreground">{intensity}%</div>
          <div className="mt-4">
            <input
              type="range"
              min={0}
              max={100}
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="themed-range"
              style={{ background: trackBg }}
              aria-label="Light intensity"
            />
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-4">
        <h3 className="text-sm font-semibold text-foreground dark:text-muted-foreground">Light Color</h3>
        <div
          className="mt-4 h-40 w-full rounded-lg"
          style={{ background: "linear-gradient(90deg, red, orange, yellow, lime, aqua, blue, magenta)" }}
        />
      </div>
    </div>
  )
}
