export default function MessagesPage() {
  const threads = [
    { id: 1, name: "Washer", preview: "Cycle completed", time: "2m", badge: "Device" },
    { id: 2, name: "Front Door", preview: "Door locked", time: "12m", badge: "Security" },
    { id: 3, name: "HVAC", preview: "Filter reminder due in 7 days", time: "1h", badge: "System" },
    { id: 4, name: "Kitchen Lights", preview: "Turned on via scene", time: "3h", badge: "Lighting" },
  ]
  return (
    <section className="rounded-2xl bg-card p-6 md:p-8 shadow-sm ring-1 ring-border">
      <h1 className="text-balance text-2xl font-semibold text-foreground">Messages</h1>
      <p className="mt-2 text-muted-foreground">Your latest conversations and system alerts.</p>

      <ul className="mt-6 divide-y divide-border">
        {threads.map((t) => (
          <li key={t.id} className="flex items-center gap-4 py-4">
            <div className="size-10 shrink-0 rounded-full bg-primary/10 grid place-items-center text-primary font-medium">
              {t.name[0]}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="truncate font-medium text-foreground">{t.name}</p>
                <span className="text-xs text-muted-foreground">{t.time}</span>
              </div>
              <p className="truncate text-sm text-muted-foreground">{t.preview}</p>
            </div>
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary">{t.badge}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
