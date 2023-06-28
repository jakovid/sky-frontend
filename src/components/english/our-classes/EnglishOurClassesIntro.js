import React from "react";
import ClassPic10 from '../../../images/ClassPic10.webp';
import '../../../styles/our-classes/OurClassesIntro.css';

export default function EnglishOurClassesIntro() {
    return(
        <div id='our-classes-intro-container'>
            <div id='our-classes-intro-box'>
                <img id='our-classes-intro-image' src={ ClassPic10 } />
                <div id='our-classes-intro-text-box'>
                    <div id='our-classes-intro-title'>Class Length</div>
                    <div id='our-classes-intro-text'>
                        Classes are twice a week and 2.5 hours long at the times listed 
                        below. Our classes are held in semester long periods over the 
                        course of 4 to 5 months, either September to January or January 
                        to June. This ensures the students have rates of retainment of 
                        the information they learn and lays the foundation to speaking 
                        English clearly and fluently. 
                    </div>
                </div>
            </div>
        </div>
    )
};