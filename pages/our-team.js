import EngNavbar from "@/components/EngNavbar"
import BuildHero from "@/components/OurTeam/Hero"
import BuildFooter from "@/components/Footer"
import DisplayTeachers from "@/components/OurTeam/DisplayTeachers"
import BuildIntro from "@/components/OurTeam/Intro"
import Head from "next/head"

export default function OurTeamEng(){

    return(
        <div>
            <Head>
                <title>Sky Education | Our Team</title>
            </Head>
            <EngNavbar />
            <BuildHero />
            <BuildIntro />
            <DisplayTeachers />
            <BuildFooter />
        </div>
    )
}