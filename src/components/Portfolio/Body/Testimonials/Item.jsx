import React from "react";

export default (props) => {
    const item = props.item;
    return (
        <li>
            <blockquote>
                <p>{item.description}</p>
                <cite>{item.name}</cite>
            </blockquote>
        </li>
    )
}