import React from "react";

export default function ClassLevel({ classLevelInfo }) {
    return(
        <div className="class-level-item">
            <img className="class-level-picture" src={classLevelInfo.picture} />
            <div>
                <div className="class-level-info-title" >{ classLevelInfo.zhName }</div>
                <div className="class-level-info-text">{ classLevelInfo.zhInfo }</div>
            </div>
        </div>
    )
}