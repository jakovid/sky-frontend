import { ClassTimes } from "../../../data/ClassInfo";
import React from "react";
import ClassTime from "./ClassTime";

export default function PopulateClassTime(){
    return(
        ClassTimes.map(classInfo => {
            return <ClassTime key={classInfo.id} classInfo={classInfo} />
        })
    )
}