"use client"

import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
      <div className="space-y-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight text-balance text-foreground">
          Unlock Your Ultimate Glow: AI Personalized Beauty
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get tailored beauty recommendations, analyze your skin with AI, and virtually try-on makeup—all in one elegant
          app.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Apple className="h-5 w-5" />
            App Store
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-primary text-primary hover:bg-muted bg-transparent"
          >
            <Play className="h-5 w-5" />
            Google Play
          </Button>
        </div>

        <div className="flex justify-center pt-8">
          <div className="relative w-full max-w-sm h-auto">
            {/* iPhone Frame Mockup */}
            <div
              className="relative mx-auto bg-linear-to-br from-slate-900 to-slate-800 rounded-3xl p-3 shadow-2xl"
              style={{ aspectRatio: "9/19" }}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-40 h-7 bg-slate-900 rounded-b-3xl" />

              {/* Screen */}
              <div className="w-full h-full bg-linear-to-b from-primary/10 via-background to-muted rounded-2xl overflow-hidden flex flex-col items-center justify-center">
                <div className="text-center px-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/30 rounded-full mx-auto" />
                  <div className="space-y-2">
                    <div className="h-3 bg-primary/20 rounded w-24 mx-auto" />
                    <div className="h-2 bg-primary/10 rounded w-32 mx-auto" />
                  </div>
                  <div className="space-y-2 pt-4">
                    <div className="h-2 bg-primary/15 rounded w-28 mx-auto" />
                    <div className="h-2 bg-primary/15 rounded w-32 mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
