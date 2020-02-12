import React from "react";

export default (props) => {
    const item = props.item;
    return (
        <li>
            <a href={item.url}>
                <i className={item.className} />
            </a>
        </li>
    );
};