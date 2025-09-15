"use client"

import { useState } from "react"
import { ToggleSwitch } from "@/components/ui/toggle-switch"

export function AirConditioning() {
  const [on, setOn] = useState(true)
  const level = on ? 0.66 : 0 // 66% when on, 0% when off

  return (
    <section className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Air Conditioning</h3>
          <div className="mt-2 text-3xl font-bold text-brand">{on ? "17°C" : "OFF"}</div>
          <div className="text-xs text-muted-foreground">{on ? "Celsius" : "System disabled"}</div>
        </div>
        <div className="pt-1">
          <ToggleSwitch checked={on} onCheckedChange={setOn} />
        </div>
      </div>
      <div className="relative mt-4 h-24 w-2 rounded-full bg-muted">
        <div
          className="absolute bottom-0 w-2 rounded-full bg-brand transition-[height]"
          style={{ height: `${Math.round(level * 100)}%` }}
        />
      </div>
    </section>
  )
}
