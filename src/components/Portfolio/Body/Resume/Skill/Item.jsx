import React from "react";

export default (props) => {
    const item = props.item;
    return (
        <li>
            <span className={`bar-expand ${item.skillname.toLowerCase()}`} ></span>
            <em>{item.skillname}</em>
        </li>
    );
};