import React from "react";
import EnglishOurClassesHeader from "../components/english/our-classes/EnglisOurClassesHeader";
import EnglishOurClassesHero from "../components/english/our-classes/EnglishOurClassesHero";
import EnglishOurClassesIntro from "../components/english/our-classes/EnglishOurClassesIntro";
import EnglishOurClassesInfo from "../components/english/our-classes/EnglishOurClassesInfo";
import EnglishOurClassesLevels from "../components/english/our-classes/EnglishOurClassesLevels";
import EnglishFooter from "../components/english/EnglishFooter";


export default function EnglishOurClasses(){
    return(
        <div>
            <EnglishOurClassesHeader />
            <EnglishOurClassesHero />
            <EnglishOurClassesIntro />
            <EnglishOurClassesInfo />
            <EnglishOurClassesLevels />
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3994.7906014735163!2d121.54842551500712!3d25.07943698395108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac0f05662dc7%3A0xc63b84f14b4d392f!2sSky%20Education!5e1!3m2!1sen!2stw!4v1670673646378!5m2!1sen!2stw" width="100%" height="300"  allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <EnglishFooter />
        </div>
    )
}