import React from "react";
import SkyBanner from '../../../images/OurTeam.jpg';
import '../../../styles/our-team/OurTeamInfo.css';

export default function ChineseOurTeamInfo(){
    return(
        <div id='our-team-info-container'>
            <img id='our-team-info-image' src={SkyBanner} />
            <div id='our-team-info-text-box'>
                <div id='our-team-info-title' className='chinese'>敬業的教師</div>
                <div id='our-team-info-text'>
                    Sky Education 的教師團隊都是經驗豐富且對教學保有熱忱的人, 
                    每位教師經由精心挑選, 找到最適合自己的角色. 小班制教學允許孩子與我們的老師一對一交流, 
                    全神貫注地給予關懷. 向下滾動以了解我們更多.
                </div>
            </div>
        </div>
    )
}