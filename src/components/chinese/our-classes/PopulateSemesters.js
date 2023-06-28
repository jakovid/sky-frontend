import { SemesterTimes } from "../../../data/ClassInfo";
import React from "react";
import Semester from "./Semester";

export default function PopulateSemesters(){
    return(
        SemesterTimes.map(semesterInfo => {
            return <Semester key={semesterInfo.id} semesterInfo={semesterInfo} />
        })
    )
}