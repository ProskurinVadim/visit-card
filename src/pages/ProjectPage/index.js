import React, { useEffect } from "react";
import Container from "../../components/Container";
import Project from "../../containers/Project";
import List from "../../components/List";
import { connect } from "react-redux"
import {getProjects} from "../../store/reducers/project/action";
import "./style.css";
// const project = [
//     {
//         projectName: "github",
//         data : `${(new Date()).getFullYear()}.${(new Date()).getMonth()}.${(new Date()).getDay()}`,
//         projectDescription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias, aliquam architecto aspernatur assumenda cum dicta dolorum eaque esse ex expedita illum neque, non, odit praesentium quos repellendus vel voluptates!",
//         projectLink : "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date",
//         img : "./testImg/photo.jpg"
//     },
//     {
//         projectName: "github",
//         data : `${(new Date()).getFullYear()}.${(new Date()).getMonth()}.${(new Date()).getDay()}`,
//         projectDescription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias, aliquam architecto aspernatur assumenda cum dicta dolorum eaque esse ex expedita illum neque, non, odit praesentium quos repellendus vel voluptates!",
//         projectLink : "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date",
//         img : "./testImg/photo.jpg"
//     }];

const ProjectPage  = (props) => {
    const Component = List(Project);
    const { projects, getProjects} = props;
    useEffect(() => {
        if (!projects) getProjects()
    });

    return (
        <section className="project-page">
            <Container>
                { projects && Component(projects,"project-list","project-item")}
            </Container>
        </section>
    )
};

const mapDispatchToProps = {
    getProjects
};
const mapStateToProps = ({project}) => {
    return {
        projects : project.projects
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ProjectPage)