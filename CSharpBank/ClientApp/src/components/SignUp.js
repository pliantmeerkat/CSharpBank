import React, { Component } from 'react'
import { Glyphicon, InputGroupAddon } from 'react-bootstrap';
import './UserLogin.css';


export class SignUp extends Component {
    displayName = SignUp.name

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            confirmPassword: null,
            email: null
        }
    }

    render() {
        return (
            <div className='signInDiv' align="center">
                <input type='text' class='form-control' placeholder='username' id='usernameEnter' onChange={() => this.setUsername.bind(this)} />
                <input type='text' class='form-control' placeholder='password' id='passwordEnter' onChange={() => this.setPassword.bind(this)} />
                <input type='text' class='form-control' placeholder='confirm password' id='confirmpasswordEnter' onChange={() => this.setConfirmPassword.bind(this)} />
                <input type='text' class='form-control' placeholder='email' id='emailEnter' onChange={() => this.setEmail.bind(this)} />
                <button class='imput-group-butn' id='Submit' onClick={() => this.submitUserDetails()}>Submit</button>
            </div>
            );
    }

    setUsername(e) {
        this.setState({ username: e.target.value });
    }

    setPassword(e) {
        this.setState({ password: e.target.value });
    }

    setConfirmPassword(e) {
        this.setState({ confirmPassword: e.target.value });
    }

    setEmail(e) {
        this.setState({ email: e.target.value });
    }

    submitUserDetails() {
        // todo write fetch
    }
}