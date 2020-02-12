import React from 'react';
import Item from './Item';

export default class Work extends React.Component {
    render() {
        return (
            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    { this.props.resumeData.work && this.props.resumeData.work.map((item, index) => {
                        return(
                            <Item item = {item} key = {index} />
                        )
                    })}
                </div> 
            </div>
        );
    };
};