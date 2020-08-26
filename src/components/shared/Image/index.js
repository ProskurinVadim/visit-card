import React from "react";
import PropTypes from "prop-types";
const Image = ({src, alt,className}) => {
    return (
        <>
            <img src={src} alt={alt} className={className}/>
        </>
    )
};

Image.propTypes = {
    src : PropTypes.string,
    alt : PropTypes.string,
    className : PropTypes.string
};

Image.defaultProps = {
    src : "",
    alt : "Image",
    className : ""
};
export default Image;

