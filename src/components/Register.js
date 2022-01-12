import React, { Component } from "react";

import { registerUser } from '../api/index';

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
        registerUser(this.state);
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

                    <label for="name">
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

                    <label for="email">
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