import React, {Component} from "react";
import {ConfigElementItem} from './configElementItem/index';

export class ConfigElementList extends Component {
    state = {
        item: {
            label: null,
            value: null
        }
    }
    changeLabel = (e) => {
        var value = e.target.value;
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                label: value
            }
        }));
    }
    changeValue = (e) => {
        var value = e.target.value;
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                value: value
            }
        }));
    }

    render() {
        if (!this.props.configElements) {
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
                                    {this.props.name}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4 col-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.changeLabel}
                                        placeholder="Label"
                                    />
                                </div>
                                <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4 col-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.changeValue}
                                        placeholder="Value"
                                    />
                                </div>
                                <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4 col-4">
                                    <button
                                        type="button"
                                        className="btn btn-md btn-success"
                                        onClick={() => this.props.addItem(this.state.item)}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <ul className="list-group">
                                        {this.props.configElements.map((configElement, i) => {
                                            return (
                                                <div key={i}>
                                                    <br/>
                                                    <ConfigElementItem
                                                        item={configElement}
                                                        updateItem={this.props.updateItem}
                                                        deleteItem={this.props.deleteItem}/>
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
