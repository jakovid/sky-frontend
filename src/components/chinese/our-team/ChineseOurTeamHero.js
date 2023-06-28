import React from "react";
import SkyLogo2 from "../../../images/SkyLogo2.webp";


export default function ChineseOurTeamHero() {
    return(
        <div id='hero-container' class="our-team-page">
            <img id='hero-logo' src={SkyLogo2} />
            <div id='hero-title' className='chinese'>我們的團隊</div>
        </div>
    )
}