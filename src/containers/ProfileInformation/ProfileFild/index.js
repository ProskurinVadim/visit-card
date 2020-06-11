import React from "react";

const ProfileField = ({field,fieldValue,className}) => {
    return (
        <li className={className}><p>{field} : <span>{fieldValue}</span></p></li>
    )
};

export default ProfileField