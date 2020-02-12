import React, { Component } from 'react';
import Item from './Item';

export default class Porfolio extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Works.</h1>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {
                            resumeData.portfolio && resumeData.portfolio.map((item, index)=>{
                                return(
                                    <Item item = {item} key = {index} />
                                )
                            })
                        }
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}