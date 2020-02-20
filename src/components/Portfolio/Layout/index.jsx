import React from 'react';
import Header from './../Header';
import Body from './../Body';
import Footer from './../Footer';

const Layout = ({resumeData}) => {
    return (
        <React.Fragment>
            <Header resumeData={resumeData}/>
            <Body resumeData={resumeData}/>
            <Footer resumeData={resumeData}/>
        </React.Fragment>
    )
}

export default Layout;