import React, { Component } from 'react';
import { Route } from 'react-router';

import AppNavbarHeader from '../components/appNavbarHeader';
import ComputerPolicy from '../components/computerPolicy';
import UserPolicy from '../components/userPolicy';
import app from '../App'
import AppList from "../components/lists/appList";
import SiteList from "../components/lists/siteList";

class App extends Component {
    render() {
        return (
            <div>
                <AppNavbarHeader/>
                <Route exact path="/" component={app}/>
                <Route path="/computerPolicy/:computerPolicyId?" component={ComputerPolicy}/>
                <Route path="/userPolicy/:userPolicyId?" component={UserPolicy}/>
                <Route path="/applications" component={AppList}/>
                <Route path="/sites" component={SiteList}/>
            </div>
        );
    }
}

export default App;
