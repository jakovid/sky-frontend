import React from "react";
import ClassPic6 from "../../../images/ClassPic6.webp";
import ClassPic7 from "../../../images/ClassPic7.webp";
import '../../../styles/about-us/AboutUsBody.css'

export default function EnglishAboutUsBody() {
    return(
        <div id='about-us-body-container'>
            <div id='about-us-intro-container'>
                <div id='about-us-intro-title'>What we believe are the keys to success!</div>
                <div id='about-us-intro-boxes'>

                    <div className='about-us-intro-box'>
                        <div className='about-us-intro-box-title'>Small Classes</div>
                        <div className='about-us-intro-box-text'>
                            Every student has more opportunities to speak and participate in class. 
                            With maximum class sizes of 12 and 2.5 hours per class. Everyone speaks.
                        </div>
                    </div>

                    <div className='about-us-intro-box'>
                        <div className='about-us-intro-box-title'>Immersive English</div>
                        <div className='about-us-intro-box-text'>
                            Our method ensures that even the shyest student will get many 
                            opportunities to practice communicating. Our classes are team 
                            driven and competitive.
                        </div>
                    </div>

                    <div className='about-us-intro-box reverse'>
                        <div className='about-us-intro-box-title'>Strong Foundation</div>
                        <div className='about-us-intro-box-text'>
                            With a strong foundation in phonics, students move on to grammar 
                            and reading where we reinforce the correct pronunciation of words 
                            and sentence patterns.
                        </div>
                    </div>

                </div>
            </div>

            <div id='about-us-main-container'>
                <div className="about-us-main-item" id='the-mission'>
                    <img className='about-us-main-item-image' src={ClassPic6} />
                    <div className='about-us-main-item-text-box'>
                        <div className='about-us-main-item-title green-text'>The Mission</div>
                        <div className='about-us-main-item-text red-text'>
                            At the core of Sky Education's teaching philosophy is an emphasis on speaking. 
                            From the moment students walk into Sky; they are in an English speaking environment. 
                            We create a high-energy learning environment that is fun for our students to learn 
                            and teachers to teach. Happy teachers are more productive and creative, 
                            and happy children learn better.
                        </div>
                    </div>
                </div>
                <div className="about-us-main-item reverse" >
                    <div className='about-us-main-item-text-box'>
                        <div className='about-us-main-item-title red-text'>Great Teachers, <br/> Great Students</div>
                        <div className='about-us-main-item-text green-text'>
                            A priority at Sky Education is hiring teachers who are energetic and 
                            passionate about teaching. Our teachers bring a high level of energy 
                            to the classroom and genuinely care about our students in an out of class. 
                            When students are actively learning and constantly being challenged, 
                            there is no time to get bored!
                        </div>
                    </div>
                    <img className='about-us-main-item-image' src={ClassPic7} />
                </div>
            </div>
        </div>
    )
}