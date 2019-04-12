import React, {Component} from "react";
import Select from 'react-select';

export class UserItem extends Component {
    state = {
        item: {
            id: null,
            login: null,
            password: null,
            userPolicyId: null,
            computerId: null
        },
        edit: false
    }

    componentDidMount() {
        this.setState({
            item: this.props.item
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.item !== prevProps.item) {
            this.setState({
                item: this.props.item
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

    render() {
        if (!this.state.item.id || !this.props.policies) {
            return (
                <div>
                </div>
            )
        } else {
            return (
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                            {this.state.edit ? (
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={this.state.item.login}
                                    onChange={this.changeLogin}
                                    placeholder="Login"
                                />
                            ) : (
                                this.state.item.login
                            )}
                        </div>
                        {this.state.edit ? (
                            <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    defaultValue={this.state.item.password}
                                    onChange={this.changePassword}
                                    placeholder="Password"
                                />
                            </div>
                        ) : (
                            <div></div>
                        )}
                        <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                            {this.state.edit ? (
                                <Select options={this.props.policies}
                                        defaultValue={this.props.policies.filter(policy => policy.value === this.state.item.userPolicyId)[0]}
                                        onChange={(policy) => {
                                            this.changePolicy(policy);
                                        }}
                                />
                            ) : (
                                this.props.policies.filter(policy => policy.value === this.state.item.userPolicyId)[0].label
                            )}
                        </div>
                        {this.state.edit ? (
                            <div></div>
                        ) : (
                            <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                                {this.state.item.computerId}
                            </div>
                        )}
                        <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                            {this.state.edit ? (
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-md btn-success"
                                        onClick={() => {
                                            this.props.updateItem(this.state.item);
                                            this.setState({
                                                edit: false
                                            });
                                        }}
                                    >
                                        Update
                                    </button>
                                    &nbsp;
                                    <button
                                        type="button"
                                        className="btn btn-md btn-outline-primary"
                                        onClick={() => {
                                            this.setState({
                                                item: this.props.item,
                                                edit: false
                                            });
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-md btn-primary"
                                        onClick={() => {
                                            this.setState({
                                                edit: true
                                            });
                                        }}
                                    >
                                        Edit
                                    </button>
                                    &nbsp;
                                    <button
                                        type="button"
                                        className="btn btn-md btn-danger"
                                        onClick={() => this.props.deleteItem(this.state.item.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </li>
            )
        }
    }
}