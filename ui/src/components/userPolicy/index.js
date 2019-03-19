import React, {Component} from "react";
import { connect } from 'react-redux';
import * as userPolicyActions from "../../actions/userPolicy"
import Policy from "../policy";

export class UserPolicy extends Component {
    state = {
        policy: null
    }

    componentDidMount() {
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

    savePolicy = () => {
        if (this.props.match.params.userPolicyId) {
            this.props.updatePolicy(this.state.policy);
        } else {
            this.props.addPolicy(this.state.policy);
        }
    }

    render() {

        if (!this.state.policy && this.props.match.params.userPolicyId) {
            return (
                <div className="container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
                </div>
            )
        } else {
            return (
                <Policy policyType = "User" policy={this.state.policy}
                            setPolicyName={(name) => {
                                this.setState(prevState => ({
                                    policy: {
                                        ...prevState.policy,
                                        name: name
                                    }
                                }))
                            }}
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
        updatePolicy: (policy) => {
            dispatch(userPolicyActions.updateUserPolicy(policy));
        },
        addPolicy: (policy) => {
            dispatch(userPolicyActions.addUserPolicy(policy));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPolicy);
