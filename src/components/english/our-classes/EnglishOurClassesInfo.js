import React from "react";
import PopulateClassTime from "./PopulateClassTimes";
import PopulateSemesters from "./PopulateSemesters";
import '../../../styles/our-classes/OurClassesInfo.css';

export default function EnglishOurClassesInfo(){
    return(
        <div id='our-classes-class-times-container'>
            <div id='our-classes-title'>Class Times We Offer</div>
            <div id='our-classes-box'>
                <PopulateClassTime />
            </div>
            <div id='our-classes-title'>Semester Length</div>
            <div id='our-classes-box'>
                <PopulateSemesters />
            </div>
        </div>
    )
}