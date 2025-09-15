"use client"

import type React from "react"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Laptop, Thermometer, Lightbulb, Refrigerator } from "lucide-react"

type Device = {
  id: number
  name: string
  room: string
  icon: React.ComponentType<{ className?: string }>
  on: boolean
}

const initial: Device[] = [
  { id: 1, name: "Living Room Light", room: "Living Room", icon: Lightbulb, on: true },
  { id: 2, name: "Kitchen Fridge", room: "Kitchen", icon: Refrigerator, on: true },
  { id: 3, name: "Desktop PC", room: "Studio", icon: Laptop, on: false },
  { id: 4, name: "Air Conditioning", room: "Bedroom", icon: Thermometer, on: true },
]

export default function DevicesPage() {
  const [devices, setDevices] = useState<Device[]>(initial)

  return (
    <section className="rounded-2xl bg-card p-6 md:p-8 shadow-sm ring-1 ring-border">
      <h1 className="text-balance text-2xl font-semibold text-foreground">Devices</h1>
      <p className="mt-2 text-muted-foreground">All connected devices.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {devices.map((d) => (
          <div key={d.id} className="rounded-xl bg-background p-4 ring-1 ring-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <d.icon className={`size-5 ${d.on ? "text-primary" : "text-muted-foreground"}`} />
                <div>
                  <p className="font-medium text-foreground">{d.name}</p>
                  <p className="text-xs text-muted-foreground">{d.room}</p>
                </div>
              </div>
              <Switch
                checked={d.on}
                onCheckedChange={(v) => setDevices((prev) => prev.map((x) => (x.id === d.id ? { ...x, on: v } : x)))}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
