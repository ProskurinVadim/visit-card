import React, {useState} from "react";
import LibraryForm from "../../LibraryForm";
import Project from "../../../../../containers/Project";
import Button from "../../../../../components/Button";
import { deleteLibrary, updateLibrary } from "../../../../../store/reducers/library/action";
import { connect } from "react-redux";

const AdminLibrary = (props) =>{
    const [edit,setEdit] = useState(false);
    return (
        <>
            {edit ? <LibraryForm {...props} onSubmit = {(values)=> {
                    updateLibrary(props._id,values);
                    setEdit(!edit);
                }}
                />
                : <Project {...props} />}
            <Button onClick={() => setEdit(!edit)} text="Edit"/>
            <Button onClick={() => deleteLibrary(props._id)} text="Delete"/>
        </>
    )
};

const mapDispatchToProps = {
    deleteLibrary,
    updateLibrary
};

export default connect(null,mapDispatchToProps)(AdminLibrary)