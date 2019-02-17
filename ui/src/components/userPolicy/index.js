import React, {Component} from "react";
import { connect } from 'react-redux';
import Select from 'react-select';
import * as userPolicyActions from "../../actions/userPolicy"
import { getApplications } from "../../actions/applications"
import { getSites } from "../../actions/sites"
import { getLoginMethods } from "../../actions/loginMethods"

export class UserPolicy extends Component {
    state = {
        policy: null,
    }

    componentDidMount() {
        this.getPolicy();
    }

    componentDidUpdate(prevProps) {
        if(this.props.policy !== prevProps.policy)
            this.setState({
                policy: this.props.policy
            })
    }

    componentWillUnmount() {

    }

    getPolicy = (policyId) => {
        this.props.getApplications();
        this.props.getSites();
        this.props.getLoginMethods();
        this.props.getPolicy(policyId);
    }

    savePolicy = () => {
        this.props.savePolicy(this.state.policy);
    }

    render() {
        if (!this.state.policy ||
            !this.props.applications ||
            !this.props.sites ||
            !this.props.loginMethods
        ) {
            return (
                <div className="container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div>
                        <h2>User policy: {this.state.policy.name}</h2>
                        <h3>Banned apps</h3>
                        <Select isMulti options={this.props.applications}
                                defaultValue={this.state.policy.bannedApps}
                                onChange={(apps) => {
                                    this.setState(prevState => ({
                                        policy: {
                                            ...prevState.policy,
                                            bannedApps: apps
                                        }
                                    }))
                                }}
                        />
                        <hr/>
                        <h3>Banned sites</h3>
                        <Select isMulti options={this.props.sites}
                                defaultValue={this.state.policy.bannedSites}
                                onChange={(sites) => {
                                    this.setState(prevState => ({
                                        policy: {
                                            ...prevState.policy,
                                            bannedSites: sites
                                        }
                                    }))
                                }}
                        />
                        <hr/>
                        <h3>Login methods</h3>
                        <Select isMulti options={this.props.loginMethods}
                                defaultValue={this.state.policy.loginMethods}
                                onChange={(loginMethods) => {
                                    this.setState(prevState => ({
                                        policy: {
                                            ...prevState.policy,
                                            loginMethods: loginMethods
                                        }
                                    }))
                                }}
                        />
                        <hr/>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-md btn-outline-primary"
                        >
                            Cancel
                        </button>
                        &nbsp;
                        <button
                            type="button"
                            className="btn btn-md btn-primary"
                            onClick = {this.savePolicy}
                        >
                            Save
                        </button>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        policy: state.userPolicy.userPolicy,
        applications: state.applications.applications,
        loginMethods: state.loginMethods.loginMethods,
        sites: state.sites.sites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPolicy: (policyId) => {
            dispatch(userPolicyActions.getUserPolicy(policyId));
        },
        savePolicy: (policy) => {
            dispatch(userPolicyActions.saveUserPolicy(policy));
        },
        getApplications: () => {
            dispatch(getApplications())
        },
        getSites: () => {
            dispatch(getSites())
        },
        getLoginMethods: () => {
            dispatch(getLoginMethods())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPolicy);
