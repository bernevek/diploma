import React, {Component} from "react";
import { connect } from 'react-redux';
import * as sitesActions from "../../../actions/sites"
import {ConfigElementList} from "../configElementList";

export class SiteList extends Component {
    state = {
        sites: null,
    }

    componentDidMount() {
        this.getSites();
    }

    componentDidUpdate(prevProps) {
        if(this.props.sites !== prevProps.sites) {
            this.setState({
                sites: this.props.sites
            })
        }
    }

    componentWillUnmount() {

    }

    getSites = () => {
        this.props.getSites();
    }

    addSite = (site) => {
        this.props.addSite(site);
    }

    updateSite = (site) => {
        this.props.updateSite(site);
    }

    deleteSite = (siteId) => {
        this.props.deleteSite(siteId);
    }

    render() {
        return(
            <ConfigElementList
                name={"Sites"}
                configElements={this.state.sites}
                addItem={this.addSite}
                updateItem={this.updateSite}
                deleteItem={this.deleteSite}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sites: state.sites.sites,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSites: () => {
            dispatch(sitesActions.getSites());
        },
        addSite: (site) => {
            dispatch(sitesActions.addSite(site));
        },
        updateSite: (site) => {
            dispatch(sitesActions.updateSite(site));
        },
        deleteSite: (siteId) => {
            dispatch(sitesActions.deleteSite(siteId));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SiteList);
