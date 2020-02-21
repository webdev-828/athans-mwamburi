import React from 'react';
import axios from 'axios';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Porfolio = ({resumeData, name}) => {
    console.log(resumeData)
    React.useEffect(() => {
        axios.post('https://athanas-mailer.herokuapp.com//api/addVisitor', {name: name})
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

export default Porfolio;