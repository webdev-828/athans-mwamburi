import React from "react";

export default (props) => {
    const item = props.item;
    return (
        <div className="row item">
            <div className="twelve columns">
                <h3>{item.UniversityName}</h3>
                <p className="info">
                    {item.specialization}
                    <span>&bull;</span>
                    <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                </p>
                <p>{item.Achievements}</p>
            </div>
        </div>
    );
};