"use client"

import * as React from "react"

export function ToggleSwitch({
  checked,
  onCheckedChange,
  label,
}: {
  checked: boolean
  onCheckedChange: (v: boolean) => void
  label?: string
}) {
  const id = React.useId()

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault()
      onCheckedChange(!checked)
    }
  }

  return (
    <div className="inline-flex items-center gap-3">
      {label && (
        <label htmlFor={id} className="text-xs text-muted-foreground">
          {label}
        </label>
      )}
      <button
        id={id}
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        onKeyDown={handleKeyDown}
        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors outline-none ring-1 ring-inset ring-border focus-visible:ring-2 focus-visible:ring-ring ${
          checked ? "bg-brand" : "bg-muted"
        }`}
      >
        <span
          className={`absolute left-0.5 top-0.5 size-[22px] rounded-full shadow-sm transition-transform ${
            checked ? "translate-x-5.5" : "translate-x-0"
          } ${checked ? "bg-muted dark:bg-white" : "bg-card dark:bg-foreground"}`}
        />
        <span className="sr-only">{checked ? "On" : "Off"}</span>
      </button>
    </div>
  )
}
