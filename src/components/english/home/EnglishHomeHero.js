import React from "react";
import SkyLogo2 from "../../../images/SkyLogo2.webp";
import "../../../styles/home/HomeHero.css";;

export default function EnglishHeroHome() {
    return(
        <div id='hero-wrapper'>
            <div id='hero-container'>
                <img id='hero-logo' src={SkyLogo2} />
                <div id='hero-title' className='english'>WHY LEARN WITH US?</div>
            </div>
        </div>
    )
}