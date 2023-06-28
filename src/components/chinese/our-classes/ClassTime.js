import React from "react";

export default function ClassTime({ classInfo }) {
    return(
        <div className="class-info-item" >
            <div className="class-info-item-title">{ classInfo.zhDays }</div>
            <div className="class-info-item-text">下午 { classInfo.start } - 下午 { classInfo.end }</div>
        </div>
    )
}