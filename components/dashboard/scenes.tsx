import { Sunrise, Moon } from "lucide-react"

function Scene({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-sm ring-1 ring-border">
      <Icon className="size-6 text-brand dark:text-white transition-colors" />
      <div>
        <div className="text-sm font-semibold text-foreground">{title}</div>
        <div className="text-xs text-muted-foreground">Scene</div>
      </div>
    </div>
  )
}

export function Scenes() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Scene icon={Sunrise} title="Good Morning" />
      <Scene icon={Moon} title="Good Night" />
    </div>
  )
}
