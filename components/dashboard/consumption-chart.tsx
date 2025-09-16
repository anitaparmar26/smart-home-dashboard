"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Feb", water: 50, gas: 30, electricity: 40 },
  { name: "Mar", water: 70, gas: 50, electricity: 60 },
  { name: "Apr", water: 60, gas: 40, electricity: 55 },
  { name: "May", water: 65, gas: 45, electricity: 60 },
  { name: "Jun", water: 90, gas: 70, electricity: 80 },
  { name: "Jul", water: 75, gas: 85, electricity: 50 },
  { name: "Aug", water: 68, gas: 60, electricity: 55 },
  { name: "Sep", water: 62, gas: 52, electricity: 48 },
]

export function ConsumptionChart() {
  return (
    <section className="min-w-0 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground dark:text-muted-foreground">Consumption</h3>

      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={"hsl(var(--border))"} />
            <XAxis dataKey="name" tickLine={false} stroke={"hsl(var(--muted-foreground))"} />
            <YAxis tickLine={false} axisLine={false} stroke={"hsl(var(--muted-foreground))"} />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                color: "hsl(var(--foreground))",
              }}
            />
            <Legend wrapperStyle={{ color: "hsl(var(--muted-foreground))" }} />
            <Bar dataKey="water" fill="var(--chart-1)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="gas" fill="var(--chart-2)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="electricity" fill="var(--chart-5)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
