import React from "react";
import PropTypes from "prop-types"
const Library = ({libraryName}) => {
    return (
        <p>{libraryName}</p>
    )
};

Library.propTypes = {
    libraryName : PropTypes.string
};

Library.defaultProps = {
    libraryName : ""
};
export default Library;