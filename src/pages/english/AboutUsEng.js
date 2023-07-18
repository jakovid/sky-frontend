import EngNavbar from "../../components/EngNavbar"
import BuildHero from "../../components/AboutUs/Hero"
import BuildKeys from "../../components/AboutUs/Keys"
import BuildInfo from "../../components/AboutUs/Info"
import BuildFooter from "../../components/Footer"

export default function AboutUsEng() {
    return(
        <div>
            <EngNavbar />
            <BuildHero />
            <BuildKeys />
            <BuildInfo />
            <BuildFooter />
        </div>
    )
}