"use client"

import { useEffect, useState } from "react"

const BRANDS = [
  { key: "purple", label: "Purple", color: "oklch(0.61 0.24 300)" },
  { key: "blue", label: "Blue", color: "oklch(0.65 0.17 240)" },
  { key: "teal", label: "Teal", color: "oklch(0.7 0.12 180)" },
  { key: "orange", label: "Orange", color: "oklch(0.73 0.19 60)" },
  { key: "pink", label: "Pink", color: "oklch(0.71 0.28 360)" },
] as const

export function ColorThemePicker() {
  const [current, setCurrent] = useState<string>("purple")

  useEffect(() => {
    const saved = localStorage.getItem("brand") || "purple"
    setCurrent(saved)
    document.documentElement.setAttribute("data-brand", saved)
  }, [])

  function setBrand(key: string) {
    setCurrent(key)
    document.documentElement.setAttribute("data-brand", key)
    localStorage.setItem("brand", key)
  }

  return (
    <div>
      <p className="mb-1 text-xs text-muted-foreground">Color theme</p>
      <div className="flex items-center gap-2">
        {BRANDS.map((b) => (
          <button
            key={b.key}
            aria-label={`Use ${b.label} theme`}
            onClick={() => setBrand(b.key)}
            className={`size-6 rounded-full ring-2 transition ${current === b.key ? "ring-ring" : "ring-transparent"} outline-none focus-visible:ring-2`}
            style={{ backgroundColor: b.color }}
          />
        ))}
      </div>
    </div>
  )
}
