"use client"

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { month: "Feb", water: 60, gas: 40, electricity: 30 },
  { month: "Mar", water: 75, gas: 55, electricity: 35 },
  { month: "Apr", water: 68, gas: 60, electricity: 32 },
  { month: "May", water: 80, gas: 65, electricity: 40 },
  { month: "Jun", water: 70, gas: 90, electricity: 45 },
  { month: "Jul", water: 72, gas: 95, electricity: 50 },
  { month: "Aug", water: 65, gas: 70, electricity: 42 },
  { month: "Sep", water: 66, gas: 65, electricity: 40 },
]

export default function StatisticsPage() {
  return (
    <section className="rounded-2xl bg-card p-6 md:p-8 shadow-sm ring-1 ring-border">
      <h1 className="text-balance text-2xl font-semibold text-foreground">Statistics</h1>
      <p className="mt-2 text-muted-foreground">Monthly consumption by utility.</p>

      <div className="mt-6 h-80 w-full rounded-xl bg-background p-4 ring-1 ring-border">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={18}>
            <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Legend />
            <Bar dataKey="water" fill="#6D4DFF" radius={[6, 6, 0, 0]} />
            <Bar dataKey="gas" fill="#FF7A00" radius={[6, 6, 0, 0]} />
            <Bar dataKey="electricity" fill="#FF3D71" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
