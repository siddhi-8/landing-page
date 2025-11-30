"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Sparkles, Palette, Eye } from "lucide-react"
import { cn } from "@/lib/utils"

// 1. Define the type (optional but good practice)
interface Feature {
  id: string; // <-- ADDED ID PROPERTY
  title: string;
  description: string;
  icon: React.ElementType; // Use a more general type for the icon component
}

// 2. Add the 'id' to each object in the data array
const features: Feature[] = [
  {
    id: "scan", // <-- ADDED ID
    title: "AI Skin Scan",
    description: "Advanced analysis of your skin type, concerns, and needs for personalized care recommendations.",
    icon: Sparkles,
  },
  {
    id: "routines", // <-- ADDED ID
    title: "Personalized Routines",
    description: "Custom skincare and makeup routines tailored to your unique beauty profile and lifestyle.",
    icon: Palette,
  },
  {
    id: "tryon", // <-- ADDED ID
    title: "Virtual Try-On",
    description: "See how products look on you before you buy with our augmented reality feature.",
    icon: Eye,
  },
]

export default function Features() {
  const [activeFeature, setActiveFeature] = useState("scan")

  // The code now correctly finds the 'id' property
  const activeItem = features.find((f) => f.id === activeFeature)

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          const isActive = activeFeature === feature.id

          return (
            <Card
              key={index}
              className={cn(
                "border border-border p-8 rounded-lg bg-background hover:shadow-md transition-shadow",
                // This logic is using the 'id' to set the active style
                isActive ? "bg-primary/10" : "bg-muted/30 hover:bg-muted/50",
              )}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/20 rounded-full">
                  <Icon className={cn("h-8 w-8 text-primary", isActive ? "text-primary" : "text-muted-foreground")} />
                </div>
              </div>

              <h3
                className={cn(
                  "text-xl font-semibold text-foreground text-center mb-3",
                  isActive ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {feature.title}
              </h3>
              <p
                className={cn(
                  "text-muted-foreground text-center text-sm leading-relaxed",
                  isActive ? "text-foreground/80" : "text-muted-foreground",
                )}
              >
                {feature.description}
              </p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}