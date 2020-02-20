import React, { Component } from 'react';
import axios from 'axios';

export default class ContactUs extends Component {
    state = {
        name: String,
        email: String,
        number: String,
        message: String,
        mailers: Array
    }

    handleChangeName = (event) => {
        this.setState({name: event.target.value});
    };

    handleChangeEmail = (event) => {
        this.setState({email: event.target.value});
    };

    handleChangeNumber = (event) => {
        this.setState({number: event.target.value});
    };

    handleChangeMessage = (event) => {
        this.setState({message: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const mail = {
            name: this.state.name,
            email: this.state.email,
            number: this.state.number,
            message: this.state.message
        };
        var self = this
        axios.post('https://athanas-mailer.herokuapp.com/mail/contact', {mail: mail})
        .then(res => {
            console.log(res.status)
            if (res.status === 200) {
                console.log('here')
                self.setState({name: '', email: '', number: '', message: ''})
            }
        })
    }

    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                            Feel free to contact me for any work or suggestions below
                        </p>
                    </div>
                </div>
                <div className="row">
                    <aside className="eigth columns footer-widgets">
                        <div className="widget">
                            <h4>Linked in : {resumeData.linkedinId}</h4>
                        </div>
                    </aside>
                </div>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" defaultValue = {this.state.name} onChange = {this.handleChangeName} placeholder = "name"/>
                        <input type="email" defaultValue = {this.state.email} onChange = {this.handleChangeEmail} placeholder = "email *" required/>
                        <input type="tel" defaultValue = {this.state.number} onChange = {this.handleChangeNumber} placeholder = "phone number"/>
                        <textarea defaultValue = {this.state.message} cols = "20" rows = "10" onChange = {this.handleChangeMessage} placeholder = "Message"></textarea>
                        <input type="submit" value="Send Message" style={{backgroundColor: 'blue', color: 'white', width: '20%', borderRadius: 15}}/>
                    </form>
                </div>
            </section>
        );
    }
}