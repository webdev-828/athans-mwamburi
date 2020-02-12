import React from "react";

const Item = (props) => {
    const item = props.item;
    return (
        <div className="columns portfolio-item">
            <div className="item-wrap">
                <a href="#modal-01">
                    <img src={`${item.imgurl}`} className="item-img"/>
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Item;