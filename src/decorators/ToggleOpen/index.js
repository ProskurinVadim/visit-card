import React,{useState} from 'react';
import Button from "../../components/shared/Button";
const ToggleOpen = ({header="",children}) =>  {
    const [open,setOpen]= useState(false);
    return (
        <>
            <Button onClick={()=>{setOpen(!open)}} text={open ? "Close "+header : "Open "+header}
                    className={(open ? "toggle-close" : " toggle-open")+" toggle"}/>
            {open && children}
            </>
    )
};
export default ToggleOpen;
