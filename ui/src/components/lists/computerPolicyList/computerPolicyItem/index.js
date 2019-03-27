import React, {Component} from "react";
import { Link } from "react-router-dom";

export class ComputerPolicyItem extends Component {
    state = {
        item: {
            id: null,
            name: null,
        }
    }

    componentDidMount() {
        this.setState({
            item: {
                id: this.props.item.value,
                name: this.props.item.label
            }
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.item !== prevProps.item) {
            this.setState({
                item: {
                    id: this.props.item.value,
                    name: this.props.item.label
                }
            })
        }
    }

    render() {
        if (!this.state.item) {
            return (
                <div>
                </div>
            )
        } else {
            return (
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                        </div>
                        <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                            {this.state.item.name}
                        </div>
                        <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                        </div>
                        <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                            <Link className="btn btn-md btn-primary" to={"/computerPolicy/" + this.state.item.id}>Edit</Link>
                            <button
                                type="button"
                                className="btn btn-md btn-danger"
                                onClick={() => this.props.deleteItem(this.state.item.id)}
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