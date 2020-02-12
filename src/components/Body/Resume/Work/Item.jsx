import React from 'react';

export default (props) => {
    const item = props.item;
    return (
        <div className="row item">
            <div className="twelve columns">
                <h3>{item.CompanyName}</h3>
                <p className="info">
                    {item.specialization}
                    <span>&bull;</span>
                    <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em>
                </p>
                <p>{item.Achievements}</p>
            </div>
        </div>
    );
};