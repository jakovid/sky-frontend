import React from "react";

export default function Semester({ semesterInfo }) {
    return(
        <div className="class-info-item">
            <div className="class-info-item-title">{ semesterInfo.zhName }</div>
            <div className="class-info-item-text">{ semesterInfo.zhStart} 至 {semesterInfo.zhEnd}</div>
        </div>
    )
}