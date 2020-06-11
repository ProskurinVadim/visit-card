import React, {useEffect} from "react";
import {connect} from "react-redux";
import SkillsForm from "../SkillsForm";
import AdminSkillItem from "./AdminSkillItem";
import List from "../../../../components/List";
import {getSkills,addSkill} from "../../../../store/reducers/skills/action";
import ToggleOpen from "../../../../components/ToggleOpen";

const AdminSkill = ({addSkill,skill,getSkills,}) => {
    useEffect(()=>{
        if(!skill) getSkills();
    });
    const skillsSubmit = values => {
        addSkill(values)
    };
    const skillList = List(AdminSkillItem);
    return (
        <div>
            <h3>Skills</h3>
            <SkillsForm onSubmit={skillsSubmit} />
            {skill && <ToggleOpen>{skillList(skill,"skills","skill-item")}</ToggleOpen>}
        </div>
    )
};

const mapStateToProps = ({skill}) => {
    return {
        skill: skill.skills
    }
};

const mapDispatchToProps = {
    addSkill,
    getSkills
};

export default connect(mapStateToProps,mapDispatchToProps)(AdminSkill)