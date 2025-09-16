"use client"

import { Bell, Search, Settings, User, Menu } from "lucide-react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ColorThemePicker } from "@/components/color-theme"

interface TopbarProps {
  onMenuClick?: () => void
}

export function Topbar({ onMenuClick }: TopbarProps) {
  const [q, setQ] = useState("")

  return (
    <header className="lg:-mx-7 sticky top-0 z-30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border mb-6 rounded-xl lg:rounded-none">
      <div className="h-16 px-4 md:px-7  flex items-center justify-between gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden rounded-full p-2 hover:bg-muted focus:outline-none focus:ring-2"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>

        {/* Search */}
        <div className="flex-1 max-w-xl">
          <label className="relative block">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Search className="size-4" />
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search rooms, devices, or users..."
              className="w-full rounded-full border bg-background pl-9 pr-3 py-2 text-sm"
              aria-label="Search"
            />
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger className="relative rounded-full p-2 hover:bg-muted focus:outline-none focus:ring-2">
              <Bell className="size-5" aria-hidden />
              <span className="sr-only">Open notifications</span>
              <span className="absolute right-1 top-1 inline-flex items-center justify-center text-[10px] bg-red-500 text-white rounded-full h-4 min-w-4 px-1">
                3
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Washer cycle completed</DropdownMenuItem>
              <DropdownMenuItem>Front door locked</DropdownMenuItem>
              <DropdownMenuItem>HVAC filter reminder</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-muted-foreground">View all</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Settings */}
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full p-2 hover:bg-muted focus:outline-none focus:ring-2">
              <Settings className="size-5" aria-hidden />
              <span className="sr-only">Open settings</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <button className="w-full text-left">Manage users</button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <button className="w-full text-left">Network</button>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <div className="px-2 py-1.5">
                <ThemeToggle />
              </div>
              {/* Brand color picker */}
              <div className="px-2 pb-2">
                <ColorThemePicker />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full p-1.5 hover:bg-muted focus:outline-none focus:ring-2">
              <Avatar className="size-8">
                <AvatarFallback>JR</AvatarFallback>
              </Avatar>
              <span className="sr-only">Open user menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="flex items-center gap-2">
                <User className="size-4" />
                Signed in as Jennifer
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a href="/profile">Profile</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/devices">My devices</a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
