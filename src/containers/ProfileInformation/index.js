import React from  "react";

import ProfileField from "./ProfileFild";
import "./style.css";

const fields = {Name:"Vadim" , Surname : "Proskurin", Age : "20", Education: "KPI 151 3-thd " };
const ProfileInformation = () => {
    const inf = [];
    for (let key in fields) {
        inf.push(<ProfileField field={key} fieldValue={fields[key]} key={inf.length} className="profile-field" />);
    }
    return (
        <div className="profile-information">
            <h2 className="profile-header"> Proskurin Vadim Sergeevich</h2>
            <ul className="profile-list">
                {inf}
            </ul>
            <div className="profile-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos ex incidunt possimus sapiente sunt veritatis! Adipisci assumenda atque corporis fugit ipsam molestias nulla omnis possimus repellendus tempora. Ipsum, minima? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda beatae deserunt dolorum ex expedita illo impedit laborum magni, maiores maxime nam nobis, nulla officia quas quidem quis totam velit.</div>
        </div>
    )
};

export default ProfileInformation