import React, {Component} from "react";
import { connect } from 'react-redux';
import Select from 'react-select';
import { Link } from "react-router-dom";
import * as computerPolicyActions from "../../actions/computerPolicy"
import * as serviceActions from "../../actions/services";

export class ComputerPolicy extends Component {
    state = {
        policy: {
            name: "",
            windowsServices: [],
            computers: []
        }
    }

    componentDidMount() {
        this.props.getServices();
        if (this.props.match.params.computerPolicyId){
            this.getPolicy(this.props.match.params.computerPolicyId);
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

    setBannedServices = (services) => {
        this.setState(prevState => ({
            policy: {
                ...prevState.policy,
                windowsServices: services
            }
        }))
    }

    savePolicy = () => {
        if (this.props.match.params.computerPolicyId) {
            this.props.updatePolicy(this.state.policy);
        } else {
            this.props.addPolicy(this.state.policy);
        }
    }

    render() {

        if (!this.props.services ||
            (!this.state.policy.id && this.props.match.params.computerPolicyId)) {
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
                            Computer policy:
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
                        <h3>Banned services</h3>
                        <Select isMulti options={this.props.services}
                                defaultValue={this.state.policy.windowsServices}
                                onChange={(services) => {
                                    this.setBannedServices(services);
                                }}
                        />
                        <hr/>
                        <h3>Computers</h3>
                        {this.state.policy.computers.map((item, i) => {
                                return (<div key={i}>
                                    <h4>{item.localId} {item.computerName}</h4>
                                </div>)
                            }
                        )}
                        <hr/>
                    </div>
                    <div>
                        <Link className="btn btn-md btn-outline-primary" to="/computerPolicies">Cancel</Link>
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
        policy: state.computerPolicy.computerPolicy,
        services: state.services.services
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPolicy: (policyId) => {
            dispatch(computerPolicyActions.getComputerPolicy(policyId));
        },
        updatePolicy: (policy) => {
            dispatch(computerPolicyActions.updateComputerPolicy(policy));
        },
        addPolicy: (policy) => {
            dispatch(computerPolicyActions.addComputerPolicy(policy));
        },
        getServices: () => {
            dispatch(serviceActions.getServices())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ComputerPolicy);
