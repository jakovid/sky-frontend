import React from "react";
import SkyLogo2 from "../../../images/SkyLogo2.webp";
import "../../../styles/home/HomeHero.css";;

export default function ChineseHeroHome() {
    return(
        <div id='hero-wrapper'>
            <div id='hero-container'>
                <img id='hero-logo' src={SkyLogo2} />
                <div id='hero-title' className='chinese'>為什麼要跟我們學習？</div>
            </div>
        </div>
    )
}