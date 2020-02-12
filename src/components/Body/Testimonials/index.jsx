import React, { Component } from 'react';
import Item from './Item';

export default class Testimonials extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="testimonials">
                <div className="text-container">
                    <div className="row">
                        <div className="two columns header-col">
                        <h1><span>Client Testimonials</span></h1>
                        </div>
                        <div className="ten columns flex-container">
                        <div className="flexslider">
                            <ul className="slides">
                                {
                                    resumeData.testimonials && resumeData.testimonials.map((item, index)=>{
                                        return(
                                            <Item item = {item} key = {index} />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        </div>
                    </div> 
                </div> 
            </section>
        );
    };
};