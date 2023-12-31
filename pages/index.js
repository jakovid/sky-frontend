import EngNavbar from "@/components/EngNavbar"
import BuildHero from "@/components/LandingPage/Hero"
import BuildWhyLearn from "@/components/LandingPage/WhyLearn"
import BuildInfo from "@/components/LandingPage/Info"
import BuildFooter from "@/components/Footer"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sky Education | Home</title>
      </Head>
      <EngNavbar />
      <BuildHero />
      <BuildWhyLearn />
      <BuildInfo />
      <BuildFooter />
    </div>
  )
}
