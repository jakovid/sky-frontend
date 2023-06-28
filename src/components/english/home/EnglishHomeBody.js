import React from "react";
import ClassPic1 from "../../../images/ClassPic1.webp";
import ClassPic2 from "../../../images/ClassPic2.webp";
import ClassPic3 from "../../../images/ClassPic3.webp";
import "../../../styles/home/HomeBody.css";

export default function EnglishHomeBody() {

    var year = new Date().getFullYear();
    let skyYears = year - 2008;

    return(
        <div id="home-body-container">
            <div className='home-body-item'>
                <img className='home-body-image' src={ClassPic1} />
                <div className='home-body-title' >
                    Taught by Qualified Native English Speakers
                </div>
                <div className='home-body-text'>
                We believe that happy teachers are more productive and creative. 
                We want our teachers to want to come and teach. 
                Our teachers bring a high-energy approach to the classroom every 
                day to make classes fly by. Every class is a unique experience.
                </div>
            </div>

            <div className='home-body-item'>
                <img className='home-body-image' src={ClassPic2} />
                <div className='home-body-title' >
                    Engaging Academic Environment
                </div>
                <div className='home-body-text'>
                For {skyYears} years, we've been about having fun while learning English. 
                In order to have fun while learning, kids need to feel safe, 
                confident and able to make a mistake without worrying about it. 
                Our classes are small with multi-media in all of them.
                </div>
            </div>

            <div className='home-body-item'>
                <img className='home-body-image' src={ClassPic3} />
                <div className='home-body-title' >
                    Custom and Relevant Class Content
                </div>
                <div className='home-body-text'>
                Back in 2008, we believed that the English books used in Taiwanese 
                classrooms were outdated, irrelevant and boring. 
                So, we decided to create our own Sky books. (Phonics, Reading, and Grammar)
                </div>
            </div>

        </div>
    )
}