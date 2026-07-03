import Features from "@/components/sections/features"
import Hero from "@/components/ui/hero"

const Home = () => {
  return (
    <>
      <div
        className="w-full min-h-full overflow-hidden relative"
      >
        <Hero />
        <Features />
      </div>
    </>
  )
}

export default Home