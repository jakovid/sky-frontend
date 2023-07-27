import EngNavbar from "../../components/EngNavbar"
import BuildHero from "../../components/LandingPage/Hero"
import BuildWhyLearn from "../../components/LandingPage/WhyLearn"
import BuildInfo from "../../components/LandingPage/Info"
import BuildFooter from "../../components/Footer"

export default function LandingPageEng() {
    
    return(
        <div>
            <EngNavbar />
            <BuildHero />
            <BuildWhyLearn />
            <BuildInfo />
            <BuildFooter />
        </div>
    )
}