import React from "react";

import "./style.css"
const SocialButton = ({className, text, icon, link}) => {
    return (
        <a className={"social-btn "+className}  href={link}>
            <i className={icon} />{text}
        </a>
    )
};

export default SocialButton;