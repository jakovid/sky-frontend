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
        {/* <link rel="icon" href="/images/favicon.ico" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
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
