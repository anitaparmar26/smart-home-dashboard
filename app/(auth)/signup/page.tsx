"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const router = useRouter()

  return (
    <main className="min-h-[80dvh] flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-2xl bg-card p-6 ring-1 ring-border">
        <h1 className="text-2xl font-semibold text-foreground mb-2 text-balance">Create account</h1>
        <p className="text-sm text-muted-foreground mb-6">Join and control your smart home.</p>
        <form className="grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm text-muted-foreground">Name</span>
            <input
              type="text"
              className="h-10 rounded-md bg-background ring-1 ring-border px-3 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm text-muted-foreground">Email</span>
            <input
              type="email"
              className="h-10 rounded-md bg-background ring-1 ring-border px-3 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm text-muted-foreground">Password</span>
            <input
              type="password"
              className="h-10 rounded-md bg-background ring-1 ring-border px-3 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </label>
          <button type="button" className="h-10 rounded-md bg-brand text-background">
            Sign up
          </button>
        </form>

        <p className="mt-4 mb-2 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/signin" className="text-brand">
            Sign in
          </Link>

        </p>
        <Link href="/dashboard" className="text-brand text-sm">Back to Dashboard</Link>
      </div>
    </main>
  )
}
