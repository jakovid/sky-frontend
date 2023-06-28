import React from "react";
import SkyLogo2 from "../../../images/SkyLogo2.webp";

export default function EnglishAboutUsHero() {
    return(
        <div id='hero-wrapper'>
            <div id='hero-container' class="about-us-page">
                <img id='hero-logo' src={SkyLogo2} />
                <div id='hero-title' className='english'>ABOUT US</div>
            </div>
        </div>
        
    )
}