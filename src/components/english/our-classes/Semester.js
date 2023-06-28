import React from "react";

export default function Semester({ semesterInfo }) {
    return(
        <div className="class-info-item">
            <div className="class-info-item-title">{ semesterInfo.name }</div>
            <div className="class-info-item-text">{ semesterInfo.start} to {semesterInfo.end}</div>
        </div>
    )
}