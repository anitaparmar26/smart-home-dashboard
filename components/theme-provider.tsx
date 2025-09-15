"use client"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // We force attribute="class" so the "dark" class is placed on <html>,
  // and provide a stable storageKey to persist the choice.
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="smart-home-theme"
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
