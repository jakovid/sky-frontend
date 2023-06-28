import React from "react";
import ClassPic6 from "../../../images/ClassPic6.webp";
import ClassPic7 from "../../../images/ClassPic7.webp";
import '../../../styles/about-us/AboutUsBody.css'

export default function ChineseAboutUsBody() {
    return(
        <div id='about-us-body-container'>
            <div id='about-us-intro-container'>
                <div id='about-us-intro-title' className='chinese'>我們的特色</div>
                <div id='about-us-intro-boxes'>

                    <div className='about-us-intro-box'>
                        <div className='about-us-intro-box-title chinese'>小班制教學</div>
                        <div className='about-us-intro-box-text'>
                            我們秉持著班級小班制的制度,讓每一位學生得到更多的機會練習口說和參與課程,
                            以不超過12人為一班,每周兩堂兩個半小時的課程。
                        </div>
                    </div>

                    <div className='about-us-intro-box'>
                        <div className='about-us-intro-box-title chinese'>沉浸式英語</div>
                        <div className='about-us-intro-box-text'>
                            上課氛圍和發言機會讓害羞的孩子在 Sky 變得自信，課程培養團隊向心力及競爭性。
                        </div>
                    </div>

                    <div className='about-us-intro-box'>
                        <div className='about-us-intro-box-title chinese'>堅實的基礎</div>
                        <div className='about-us-intro-box-text'>
                            有了強烈的自然發音的基礎後，接著孩子們接觸到文法和閱讀時便會更加深正
                            確的發音概念以及避免常見的文法錯誤。
                        </div>
                    </div>

                </div>
            </div>

            <div id='about-us-main-container'>
                <div className="about-us-main-item" id='the-mission'>
                    <img className='about-us-main-item-image' src={ClassPic6} />
                    <div className='about-us-main-item-text-box'>
                        <div className='about-us-main-item-title chinese green-text'>核心理念</div>
                        <div className='about-us-main-item-text red-text'>
                            Sky Education 的核心理念即是著重於口說。當學生一踏進 Sky，不管是上課前、
                            休息時間、還是課堂間，都盡可能讓他們處於一個不斷使用到英語的環境，
                            為師生打造一個有趣又活力充沛的學習氛圍。
                        </div>
                    </div>
                </div>
                <div className="about-us-main-item reverse" >
                    <div className='about-us-main-item-text-box'>
                        <div className='about-us-main-item-title chinese red-text'>熱忱的老師 | 優秀學生</div>
                        <div className='about-us-main-item-text green-text'>
                            Sky Education 的首要任務是聘請對教學充滿活力和熱忱的教師。
                            教師團隊帶著最敬業的態度授課，並真誠地關心每一位學生。當學生積極學習並
                            不斷受到挑戰時，沒有時間感到無聊！
                        </div>
                    </div>
                    <img className='about-us-main-item-image' src={ClassPic7} />
                </div>
            </div>
        </div>
    )
}