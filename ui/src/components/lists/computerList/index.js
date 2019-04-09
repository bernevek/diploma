import React, {Component} from "react";
import { connect } from 'react-redux';
import * as computersActions from "../../../actions/computers"
import * as computerPolicyActions from "../../../actions/computerPolicy"
import {ComputerItem} from "./computerItem/index";

export class ComputerList extends Component {
    state = {
        computers: null,
        policies: null,
    }
    componentDidMount() {
        this.getPolicies();
        this.getComputers();
    }

    componentDidUpdate(prevProps) {
        if(this.props.computers !== prevProps.computers) {
            this.setState({
                computers: this.props.computers
            })
        }
        if(this.props.policies !== prevProps.policies) {
            this.setState({
                policies: this.props.policies
            })
        }
    }
    changePolicy = (policy) => {
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                computerPolicyId: policy.value
            }
        }));
    }
    getPolicies = () => {
        this.props.getPolicies();
    }

    getComputers = () => {
        this.props.getComputers();
    }

    updateComputer = (computer) => {
        this.props.updateComputer(computer);
    }

    deleteComputer = (computerId) => {
        this.props.deleteComputer(computerId);
    }

    render() {
        if (!this.state.computers || !this.state.policies) {
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
                                    Computers
                                </div>
                            </div>
                            <div>
                                <div>
                                    <ul className="list-group">
                                        {this.state.computers.map((computer, i) => {
                                            return (
                                                <div key={i}>
                                                    <ComputerItem
                                                        item={computer}
                                                        policies={this.state.policies}
                                                        updateItem={this.updateComputer}
                                                        deleteItem={this.deleteComputer}/>
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
        policies: state.computerPolicy.computerPolicies,
        computers: state.computers.computers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getComputers: () => {
            dispatch(computersActions.getComputers());
        },
        updateComputer: (computer) => {
            dispatch(computersActions.updateComputer(computer));
        },
        deleteComputer: (computerId) => {
            dispatch(computersActions.deleteComputer(computerId));
        },
        getPolicies: () => {
            dispatch(computerPolicyActions.getComputerPolicies());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ComputerList);
