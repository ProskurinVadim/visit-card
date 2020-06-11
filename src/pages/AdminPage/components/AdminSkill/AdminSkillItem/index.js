import React, {useState} from "react";
import Button from "../../../../../components/Button";
import { deleteSkill, updateSkill } from "../../../../../store/reducers/skills/action";
import SkillForm from "../../SkillsForm";
import Skill from  "../../../../../containers/Skills/SkillItem"
import { connect } from "react-redux";
const AdminSkillItem = (props) => {
    const [edit,setEdit] = useState(false);
    const {updateSkill, deleteSkill} = props;
    console.log(props);
    return (
        <>
            {edit ? <SkillForm {...props} onSubmit = {(values)=> {
                    updateSkill(props._id,values);
                setEdit(!edit);
            }}
            />
                : <Skill {...props} />}
            <Button onClick={() => setEdit(!edit)} text="Edit"/>
            <Button onClick={() => deleteSkill(props._id)} text="Delete"/>
        </>
    )
};

const mapDispatchToProps = {
    deleteSkill,
    updateSkill
};
export default connect(null,mapDispatchToProps)(AdminSkillItem);