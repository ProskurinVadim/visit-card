import React, {useState} from "react";
import ProjectForm from "../../ProjectForm";
import Project from "../../../../../components/Project";
import Button from "../../../../../components/shared/Button";
import { deleteProject, updateProject } from "../../../../../store/reducers/project/action";
import { connect } from "react-redux";
const AdminProjectItem = (props) => {
    const [edit,setEdit] = useState(false);
    const {updateProject, deleteProject} = props;
    return (
        <>
            {edit ? <ProjectForm {...props} onSubmit = {(values)=> {
                    updateProject(props._id,values);
                setEdit(!edit);
            }}
            />
                : <Project {...props} />}
            <Button onClick={() => setEdit(!edit)} text="Edit"/>
            <Button onClick={() => deleteProject(props._id)} text="Delete"/>
        </>
    )
};

const mapDispatchToProps = {
    deleteProject,
    updateProject
};
export default connect(null,mapDispatchToProps)(AdminProjectItem);