import React from 'react';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Testimonials from  './Testimonials';
import ContactUs from './ContactUs';

const Body = (props) => {
    return (
        <React.Fragment>
            <About resumeData={props.resumeData}/>
            <Resume resumeData={props.resumeData}/>
            <Portfolio resumeData={props.resumeData}/>
            <Testimonials resumeData={props.resumeData}/>
            <ContactUs resumeData={props.resumeData}/>
        </React.Fragment>
    );
};

export default Body;