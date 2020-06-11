import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProjectForm from "../ProjectForm";
import AdminProjectItem from "./AdminProjectItem";
import List from "../../../../components/List";
import {addProject,getProjects} from "../../../../store/reducers/project/action";
import ToggleOpen from "../../../../components/ToggleOpen";

const AdminProject = ({projects, getProjects, addProject}) => {
    useEffect(() => {
        if (!projects) getProjects();
    });
    const projectSubmit = values => {
        addProject(values)
    };
    const projectList = List(AdminProjectItem);
    return (
        <div>
            <h3>Projects</h3>
            <ProjectForm onSubmit={projectSubmit} />
            {projects && <ToggleOpen>{projectList(projects,"project-list","project-item")}</ToggleOpen>}
        </div>
    )
};

const mapStateToProps = ({project}) => {
    return {
        projects : project.projects,
    }
};

const mapDispatchToProps = {
    addProject,
    getProjects,
};

export default connect(mapStateToProps,mapDispatchToProps)(AdminProject);