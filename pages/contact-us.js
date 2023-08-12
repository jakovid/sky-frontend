import EngNavbar from "@/components/EngNavbar"
import BuildHero from "@/components/ContactUs/Hero"
import ContactForm from "@/components/ContactUs/ContactForm"
import BuildContactInfo from "@/components/ContactUs/ContactInfo"
import BuildFooter from "@/components/Footer"

export default function ContactUsEng(){
    return(
        <div>
            <EngNavbar />
            <BuildHero />
            <BuildContactInfo />
            <ContactForm />
            <BuildFooter />
        </div>
    )
}