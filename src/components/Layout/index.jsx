import React from 'react';
import axios from 'axios';
import Portfolio from './Portfolio';
import NotFound from './NotFound';

const Layout = ({path}) => {
    const [resume, setResume] = React.useState(undefined);
    React.useEffect(() => {
        axios.get('https://athanas-mailer.herokuapp.com/api/resume')
        .then(res => {
            var myResume = res.data.resume[`${path}`];
            setResume(myResume);
        })
    }, []);
    
    if (resume) {
        return <Portfolio resumeData = {resume} name = {resume.name}/>
    } else {
        return <NotFound />
    }
}

export default Layout;