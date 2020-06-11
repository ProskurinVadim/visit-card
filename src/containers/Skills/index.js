import React from "react";

import SkillItem from "./SkillItem";
const skills = [{name : "react",skillLevel : 9}, {name : "Node Js", skillLevel : 5}, {name : "Redux", skillLevel : 7}];


const Skills = () => {
    const block = skills.map((elem) =>   <SkillItem {...elem } />
    );
    return (
        <div className="skills">
            <h2 className="skills-header">Skills:</h2>
            {block}
        </div>
    )
};

export default Skills;