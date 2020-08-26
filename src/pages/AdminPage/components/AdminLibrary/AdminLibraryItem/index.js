import React, {useState} from "react";
import LibraryForm from "../../LibraryForm";
import Library from "../../../../../components/Library";
import Button from "../../../../../components/shared/Button";
import { deleteLibrary, updateLibrary } from "../../../../../store/reducers/library/action";
import { connect } from "react-redux";

const AdminLibrary = (props) =>{
    const [edit,setEdit] = useState(false);
    const {updateLibrary, deleteLibrary} = props;
    return (
        <>
            {edit ? <LibraryForm {...props} onSubmit = {(values)=> {
                    updateLibrary(props._id,values);
                    setEdit(!edit);
                }}
                />
                : <Library {...props} />}
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