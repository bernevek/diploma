import React, {Component} from "react";
import { connect } from 'react-redux';

export class ComputerPolicy extends Component {
    state = {
        user: undefined
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>computer policy</div>
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
)(ComputerPolicy);
