import React, {Component} from "react";
import Select from 'react-select';

export class ComputerItem extends Component {

    changePolicy = (policy) => {
        this.props.updateItem({
            id: this.props.item.id,
            computerPolicyId: policy.value
        });
    }

    render() {
        if (!this.props.item.id || !this.props.policies) {
            return (
                <div>
                </div>
            )
        } else {
            return (
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-2 col-xl-2 col-lg-2 col-sm-2 col-2">
                            {this.props.item.localId}
                        </div>
                        <div className="col-md-2 col-xl-2 col-lg-2 col-sm-2 col-2">
                            {this.props.item.computerName}
                        </div>
                        <div className="col-md-2 col-xl-2 col-lg-2 col-sm-2 col-2">
                            {this.props.item.localUserName}
                        </div>
                        <div className="col-md-2 col-xl-2 col-lg-2 col-sm-2 col-2">
                            {this.props.item.ip}
                        </div>
                        <div className="col-md-2 col-xl-2 col-lg-2 col-sm-2 col-2">
                            <Select options={this.props.policies}
                                defaultValue={this.props.policies.filter(policy => policy.value === this.props.item.computerPolicyId)[0]}
                                onChange={(policy) => {
                                    this.changePolicy(policy);
                                }}
                            />
                            &nbsp;
                        </div>
                        <div className="col-md-2 col-xl-2 col-lg-2 col-sm-2 col-2">
                            <button
                                type="button"
                                className="btn btn-md btn-danger"
                                onClick={() => this.props.deleteItem(this.props.item.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </li>
            )
        }
    }
}