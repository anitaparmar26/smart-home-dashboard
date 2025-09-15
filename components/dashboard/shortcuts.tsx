import { Plus, Thermometer, Sun, Wifi } from "lucide-react"

function Tile({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-card p-4 text-center shadow-sm ring-1 ring-border">
      <Icon className="size-6 text-brand dark:text-white transition-colors" />
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}

export function Shortcuts() {
  return (
    <section className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground dark:text-muted-foreground">Shortcuts</h3>
        <span className="text-[10px] text-muted-foreground">Edit▾</span>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <Tile icon={Sun} label="Lights" />
        <Tile icon={Thermometer} label="Temp" />
        <Tile icon={Wifi} label="Wi‑Fi" />
        <Tile icon={Plus} label="Add" />
      </div>
    </section>
  )
}
