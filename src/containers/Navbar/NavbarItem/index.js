import React from "react";
import {Link} from "react-router-dom";

const NavdbarItem = ({name,link}) => {
    return (
        <li className="navbar-item"><Link to={link} className="navbar-item-text">{name}</Link></li>
    )
};
export default NavdbarItem