import React from "react";
import SkyLogo2 from "../../../images/SkyLogo2.webp";

export default function ChineseAboutUsHero() {
    return(
        
        <div id='hero-container' class="about-us-page">
            <img id='hero-logo' src={SkyLogo2} />
            <div id='hero-title' className='chinese'>關於我們</div>
        </div>
    )
}