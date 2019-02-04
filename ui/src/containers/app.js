import React, { Component } from 'react';
import { Route } from 'react-router';

import AppNavbarHeader from '../components/appNavbarHeader';
import ComputerPolicy from '../components/computerPolicy';
import UserPolicy from '../components/userPolicy';
import app from '../App'

class App extends Component {
    render() {
        return (
            <div>
                <AppNavbarHeader/>
                <Route exact path="/" component={app}/>
                <Route path="/computerPolicy/:computerPolicyId?" component={ComputerPolicy}/>
                <Route path="/userPolicy/:userPolicyId?" component={UserPolicy}/>
            </div>
        );
    }
}

export default App;
