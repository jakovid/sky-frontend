import React from "react";
import SkyLogo2 from "../../../images/SkyLogo2.webp";

export default function ChineseContactUsHero() {
    return (
        <div id='hero-container' class="contact-us-page">
            <img id='hero-logo' src={SkyLogo2} />
            <div id="hero-title" className="chinese">保持聯繫</div>
        </div>
    )
}