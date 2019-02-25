import React, {Component} from "react";
import { connect } from 'react-redux';
import * as userPolicyActions from "../../actions/userPolicy"
import Policy from "../policy";

export class UserPolicy extends Component {
    state = {
        policy: null,
    }

    componentDidMount() {
        this.getPolicy(1);
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

    savePolicy = () => {
        this.props.savePolicy(this.state.policy);
    }

    render() {

        if (!this.state.policy) {
            return (
                <div className="container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
                </div>
            )
        } else {
            return (
                <Policy policyType = "User" policy={this.state.policy}
                            setBannedApps={(apps) => {
                                this.setState(prevState => ({
                                    policy: {
                                        ...prevState.policy,
                                        bannedApps: apps
                                    }
                                }))
                            }}
                            setBannedSites={(sites) => {
                                this.setState(prevState => ({
                                    policy: {
                                        ...prevState.policy,
                                        bannedSites: sites
                                    }
                                }))
                            }}
                            setLoginMethods={(loginMethods) => {
                                this.setState(prevState => ({
                                    policy: {
                                        ...prevState.policy,
                                        loginMethods: loginMethods
                                    }
                                }))
                            }}
                            savePolicy={this.savePolicy}/>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        policy: state.userPolicy.userPolicy,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPolicy: (policyId) => {
            dispatch(userPolicyActions.getUserPolicy(policyId));
        },
        savePolicy: (policy) => {
            dispatch(userPolicyActions.saveUserPolicy(policy));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPolicy);
