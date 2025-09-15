"use client"

import { useState } from "react"
import { ToggleSwitch } from "@/components/ui/toggle-switch"
import { Sofa, UtensilsCrossed, BedDouble, ShowerHead, Lamp, MoreVertical, Pencil } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

function getRoomIcon(title: string) {
  const t = title.toLowerCase()
  if (t.includes("living")) return Sofa
  if (t.includes("kitchen")) return UtensilsCrossed
  if (t.includes("bed")) return BedDouble
  if (t.includes("bath")) return ShowerHead
  return Lamp
}

export function RoomCard({ title }: { title: string }) {
  const [on, setOn] = useState(true)
  const Icon = getRoomIcon(title)

  return (
    <div className="rounded-2xl bg-card p-4 shadow-sm ring-1 ring-border">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span aria-hidden className="grid size-8 place-items-center rounded-xl bg-brand text-white">
            <Icon className="size-4" />
          </span>
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        </div>

        {/* 3-dots menu */}
        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label="Open room actions"
            className="rounded-md p-1.5 hover:bg-muted focus:outline-none focus:ring-2"
          >
            <MoreVertical className="size-4 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Pencil className="mr-2 size-4" />
              Edit
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <p className="text-xs leading-5 text-muted-foreground">Light</p>
      <div className="mt-2">
        <ToggleSwitch checked={on} onCheckedChange={setOn} />
      </div>
      <div className="mt-3 text-xs text-brand">Devices▾</div>
    </div>
  )
}
