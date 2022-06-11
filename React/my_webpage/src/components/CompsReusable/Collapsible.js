import React from 'react'
import useCollapse from 'react-collapsed';

function Collapsible(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? props.head : props.head}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {props.display}
            </div>
        </div>
    </div>
    );
}

export default Collapsible