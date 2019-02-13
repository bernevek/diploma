import React, {Component} from "react";
import { connect } from 'react-redux';

export class UserPolicy extends Component {
    state = {
        userPolicy: {
            name: "Default policy",
            bannedApps: [
                "WORD",
                "NOTEPAD"
            ],
            bannedSites: [
                "vk.com"
            ],
            loginMethods: [
                "qwerty"
            ],
            enableRDP: false
        },
        applications: [
            "WORD",
            "NOTEPAD",
            "EXEL"
        ],
        sites: [
            "vk.com",
            "facebook.com"
        ],
        loginMethods: [
            "qwerty",
            "12345698"
        ]
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="container">
                <h2>User policy: {this.state.userPolicy.name}</h2>
                <h3>Banned apps</h3>
                <hr/>
                <h3>Banned sites</h3>
                <hr/>
                <h3>Login methods</h3>
                <hr/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPolicy);
