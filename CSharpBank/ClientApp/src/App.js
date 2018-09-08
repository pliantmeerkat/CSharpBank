import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
export default class App extends Component {
    displayName = App.name
    constructor() {
        super();
        this.state = {
            currentUser: null
        };
    }

    render() {
        if (this.state.currentUser === null) {
            return (
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/login' component={Login} />
                </Layout>
            );
        } else {
            return (
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/logout' component={SignUp} />
                    <Route exact path='/account' component={SignUp} />
                    <Route exact path='/payments' component={SignUp} />
                </Layout>
            );
        }
  }
}
