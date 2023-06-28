import { ClassLevels } from "../../../data/ClassLevels";
import React from "react";
import ClassLevel from "./ClassLevel";

export default function PopulateClassLevel() {
    return(
        ClassLevels.map(classLevelInfo => {
            return <ClassLevel key={classLevelInfo.id} classLevelInfo={classLevelInfo} />
        })
    )
}