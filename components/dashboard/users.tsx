import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function UsersWidget() {
  return (
    <section className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Users</h3>
        <span className="text-[10px] text-muted-foreground">Edit▾</span>
      </div>
      <div className="flex items-center gap-4">
        {["U1", "U2", "U3"].map((t) => (
          <Avatar key={t} className="size-9 ring-2 ring-brand/20 dark:ring-white/10">
            <AvatarFallback className="bg-brand/10 text-brand dark:bg-white/10 dark:text-white">{t}</AvatarFallback>
          </Avatar>
        ))}
        <div className="grid size-9 place-items-center rounded-full bg-brand/10 text-brand dark:bg-white/10 dark:text-white">
          +
        </div>
      </div>
    </section>
  )
}
