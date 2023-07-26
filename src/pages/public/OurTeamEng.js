import EngNavbar from "../../components/EngNavbar"
import BuildHero from "../../components/OurTeam/Hero"
import BuildFooter from "../../components/Footer"
import DisplayTeachers from "../../components/OurTeam/DisplayTeachers"
import BuildIntro from "../../components/OurTeam/Intro"

export default function OurTeamEng(){

    return(
        <div>
            <EngNavbar />
            <BuildHero />
            <BuildIntro />
            <DisplayTeachers />
            <BuildFooter />

        </div>
    )
}