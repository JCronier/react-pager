import React, { Component } from "react";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label for="name">
                        Name: 
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="john"
                        value={this.state.name}
                        required
                    />
                    <label for="email">
                        email: 
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="john@gmail.com" 
                        value={this.state.email} 
                        required
                    />
                </form>
            </div>
        )
    }
}

export default Register;