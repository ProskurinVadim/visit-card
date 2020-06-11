import React from "react";

import SkillPoint from "../SkillPoint"

import "./style.css"
const SkillItem = ({skillName, skillLevel}) => {
    const block = [];
    for (let i =0; i<= 10; i++) {
        if (skillLevel !== i)  block.push(<li key={i}><SkillPoint number={i}/></li>);
        else {
            block.push(<li key={i}><SkillPoint number={i} active = {true}/></li>);
        }
    }
    return (
        <div className="skill-item ">
            <h3 className="skill-name">{skillName}</h3>
            <ul className="skill-score">
                {block}
            </ul>
            <h3 className="skill-name">{skillLevel}/10</h3>
        </div>
    )
};

export default SkillItem;