import EngNavbar from "@/components/EngNavbar"
import BuildHero from "@/components/OurClasses/Hero"
import BuildSemesterInfo from "@/components/OurClasses/SemesterInfo"
import BuildClassInfo from "@/components/OurClasses/ClassInfo"
import BuildClassLevels from "@/components/OurClasses/ClassLevels"
import BuildFooter from "@/components/Footer"
import Head from "next/head"

export default function OurClassesEng(){
    return(
        <div>
            <Head>
                <title>Sky Education | Our Classes</title>
            </Head>
            <EngNavbar />
            <BuildHero />
            <BuildSemesterInfo />
            <BuildClassInfo />
            <BuildClassLevels />
            <BuildFooter />
        </div>
    )
}