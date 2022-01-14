import React, { Component } from "react";

import { registerUser } from '../api/index';

// help from https://youtu.be/AWLgf_xfd_w channel edutechional
class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: ''
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onFormSubmit(event) {
        console.log('register state: ', this.state);
        registerUser(this.state).then((response) => {
            console.log('response: ', response);
            const { email } = response.data;
            this.props.setLogins(prev => [...prev, {email, name:this.state.name}])
            return response;
        }).catch(err => {
            console.log('fail error: ', err);
            alert('registration failed: ', err);
        });
        alert('Registrating complete!');
        event.preventDefault();
    }

    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <label>
                            Register
                        </label>
                    </div>

                    <label htmlFor="name">
                        Name: 
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="john"
                        value={this.state.name}
                        onChange={this.onInputChange}
                        required
                    />

                    <label htmlFor="email">
                        Email: 
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="john@gmail.com" 
                        value={this.state.email} 
                        onChange={this.onInputChange}
                        required
                    />

                    <button type="submit">
                        Register
                    </button>
                </form>
            </div>
        );
    }
}

export default Register;