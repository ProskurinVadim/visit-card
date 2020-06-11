import React from "react";

const List = (WarpedComponent) => (arr, className, childClassName) => {
    return (
        <ul className={className}>
            {
                arr.map((elem,i) => (<li key={i} className={childClassName}><WarpedComponent {...elem} /></li>))
            }
        </ul>
    )
};

export default List;