import React, {useEffect} from "react";
import {connect} from "react-redux";
import LibraryForm from "../LibraryForm";
import AdminLibraryItem from "./AdminLibraryItem";
import List from "../../../../components/List";
import {getLibraries, addLibrary} from "../../../../store/reducers/library/action";
import ToggleOpen from "../../../../components/ToggleOpen";

const AdminLibrary = ({libraries,getLibraries,addLibrary}) => {
    useEffect(() => {
        if(!libraries) getLibraries()
    });
    const librarySubmit = values => {
        addLibrary(values)
    };
    const libraryList = List(AdminLibraryItem);
    return (
        <div>
            <h3>Libraries</h3>
            <LibraryForm onSubmit={librarySubmit}/>
            {libraries && <ToggleOpen>{libraryList}</ToggleOpen>}
        </div>
    )
};

const mapStateToProps = ({library}) => {
    return {
        libraries : library.libraries
    }
};

const mapDispatchToProps = {
    addLibrary,
    getLibraries
};

export default connect(mapStateToProps,mapDispatchToProps)(AdminLibrary)