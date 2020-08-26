import React from "react";

import "./style.css";

const Contacts = ({phone, email, post}) => {

    return (
        <div className="contacts-information">
            <h2 className="contacts-header">Contacts </h2>
            <p className="contacts-paragraph">Phone Number : {phone}</p>
            <p className="contacts-paragraph">Email : {email}</p>
            <p className="contacts-paragraph">Post-office : {post}</p>
        </div>
    )
};

export  default Contacts

