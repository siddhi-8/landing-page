import { Star } from "lucide-react"

export default function Testimonial() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="bg-muted rounded-2xl p-8 sm:p-12 text-center space-y-8" style={{ backgroundColor: "#fafafa" }}>
        {/* Stars */}
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
          ))}
        </div>

        <blockquote className="text-xl sm:text-2xl font-semibold text-foreground leading-relaxed italic">
          "GlowUp transformed how I approach my skincare routine. The AI recommendations are spot-on, and the virtual
          try-on feature saved me from buying products that wouldn't have worked for me."
        </blockquote>

        {/* Author */}
        <div className="flex flex-col items-center gap-3 pt-4">
          <div className="w-12 h-12 bg-primary/30 rounded-full" />
          <div>
            <p className="font-semibold text-foreground">Sarah Mitchell</p>
            <p className="text-sm text-muted-foreground">Beauty Enthusiast</p>
          </div>
        </div>
      </div>
    </section>
  )
}
