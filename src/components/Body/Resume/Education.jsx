import React from 'react';

export default class Education extends React.Component {
    render() {
        return (
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                {
                    this.props.resumeData.education && this.props.resumeData.education.map((item)=>{
                        return(
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>{item.UniversityName}</h3>
                                    <p className="info">
                                        {item.specialization}
                                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                                    <p>
                                    {item.Achievements}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    };
}