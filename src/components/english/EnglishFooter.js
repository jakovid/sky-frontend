import React from "react";
import SkyLogo2 from '../../images/SkyLogo2.jpg';
import FacebookLogo from '../../images/FacebookLogo.webp';
import "../../styles/Footer.css";

export default function EnglishFooter(){
    return(
        <div id='english-footer-container'>
            <a href="tel:0225338263" id='english-footer-phone-number'>02 2533 8263</a>
            <div id='english-footer-logo-container'>
                <img id='english-footer-sky-logo' src={SkyLogo2} />
                <a href='https://www.facebook.com/Skyeducation2008' target="_blank"><img id='footer-fb-logo'src={FacebookLogo} /></a>
            </div>
        </div>
    )
}