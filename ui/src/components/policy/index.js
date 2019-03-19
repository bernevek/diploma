import React, {Component} from "react";
import { connect } from 'react-redux';
import Select from 'react-select';
import {getLoginMethods} from "../../actions/loginMethods";
import {getApplications} from "../../actions/applications";
import {getSites} from "../../actions/sites";
import { Link } from "react-router-dom";


export class Policy extends Component {

    componentDidMount() {
        this.props.getApplications();
        this.props.getSites();
        this.props.getLoginMethods();
    }

    render() {
        if (!this.props.applications ||
            !this.props.sites ||
            !this.props.loginMethods ||
            !this.props.policy
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
                        <h2>
                            {this.props.policyType} policy:
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={this.props.policy.name}
                                onChange={(e) => {
                                    this.props.setPolicyName(e.target.value);
                                }}
                                placeholder="Name"
                            />
                        </h2>
                        <h3>Banned apps</h3>
                        <Select isMulti options={this.props.applications}
                                defaultValue={this.props.policy.bannedApps}
                                onChange={(apps) => {
                                    this.props.setBannedApps(apps);
                                }}
                        />
                        <hr/>
                        <h3>Banned sites</h3>
                        <Select isMulti options={this.props.sites}
                                defaultValue={this.props.policy.bannedSites}
                                onChange={(sites) => {
                                    this.props.setBannedSites(sites);
                                }}
                        />
                        <hr/>
                        <h3>Login methods</h3>
                        <Select isMulti options={this.props.loginMethods}
                                defaultValue={this.props.policy.loginMethods}
                                onChange={(loginMethods) => {
                                    this.props.setLoginMethods(loginMethods);
                                }}
                        />
                        <hr/>
                    </div>
                    <div>
                        <Link className="btn btn-md btn-outline-primary" to="/userPolicies">Cancel</Link>
                        &nbsp;
                        <button
                            type="button"
                            className="btn btn-md btn-primary"
                            onClick = {this.props.savePolicy}
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
        applications: state.applications.applications,
        loginMethods: state.loginMethods.loginMethods,
        sites: state.sites.sites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
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
)(Policy);
