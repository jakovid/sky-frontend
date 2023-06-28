import React from "react";
import PopulateClassTime from "./PopulateClassTimes";
import PopulateSemesters from "./PopulateSemesters";
import '../../../styles/our-classes/OurClassesInfo.css';

export default function ChineseOurClassesInfo(){
    return(
        <div id='our-classes-class-times-container'>
            <div id='our-classes-title' className='chinese'>我們提供的上課時間</div>
            <div id='our-classes-box'>
                <PopulateClassTime />
            </div>
            <div id='our-classes-title' className='chinese'>學期長度</div>
            <div id='our-classes-box'>
                <PopulateSemesters />
            </div>
        </div>
    )
}