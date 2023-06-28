import React from "react";
import '../../styles/Header.css';
import USAflag from '../../images/USAflag.svg';
import SkyLogo from '../../images/SkyLogo.webp';
import Home from "../../images/icons/home.png";
import AboutUs from "../../images/icons/about-us.png";
import OurTeam from "../../images/icons/our-team.png";
import OurClasses from "../../images/icons/our-classes.png";
import ContactUs from "../../images/icons/contact-us.png";


export default function ChineseHeader() {
    return(
        <div id='header-wrapper-3'>
            <div id='header-wrapper-2'>
                <div id='header-wrapper-1'>
                    <img src={SkyLogo} id='header-logo' />
                    <div id='header-nav'>
                        <a href='../' title="主頁">
                            <div className='header-btn chinese'>主頁</div>
                            <img className="header-btn-icon" src={Home}/>
                        </a>
                        <a href='../#/about-us' title="關於我們" >
                            <div className='header-btn chinese'>關於我們</div>
                            <img className="header-btn-icon" src={AboutUs}/>
                        </a>
                        <a href='../#/our-team' title="我們的團隊">
                            <div className='header-btn chinese'>我們的團隊</div>
                            <img className="header-btn-icon" src={OurTeam}/>
                        </a>
                        <a href='../#/our-classes' title="我們的課程" >
                            <div className='header-btn chinese'>我們的課程</div>
                            <img className="header-btn-icon" src={OurClasses}/>
                        </a>
                        <a href='../#/contact-us' title="聯繫我們">
                            <div className='header-btn chinese'>聯繫我們</div>
                            <img className="header-btn-icon" src={ContactUs}/>
                        </a>

                    </div>
                    <div>
                        <a href='../#/home/en' id='header-language'>
                        <img className='header-language-flag' src={USAflag} />
                        <div class='header-language-name'>English</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}