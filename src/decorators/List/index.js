import React from "react";
import PropTypes from "prop-types";
const List = (WarpedComponent) => (arr, className, childClassName) => {

    WarpedComponent.propTypes = {
        arr : PropTypes.array,
        className : PropTypes.string,
        childClassName : PropTypes.string,
    };
    WarpedComponent.defaultProps = {
        arr : [],
        className : "",
        childClassName : "",
    };

    return (
        <ul className={className}>
            {
                arr.map((elem,i) => (<li key={i} className={childClassName}><WarpedComponent {...elem} /></li>))
            }
        </ul>
    );
};

List.propTypes = {
    WrappedComponent : PropTypes.element
};
List.defaultProps = {
    WrappedComponent : ()=><div>Empty li</div>
};
export default List;