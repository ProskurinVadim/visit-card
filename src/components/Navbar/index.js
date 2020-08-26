import React from "react";
import NavbarItem from "./NavbarItem";

import "./style.css"
const Names = [{name : "Home", link : "/"},{name : "Project", link : "/project" },
    {name : "Contacts", link : "/contacts"}];
const nav = Names.map((elem,i)=>
    <NavbarItem  key={i}  {...elem} />
);
const Navbar = () => {
    return (
        <nav className="navbar">
            {nav}
        </nav>
    )
};

export default Navbar;