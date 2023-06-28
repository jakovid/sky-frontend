import React from "react";

export default function ClassLevel({ classLevelInfo }) {
    return(
        <div className="class-level-item">
            <img className="class-level-picture" src={classLevelInfo.picture} />
            <div>
                <div className="class-level-info-title" >{ classLevelInfo.name }</div>
                <div className="class-level-info-text">{ classLevelInfo.info }</div>
            </div>
        </div>
    )
}