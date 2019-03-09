import React, {Component} from "react";
import { connect } from 'react-redux';
import * as usersActions from "../../../actions/users"
import * as userPolicyActions from "../../../actions/userPolicy"
import {UserItem} from "./userItem/index";
import Select from "react-select";

export class UserList extends Component {
    state = {
        item: {
            login: null,
            password: null,
            userPolicyId: null
        },
        users: null,
        policies: null,
    }
    componentDidMount() {
        this.getPolicies();
        this.getUsers();
    }

    componentDidUpdate(prevProps) {
        if(this.props.users !== prevProps.users) {
            this.setState({
                users: this.props.users
            })
        }
        if(this.props.policies !== prevProps.policies) {
            this.setState({
                policies: this.props.policies
            })
        }
    }
    changeLogin = (e) => {
        var value = e.target.value;
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                login: value
            }
        }));
    }
    changePassword = (e) => {
        var value = e.target.value;
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                password: value
            }
        }));
    }
    changePolicy = (policy) => {
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                userPolicyId: policy.value
            }
        }));
    }
    getPolicies = () => {
        this.props.getPolicies();
    }

    getUsers = () => {
        this.props.getUsers();
    }

    addUser = (user) => {
        this.props.addUser(user);
    }

    updateUser = (user) => {
        this.props.updateUser(user);
    }

    deleteUser = (userId) => {
        this.props.deleteUser(userId);
    }

    render() {
        if (!this.state.users || !this.state.policies) {
            return (
                <div className="container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>
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
                                    Users
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={this.state.item.login}
                                            onChange={this.changeLogin}
                                            placeholder="Login"
                                        />
                                </div>
                                <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            defaultValue={this.state.item.password}
                                            onChange={this.changePassword}
                                            placeholder="Password"
                                        />
                                </div>
                                <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                                        <Select options={this.state.policies}
                                                defaultValue={this.state.policies[0]}
                                                onChange={(policy) => {
                                                    this.changePolicy(policy);
                                                }}
                                        />
                                </div>
                                <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                                    <button
                                        type="button"
                                        className="btn btn-md btn-success"
                                        onClick={() => this.addUser(this.state.item)}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <ul className="list-group">
                                        {this.state.users.map((user, i) => {
                                            return (
                                                <div key={i}>
                                                    <UserItem
                                                        item={user}
                                                        policies={this.state.policies}
                                                        updateItem={this.updateUser}
                                                        deleteItem={this.deleteUser}/>
                                                </div>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        policies: state.userPolicy.userPolicies,
        users: state.users.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(usersActions.getUsers());
        },
        addUser: (user) => {
            dispatch(usersActions.addUser(user));
        },
        updateUser: (user) => {
            dispatch(usersActions.updateUser(user));
        },
        deleteUser: (userId) => {
            dispatch(usersActions.deleteUser(userId));
        },
        getPolicies: () => {
            dispatch(userPolicyActions.getUserPolicies());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);
