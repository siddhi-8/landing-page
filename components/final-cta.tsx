"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="w-full bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-balance text-foreground">
          Beauty, Simplified. Get Started.
        </h2>

        <Button
          size="lg"
          className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-base shadow-md hover:shadow-lg transition-shadow"
        >
          <Download className="h-5 w-5" />
          Download Free Today
        </Button>

        <p className="text-sm text-muted-foreground">Available on iOS and Android</p>
      </div>
    </section>
  )
}
