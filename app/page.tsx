import Features from "@/components/sections/features"
import HowItWorks from "@/components/sections/how-it-works"
import Hero from "@/components/ui/hero"

const Home = () => {
  return (
    <>
      <div
        className="w-full min-h-full overflow-hidden relative"
      >
        <Hero />
        <Features />
        <HowItWorks />
      </div>
    </>
  )
}

export default Home