import React from "react";
import Image from "../shared/Image";

import "./style.css";

const Project = ({projectName, data, projectDescription, projectLink}) => {
    const hardcodeData = 0;
    const hardcodeImg = "./testImg/photo.jpg";
    return (
        <>
            <div className="project-information">
                <h3 className="project-name">Project name: {projectName}</h3>
                <p className="project-data">{hardcodeData}</p>
                <p className="project-description">{projectDescription}</p>
                <a className="project-link" href={projectLink}>link</a>
            </div>
            <Image src={hardcodeImg} alt="project image" className="project-image"/>
        </>
    )
};

export default Project;