import React, { Component } from 'react'
import { Glyphicon, InputGroup } from 'react-bootstrap';
import './UserLogin.css';

export class Login extends Component {
    displayName = Login.name

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        }

    }

    render() {
        return (
            <div className='signInDiv' align="center">
                <input type='text' class='form-control' placeholder='username' id='usernameEnter' onChange={() => this.setUsername.bind(this)} />
                <input type='text' class='form-control' placeholder='password' id='passwordEnter' onChange={() => this.setPassword.bind(this)} />
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

    submitUserDetails() {
        // todo write fetch
    }
}