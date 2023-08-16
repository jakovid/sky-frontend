import EngNavbar from "@/components/EngNavbar"
import BuildHero from "@/components/AboutUs/Hero"
import BuildKeys from "@/components/AboutUs/Keys"
import BuildInfo from "@/components/AboutUs/Info"
import BuildFooter from "@/components/Footer"
import Head from "next/head"

export default function AboutUsEng() {
    
    return(
        <div>
            <Head>
                <title>Sky Education | About Us</title>
            </Head>
            <EngNavbar />
            <BuildHero />
            <BuildKeys />
            <BuildInfo />
            <BuildFooter />
        </div>
    )
}