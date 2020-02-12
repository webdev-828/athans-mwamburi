import React, { Component } from 'react';
import Item from './Item';
export default class Footer extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            {
                                resumeData.socialLinks && resumeData.socialLinks.map((item, index)=>{
                                    return(
                                        <Item item = {item} key = {index} />
                                    )
                                })
                            }
                        </ul>                    
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                </div>
            </footer>
        );
    }
}