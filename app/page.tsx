import DeveloperExperience from "@/components/sections/developer-experience"
import Features from "@/components/sections/features"
import HowItWorks from "@/components/sections/how-it-works"
import UseCaseSection from "@/components/sections/use-case"
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
        <DeveloperExperience />
        <UseCaseSection />
      </div>
    </>
  )
}

export default Home