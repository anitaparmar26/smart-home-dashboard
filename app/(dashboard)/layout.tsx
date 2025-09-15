import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto max-w-[1280px] px-4 py-6">
        <div className="rounded-3xl bg-card shadow-sm ring-1 ring-border">
          <div className="flex">
            <Sidebar />
            <main className="flex-1 rounded-r-3xl bg-muted p-5 md:p-7">
              <Topbar />
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
