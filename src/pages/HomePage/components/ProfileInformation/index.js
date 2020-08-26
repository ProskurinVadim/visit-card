import React, {useEffect} from "react";
import {getLibraries} from "../../../../store/reducers/library/action";
import {connect} from "react-redux";

import ProfileField from "./ProfileFild";
import "./style.css";
import Library from "../../../../components/Library";
import List from "../../../../decorators/List";
const fields = {Name:"Vadim" , Surname : "Proskurin", Age : "20", Education: "KPI 151 3-thd " };
const ProfileInformation = ({libraries, getLibraries}) => {
    console.log(libraries);
    useEffect(() => {
        if (!libraries) getLibraries()
    });
    const inf = [];
    const list = List(Library);
    for (let key in fields) {
        inf.push(<ProfileField field={key} fieldValue={fields[key]} key={inf.length} className="profile-field" />);
    }
    return (
        <div className="profile-information">
            <h2 className="profile-header"> Proskurin Vadim Sergeevich</h2>
            <ul className="profile-list">
                {inf}
            </ul>
            {libraries && list(libraries,"library-list","library-list-item")}
        </div>
    )
};

const mapDispatchToProps = {
    getLibraries
};
const mapStateToProps = ({library}) => {
    return {
        libraries : library.libraries
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProfileInformation)