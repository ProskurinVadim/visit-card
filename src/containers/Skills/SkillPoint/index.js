import React from "react";

const SkillPoint = ({number,active}) => {
    const className = !active ? "skill-point" : "skill-point-active skill-point";
    return (
        <div className={className} />
    )
};

export default SkillPoint;