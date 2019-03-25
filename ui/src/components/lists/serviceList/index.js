import React, {Component} from "react";
import { connect } from 'react-redux';
import * as servicesActions from "../../../actions/services"
import {ConfigElementList} from "../configElementList";

export class ServiceList extends Component {
    state = {
        services: null,
    }

    componentDidMount() {
        this.getServices();
    }

    componentDidUpdate(prevProps) {
        if(this.props.services !== prevProps.services) {
            this.setState({
                services: this.props.services
            })
        }
    }

    componentWillUnmount() {

    }

    getServices = () => {
        this.props.getServices();
    }

    addService = (service) => {
        this.props.addService(service);
    }

    updateService = (service) => {
        this.props.updateService(service);
    }

    deleteService = (serviceId) => {
        this.props.deleteService(serviceId);
    }

    render() {
        return(
            <ConfigElementList
                name={"Services"}
                configElements={this.state.services}
                addItem={this.addService}
                updateItem={this.updateService}
                deleteItem={this.deleteService}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        services: state.services.services,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getServices: () => {
            dispatch(servicesActions.getServices());
        },
        addService: (service) => {
            dispatch(servicesActions.addService(service));
        },
        updateService: (service) => {
            dispatch(servicesActions.updateService(service));
        },
        deleteService: (serviceId) => {
            dispatch(servicesActions.deleteService(serviceId));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServiceList);
