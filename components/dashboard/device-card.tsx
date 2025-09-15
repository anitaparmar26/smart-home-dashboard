"use client"

import { ToggleSwitch } from "@/components/ui/toggle-switch"
import { useState } from "react"
import { Monitor, Snowflake, Waves, Wind } from "lucide-react"

type Props = {
  title: string
  icon?: "pc" | "fridge" | "washer" | "ac"
}

const IconMap = {
  pc: Monitor,
  fridge: Snowflake,
  washer: Waves,
  ac: Wind,
}

export function DeviceCard({ title, icon = "pc" }: Props) {
  const [on, setOn] = useState(false)
  const Icon = IconMap[icon]
  return (
    <div className="rounded-2xl bg-card p-4 shadow-sm ring-1 ring-border">
      <div className="mb-2 flex items-center justify-between">
        <h4 className="text-xs font-semibold text-foreground">{title}</h4>
        <span className="text-[10px] text-muted-foreground">{on ? "ON" : "OFF"}</span>
      </div>
      <div className="flex items-center justify-between">
        <Icon className="size-6 text-brand dark:text-white transition-colors" />
        <ToggleSwitch checked={on} onCheckedChange={setOn} />
      </div>
    </div>
  )
}
