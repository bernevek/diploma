import React, {Component} from "react";
import { connect } from 'react-redux';
import * as userPolicyActions from "../../../actions/userPolicy"
import {UserPolicyItem} from "./userPolicyItem/index";
import { Link } from "react-router-dom";

export class UserPolicyList extends Component {
    state = {
        policies: null,
    }
    componentDidMount() {
        this.getPolicies();
    }

    componentDidUpdate(prevProps) {
        if(this.props.policies !== prevProps.policies) {
            this.setState({
                policies: this.props.policies
            })
        }
    }

    getPolicies = () => {
        this.props.getPolicies();
    }

    deletePolicy = (policyId) => {
        this.props.deletePolicy(policyId);
    }

    render() {
        if (!this.state.policies) {
            return (
                <div className="container">
                    <img alt="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-12">
                                    <br/>
                                    User Policies
                                </div>
                            </div>
                            <div>
                                <div>
                                    <ul className="list-group">
                                        {this.state.policies.map((policy, i) => {
                                            return (
                                                <div key={i}>
                                                    <UserPolicyItem
                                                        item={policy}
                                                        deleteItem={this.deletePolicy}/>
                                                </div>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link className="float" to="/userPolicy">
                        <i color="primary" className="material-icons">add</i>
                    </Link>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        policies: state.userPolicy.userPolicies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePolicy: (policyId) => {
            dispatch(userPolicyActions.deleteUserPolicy(policyId));
        },
        getPolicies: () => {
            dispatch(userPolicyActions.getUserPolicies());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPolicyList);
