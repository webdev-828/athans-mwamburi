import React from 'react';
import axios from 'axios';
import Header from './../Header';
import Body from './../Body';
import Footer from './../Footer';

const Layout = ({resumeData}) => {
    
    React.useEffect(() => {
        axios.post('http://192.168.1.125:5000/api/addVisitor', {name: resumeData.name})
        .then(res => {
            console.log(res)
        })
    }, [])

    return (
        <React.Fragment>
            <Header resumeData={resumeData}/>
            <Body resumeData={resumeData}/>
            <Footer resumeData={resumeData}/>
        </React.Fragment>
    )
}

export default Layout;