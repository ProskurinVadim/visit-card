import React, {useEffect} from "react";
import {connect} from "react-redux";
import LibraryForm from "../LibraryForm";
import AdminLibraryItem from "./AdminLibraryItem";
import List from "../../../../decorators/List";
import {getLibraries, addLibrary} from "../../../../store/reducers/library/action";
import ToggleOpen from "../../../../decorators/ToggleOpen";

const AdminLibrary = ({libraries,getLibraries,addLibrary}) => {
    useEffect(() => {
        if(!libraries) getLibraries()
    });
    const librarySubmit = values => {
        addLibrary(values)
    };
    const libraryList = List(AdminLibraryItem);
    console.log(libraries);
    return (
        <div>
            <h3 className="form-header">Libraries</h3>
            <LibraryForm onSubmit={librarySubmit}/>
            {libraries && <ToggleOpen header="library list">{libraryList(libraries)}</ToggleOpen>}
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