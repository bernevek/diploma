import React, {Component} from "react";

export class ConfigElementItem extends Component {
    state = {
        item: {
            label: null,
            value: null
        },
        edit: false
    }
    componentDidMount() {
        this.setState({
            item: this.props.item
        })
    }
    componentDidUpdate(prevProps) {
        if(this.props.item !== prevProps.item) {
            this.setState({
                item: this.props.item
            })
        }
    }
    render() {
        return (
            <div className="row">
                <li className="list-group-item">
                    <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4 col-4">
                        {this.state.edit ? (
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={this.state.item.label}
                                onChange={(e) => {
                                    this.setState(prevState => ({
                                        item: {
                                            ...prevState.item,
                                            label: e.target.value
                                        }
                                    }));
                                }}
                                placeholder="Label"
                            />
                        ) : (
                            this.state.item.label
                        )}
                    </div>
                    <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4 col-4">
                        {this.state.edit ? (
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={this.state.item.value}
                                onChange={(e) => {
                                    this.setState(prevState => ({
                                        item: {
                                            ...prevState.item,
                                            value: e.target.value
                                        }
                                    }));
                                }}
                                placeholder="Value"
                            />
                        ) : (
                            this.state.item.value
                        )}
                    </div>
                    <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4 col-4">
                        {this.state.edit ? (
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-md btn-success"
                                    onClick={() => this.props.updateItem(this.state.item)}
                                >
                                    Update
                                </button>
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
                </li>
            </div>
        )
    }
}