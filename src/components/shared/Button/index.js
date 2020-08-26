import React from "react";
import PropTypes from "prop-types";
const Button = ({onClick, className, text}) => {
    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
};

Button.propTypes = {
    onClick : PropTypes.func,
    className : PropTypes.string,
    text : PropTypes.string
};

Button.defaultProps = {
    onClick : f=>f,
    className : "",
    text : "Click"
};

export default Button