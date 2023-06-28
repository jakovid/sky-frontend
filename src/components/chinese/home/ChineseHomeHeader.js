import React from "react";
import '../../../styles/Header.css';
import USAflag from '../../../images/usacan2.jpg';
import SkyLogo from '../../../images/SkyLogo.jpg';


export default function ChineseHomeHeader() {
    return(
        <div id='header-wrapper-3'>
            <div id='header-wrapper-2'>
                <div id='header-wrapper-1'>
                    <img src={SkyLogo} id='header-logo' />
                    <div id='header-nav'>
                        <a href='../' title="主頁" id="selected-header-page">
                            <div className='header-btn chinese'>主頁</div>
                            <svg className='header-btn-icon' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z"/></svg>
                        </a>
                        <a href='../#/about-us' title="關於我們" >
                            <div className='header-btn chinese'>關於我們</div>
                            <svg className='header-btn-icon' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M453 776h60V536h-60v240Zm26.982-314q14.018 0 23.518-9.2T513 430q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447 430q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Zm.234-60Q622 916 721 816.5t99-241Q820 434 721.188 335 622.375 236 480 236q-141 0-240.5 98.812Q140 433.625 140 576q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/></svg>
                        </a>
                        <a href='../#/our-team' title="我們的團隊">
                            <div className='header-btn chinese'>我們的團隊</div>
                            <svg className='header-btn-icon' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M0 816v-53q0-38.567 41.5-62.784Q83 676 150.376 676q12.165 0 23.395.5Q185 677 196 678.652q-8 17.348-12 35.165T180 751v65H0Zm240 0v-65q0-32 17.5-58.5T307 646q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-19.861-3.5-37.431Q773 696 765 678.727q11-1.727 22.171-2.227 11.172-.5 22.829-.5 67.5 0 108.75 23.768T960 763v53H780Zm-480-60h360v-6q0-37-50.5-60.5T480 666q-79 0-129.5 23.5T300 751v5ZM149.567 646Q121 646 100.5 625.438 80 604.875 80 576q0-29 20.562-49.5Q121.125 506 150 506q29 0 49.5 20.5t20.5 49.933Q220 605 199.5 625.5T149.567 646Zm660 0Q781 646 760.5 625.438 740 604.875 740 576q0-29 20.562-49.5Q781.125 506 810 506q29 0 49.5 20.5t20.5 49.933Q880 605 859.5 625.5T809.567 646ZM480 576q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600 456q0 50-34.5 85T480 576Zm.351-60Q506 516 523 498.649t17-43Q540 430 522.851 413t-42.5-17Q455 396 437.5 413.149t-17.5 42.5Q420 481 437.351 498.5t43 17.5ZM480 756Zm0-300Z"/></svg>
                        </a>
                        <a href='../#/our-classes' title="我們的課程" >
                            <div className='header-btn chinese'>我們的課程</div>
                            <svg className='header-btn-icon' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M479 936 189 777V537L40 456l439-240 441 240v317h-60V491l-91 46v240L479 936Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127V573L479 696 249 571v170l230 127Zm1-240Zm-1 74Zm0 0Z"/></svg>
                        </a>
                        <a href='../#/contact-us' title="聯繫我們">
                            <div className='header-btn chinese'>聯繫我們</div>
                            <svg className='header-btn-icon' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m515 976-10-110h-40q-143 0-244-101T120 521q0-143 101.5-244T467 176q71 0 131.5 25.5T704 273q45 46 70.5 108.5T800 518q0 66-19.5 132T724 776q-37 60-90 111t-119 89Zm50-108q82-69 128.5-162.5T740 518q0-124-77.5-203T467 236q-120 0-203.5 83.5T180 521q0 118 83.5 201.5T465 806h100v62Zm-98-115q16 0 27-11t11-27q0-16-11-27t-27-11q-16 0-27 11t-11 27q0 16 11 27t27 11Zm-27-136h50q0-25 8.5-41.5T534 532q27-27 38-49.5t11-48.5q0-45-30.5-74T471 331q-42 0-75 22t-49 60l46 19q11-26 30.5-38.5T468 381q30 0 47 14.5t17 38.5q0 19-11 38.5T482 521q-27 28-34.5 45t-7.5 51Zm20-65Z"/></svg>
                        </a>

                    </div>
                    <div>
                        <a href='../#/home/en' id='header-language'>
                        <img className='header-language-flag' src={USAflag} />
                        <div className='header-language-name'>English</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}