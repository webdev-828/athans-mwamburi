import React from 'react';
import axios from 'axios';
import Portfolio from './Portfolio';
import NotFound from './NotFound';

const Layout = ({path}) => {
    const [isLoaded, setLoaded] = React.useState(false);
    const [resume, setResume] = React.useState(undefined);
    React.useEffect(() => {
        axios.get('https://athanas-mailer.herokuapp.com/api/resume')
        .then(res => {
            var myResume = res.data.resume[`${path}`];
            console.log(myResume)
            setResume(myResume);
            setLoaded(true);
        })
    }, []);
    
    return (
        <React.Fragment>
            {isLoaded && resume !== undefined ?
                <React.Fragment>
                    <Portfolio resumeData = {resume} />
                </React.Fragment>
            :
                <NotFound />
            }
        </React.Fragment>
    )
}

export default Layout;