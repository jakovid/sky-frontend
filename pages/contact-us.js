import EngNavbar from "@/components/EngNavbar"
import BuildHero from "@/components/ContactUs/Hero"
import ContactForm from "@/components/ContactUs/ContactForm"
import BuildContactInfo from "@/components/ContactUs/ContactInfo"
import BuildFooter from "@/components/Footer"
import Head from "next/head"

export default function ContactUsEng(){
    return(
        <div>
            <Head>
                <title>Sky Education | Contact Us</title>
            </Head>
            <EngNavbar />
            <BuildHero />
            <BuildContactInfo />
            <ContactForm />
            <BuildFooter />
        </div>
    )
}