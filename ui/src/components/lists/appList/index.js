import React, {Component} from "react";
import { connect } from 'react-redux';
import * as applicationsActions from "../../../actions/applications"
import {ConfigElementList} from "../configElementList";

export class AppList extends Component {
    state = {
        applications: null,
    }

    componentDidMount() {
        this.getApplications();
    }

    componentDidUpdate(prevProps) {
        if(this.props.applications !== prevProps.applications) {
            this.setState({
                applications: this.props.applications
            })
        }
    }

    componentWillUnmount() {

    }

    getApplications = () => {
        this.props.getApplications();
    }

    addApplication = (application) => {
        this.props.addApplication(application);
    }

    updateApplication = (application) => {
        // this.props.updateApplication(application);
    }

    deleteApplication = (applicationId) => {
        // this.props.deleteApplication(applicationId);
    }

    render() {
        return(
            <ConfigElementList
                name={"Applications"}
                configElements={this.state.applications}
                addItem={this.addApplication}
                updateItem={this.updateApplication}
                deleteItem={this.deleteApplication}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        applications: state.applications.applications,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getApplications: () => {
            dispatch(applicationsActions.getApplications());
        },
        addApplication: (application) => {
            dispatch(applicationsActions.addApplication(application));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppList);
