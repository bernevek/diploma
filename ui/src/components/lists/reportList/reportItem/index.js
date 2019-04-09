import React, {Component} from "react";

export class ReportItem extends Component {

    render() {
        if (!this.props.item.id) {
            return (
                <div>
                </div>
            )
        } else {
            return (
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                            {this.props.item.userName}
                        </div>
                        <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                            {this.props.item.computerName}
                        </div>
                        <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                            {this.props.item.loginTime}
                        </div>
                        <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-3">
                            {this.props.item.logoutTime}
                        </div>
                    </div>
                </li>
            )
        }
    }
}