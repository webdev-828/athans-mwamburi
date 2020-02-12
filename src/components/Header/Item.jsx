import React from "react";

export default (props) => {
    const item = props.item;
    return (
        <li key={item.name}>
            <a href={item.url} target="_blank"><i className={item.className}></i></a>
        </li>
    );
};