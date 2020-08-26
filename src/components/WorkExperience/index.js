import React from "react";

const WorkExperience = ({workCompanyName,workDuration,workPosition,workDescription}) => {
    return(
        <>
            <h3>{workCompanyName}</h3>
            <h4>{workDuration}</h4>
            <p>{workPosition}</p>
            <p>{workDescription}</p>
        </>
    )
};

export default WorkExperience;