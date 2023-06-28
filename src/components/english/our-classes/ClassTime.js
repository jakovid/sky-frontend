import React from "react";

export default function ClassTime({ classInfo }) {
    return(
        <div className="class-info-item" >
            <div className="class-info-item-title">{ classInfo.days }</div>
            <div className="class-info-item-text">{ classInfo.start } pm - { classInfo.end } pm</div>
        </div>
    )
}