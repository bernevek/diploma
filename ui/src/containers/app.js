import React, { Component } from 'react';
import { Route } from 'react-router';

import AppNavbarHeader from '../components/appNavbarHeader';
import ComputerPolicy from '../components/computerPolicy';
import UserPolicy from '../components/userPolicy';
import app from '../App'
import AppList from "../components/lists/appList";
import SiteList from "../components/lists/siteList";
import ServiceList from "../components/lists/serviceList";
import UserList from "../components/lists/userList/index";
import UserPolicyList from "../components/lists/userPolicyList";
import ComputerPolicyList from "../components/lists/computerPolicyList";
import ComputerList from "../components/lists/computerList";
import ReportList from "../components/lists/reportList";

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
                <Route path="/services" component={ServiceList}/>
                <Route path="/users" component={UserList}/>
                <Route path="/computers" component={ComputerList}/>
                <Route path="/userPolicies" component={UserPolicyList}/>
                <Route path="/computerPolicies" component={ComputerPolicyList}/>
                <Route path="/reports" component={ReportList}/>
            </div>
        );
    }
}

export default App;
