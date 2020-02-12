import React from 'react';
import Item from './Item';

export default class Education extends React.Component {
    render() {
        return (
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                    {
                        this.props.resumeData.education && this.props.resumeData.education.map((item, index)=>{
                            return(
                                <Item item = {item} key = {index} />
                            )
                        })
                    }
                </div>
            </div>
        )
    };
}