import React, {Component} from "react";
import { connect } from 'react-redux';
import * as reportsActions from "../../../actions/reports"
import * as computersActions from "../../../actions/computers"
import * as usersActions from "../../../actions/users"
import {ReportItem} from "./reportItem/index";
import Select from "react-select";

export class ReportList extends Component {
    state = {
        reportFilter: {
            userId: null,
            computerId: null,
            loginTime: null,
            logoutTime: null
        }
    }
    componentDidMount() {
        this.getComputers();
        this.getUsers();
    }

    setUserId = (user) => {
        this.setState(prevState => ({
            reportFilter: {
                ...prevState.reportFilter,
                userId: user.value
            }
        }));
    }

    setComputerId = (computer) => {
        this.setState(prevState => ({
            reportFilter: {
                ...prevState.reportFilter,
                computerId: computer.value
            }
        }));
    }

    setLoginTime = (time) => {
        console.log(time);
        // this.setState(prevState => ({
        //     reportFilter: {
        //         ...prevState.reportFilter,
        //         computerId: computer.value
        //     }
        // }));
    }

    setLogoutTime = (time) => {
        console.log(time);
        // this.setState(prevState => ({
        //     reportFilter: {
        //         ...prevState.reportFilter,
        //         computerId: computer.value
        //     }
        // }));
    }

    getComputers = () => {
        this.props.getComputers();
    }

    getUsers = () => {
        this.props.getUsers();
    }

    getReports = () => {
        this.props.getReports(this.state.reportFilter);
    }

    render() {
        if (!this.props.computers || !this.props.users) {
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
                                    Reports
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 col-xl-2 col-lg-2 col-sm-2 col-2">
                                    <Select options={this.props.users.map(user => {
                                                return {
                                                    label: user.login,
                                                    value: user.id
                                                }
                                            })}
                                            onChange={(user) => {
                                                this.setUserId(user);
                                            }}
                                    />
                                </div>
                                <div className="col-md-2 col-xl-2 col-lg-2 col-sm-2 col-2">
                                    <Select options={this.props.computers.map(computer => {
                                                return {
                                                    label: computer.computerName,
                                                    value: computer.id
                                                }
                                            })}
                                            onChange={(computer) => {
                                                this.setComputerId(computer);
                                            }}
                                    />
                                </div>
                                <div className="col-md-2 col-xl-2 col-lg-2 col-sm-2 col-2">
                                </div>
                                <div className="col-md-2 col-xl-2 col-lg-2 col-sm-2 col-2">
                                </div>
                                <div className="col-md-1 col-xl-1 col-lg-1 col-sm-1 col-1">
                                    {this.state.reportFilter.userId && this.state.reportFilter.computerId ? (
                                        <button
                                            type="button"
                                            className="btn btn-md btn-success"
                                            onClick={() => this.getReports()}
                                        >
                                            Search
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            className="btn btn-md btn-success"
                                            disabled
                                        >
                                            Search
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <ul className="list-group">
                                        {this.props.reports ? (
                                            this.props.reports.map((report, i) => {
                                                return (
                                                    <div key={i}>
                                                        <ReportItem
                                                            item={report}
                                                        />
                                                    </div>
                                                )
                                            })
                                        ) : (
                                            <div/>
                                        )}
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
        computers: state.computers.computers,
        users: state.users.users,
        reports: state.reports.reports
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getComputers: () => {
            dispatch(computersActions.getComputers());
        },
        getUsers: () => {
            dispatch(usersActions.getUsers());
        },
        getReports: (reportFilter) => {
            dispatch(reportsActions.getReports(reportFilter))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReportList);
