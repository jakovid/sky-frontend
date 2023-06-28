import React from "react";
import ClassPic10 from '../../../images/ClassPic10.webp';
import '../../../styles/our-classes/OurClassesIntro.css';

export default function ChineseOurClassesIntro() {
    return(
        <div id='our-classes-intro-container'>
            <div id='our-classes-intro-box'>
                <img id='our-classes-intro-image' src={ ClassPic10 } />
                <div id='our-classes-intro-text-box'>
                    <div id='our-classes-intro-title' className='chinese'>課程時數</div>
                    <div id='our-classes-intro-text'>
                        課程一週兩次, 每次時間為 2.5小時. 具體時間如下: 課程於 9月至1月或1月至6月的4至5 
                        個月內按學期進行. 這確保了學生將所學善用, 並為日後的口語發音及流暢度奠定基礎.
                    </div>
                </div>
            </div>
        </div>
    )
};