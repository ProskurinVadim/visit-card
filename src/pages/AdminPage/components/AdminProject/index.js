import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProjectForm from "../ProjectForm";
import AdminProjectItem from "./AdminProjectItem";
import List from "../../../../decorators/List";
import {addProject,getProjects} from "../../../../store/reducers/project/action";
import ToggleOpen from "../../../../decorators/ToggleOpen";

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
            <h3 className="form-header">Projects</h3>
            <ProjectForm onSubmit={projectSubmit} />
            {projects && <ToggleOpen header="project list">{projectList(projects,"project-list","project-item")}</ToggleOpen>}
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