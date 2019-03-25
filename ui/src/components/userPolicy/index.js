import React, {Component} from "react";
import { connect } from 'react-redux';
import Select from 'react-select';
import { Link } from "react-router-dom";
import * as userPolicyActions from "../../actions/userPolicy"
import * as applicationActions from "../../actions/applications";
import * as siteActions from "../../actions/sites";

export class UserPolicy extends Component {
    state = {
        policy: {
            name: "",
            bannedApps: [],
            bannedSites: [],
            users: []
        }
    }

    componentDidMount() {
        this.props.getApplications();
        this.props.getSites();
        if (this.props.match.params.userPolicyId){
            this.getPolicy(this.props.match.params.userPolicyId);
        }
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
        this.props.getPolicy(policyId);
    }

    setPolicyName = (name) => {
        this.setState(prevState => ({
            policy: {
                ...prevState.policy,
                name: name
            }
        }))
    }

    setBannedApps = (apps) => {
        this.setState(prevState => ({
            policy: {
                ...prevState.policy,
                bannedApps: apps
            }
        }))
    }

    setBannedSites = (sites) => {
        this.setState(prevState => ({
            policy: {
                ...prevState.policy,
                bannedSites: sites
            }
        }))
    }

    savePolicy = () => {
        if (this.props.match.params.userPolicyId) {
            this.props.updatePolicy(this.state.policy);
        } else {
            this.props.addPolicy(this.state.policy);
        }
    }

    render() {

        if (!this.props.applications ||
            !this.props.sites ||
            (!this.state.policy.id && this.props.match.params.userPolicyId)) {
            return (
                <div className="container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div>
                        <h2>
                            User policy:
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={this.state.policy.name}
                                onChange={(e) => {
                                    this.setPolicyName(e.target.value);
                                }}
                                placeholder="Name"
                            />
                        </h2>
                        <h3>Banned apps</h3>
                        <Select isMulti options={this.props.applications}
                                defaultValue={this.state.policy.bannedApps}
                                onChange={(apps) => {
                                    this.setBannedApps(apps);
                                }}
                        />
                        <hr/>
                        <h3>Banned sites</h3>
                        <Select isMulti options={this.props.sites}
                                defaultValue={this.state.policy.bannedSites}
                                onChange={(sites) => {
                                    this.setBannedSites(sites);
                                }}
                        />
                        <hr/>
                        <h3>Users</h3>
                        {this.state.policy.users.map((item, i) => {
                                return (<div key={i}>
                                    <h4>{item.login}</h4>
                                </div>)
                            }
                        )}
                        <hr/>
                    </div>
                    <div>
                        <Link className="btn btn-md btn-outline-primary" to="/userPolicies">Cancel</Link>
                        &nbsp;
                        <button
                            type="button"
                            className="btn btn-md btn-primary"
                            onClick={this.savePolicy}
                        >
                            Save
                        </button>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        policy: state.userPolicy.userPolicy,
        applications: state.applications.applications,
        sites: state.sites.sites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPolicy: (policyId) => {
            dispatch(userPolicyActions.getUserPolicy(policyId));
        },
        updatePolicy: (policy) => {
            dispatch(userPolicyActions.updateUserPolicy(policy));
        },
        addPolicy: (policy) => {
            dispatch(userPolicyActions.addUserPolicy(policy));
        },
        getApplications: () => {
            dispatch(applicationActions.getApplications())
        },
        getSites: () => {
            dispatch(siteActions.getSites())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPolicy);
