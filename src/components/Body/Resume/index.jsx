import React from 'react';
import Education from './Education';
import Work from './Work';
import Skill from './Skill';

export default class Resume extends React.Component {
    render() {
        return (
            <section id = "resume">
                <Education resumeData = {this.props.resumeData} />
                <Work resumeData = {this.props.resumeData} />
                <Skill resumeData = {this.props.resumeData} />
            </section>
        );
    };
};