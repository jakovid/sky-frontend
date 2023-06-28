import React from "react";
import ClassPic1 from "../../../images/ClassPic1.webp";
import ClassPic2 from "../../../images/ClassPic2.webp";
import ClassPic3 from "../../../images/ClassPic3.webp";
import "../../../styles/home/HomeBody.css";

export default function ChineseHomeBody() {
    return(
        <div id="home-body-container">
            <div className='home-body-item'>
                <img className='home-body-image' src={ClassPic1} />
                <div className='home-body-title chinese' >
                    對教學保有熱忱<br/>英文母語者的教師群
                </div>
                <div className='home-body-text'>
                    我們的教師團隊每天都為課堂帶來滿滿的活力，並從裡到外真心的關懷每一位學生。
                    開心生動的上課時光如飛每堂課都是一次獨特的體驗。
                </div>
            </div>

            <div className='home-body-item'>
                <img className='home-body-image' src={ClassPic2} />
                <div className='home-body-title chinese' >
                    學術環境
                </div>
                <div className='home-body-text'>
                    學習不止於課本，利用有趣的影片,超 high 的課堂遊戲，
                    教室永遠充斥著笑聲，孩子們把握每一次上課的機會。
                </div>
            </div>

            <div className='home-body-item'>
                <img className='home-body-image' src={ClassPic3} />
                <div className='home-body-title chinese' >
                    最新課程內容
                </div>
                <div className='home-body-text'>
                    採用自編的書籍 自然發音，聽力, 閱讀, 並持續更新版本。
                    高階班學生則搭配常春藤雜誌進行多元化教學。
                </div>
            </div>

        </div>
    )
}