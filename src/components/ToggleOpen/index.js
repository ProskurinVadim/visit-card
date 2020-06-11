import React,{useState} from 'react';
import Button from "../Button";
const ToggleOpen = ({header,children}) =>  {
    const [open,setOpen]= useState(true);
    return (
        <>
            <h3>{header}</h3>
            <Button onClick={()=>{setOpen(!open)}} text={open ? "Close" : "Open"} />
            {open && children}
            </>
    )
};
export default ToggleOpen;
