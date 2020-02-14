import React from 'react';
import Item from './Item';

export default class Skill extends React.Component {
    render() {
        return (
            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                    <p>
                    {this.props.resumeData.skillsDescription}
                    </p>
                    <div className="bars">
                        <ul className="skills">
                            {this.props.resumeData.skills && this.props.resumeData.skills.map((item, index) => {
                                return(
                                    <Item item = {item} key = {index} />
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
};