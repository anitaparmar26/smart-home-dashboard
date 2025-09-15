"use client"

import { Lock, Camera, Bell } from "lucide-react"
import { useState } from "react"
import { Switch } from "@/components/ui/switch"

export default function SecurityPage() {
  const [doorLocked, setDoorLocked] = useState(true)
  const [camerasOn, setCamerasOn] = useState(true)
  const [alarmArmed, setAlarmArmed] = useState(false)

  const events = [
    { id: 1, time: "08:32", text: "Front door locked" },
    { id: 2, time: "07:15", text: "Backyard camera detected motion" },
    { id: 3, time: "Yesterday", text: "Alarm disarmed by Jennifer" },
  ]

  return (
    <section className="rounded-2xl bg-card p-6 md:p-8 shadow-sm ring-1 ring-border">
      <h1 className="text-balance text-2xl font-semibold text-foreground">Security</h1>
      <p className="mt-2 text-muted-foreground">Cameras, sensors, and alerts management.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-background p-4 ring-1 ring-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lock className="size-5 text-primary" />
              <h3 className="font-medium text-foreground">Door Lock</h3>
            </div>
            <Switch checked={doorLocked} onCheckedChange={setDoorLocked} />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {doorLocked ? "Front door is locked." : "Front door is unlocked."}
          </p>
        </div>

        <div className="rounded-xl bg-background p-4 ring-1 ring-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Camera className="size-5 text-primary" />
              <h3 className="font-medium text-foreground">Cameras</h3>
            </div>
            <Switch checked={camerasOn} onCheckedChange={setCamerasOn} />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {camerasOn ? "All cameras recording." : "Recording paused."}
          </p>
        </div>

        <div className="rounded-xl bg-background p-4 ring-1 ring-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="size-5 text-primary" />
              <h3 className="font-medium text-foreground">Alarm</h3>
            </div>
            <Switch checked={alarmArmed} onCheckedChange={setAlarmArmed} />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{alarmArmed ? "System armed." : "System disarmed."}</p>
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-background p-4 ring-1 ring-border">
        <h3 className="mb-3 font-medium text-foreground">Recent activity</h3>
        <ul className="space-y-2">
          {events.map((e) => (
            <li key={e.id} className="flex items-center justify-between text-sm">
              <span className="text-foreground">{e.text}</span>
              <span className="text-muted-foreground">{e.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
