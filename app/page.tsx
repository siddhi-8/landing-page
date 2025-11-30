import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonial from "@/components/testimonial"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Testimonial />
      <FinalCTA />
      <Footer />
    </main>
  )
}
