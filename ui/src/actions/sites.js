import axios from 'axios';
import * as api from "../constants/apiEndpoints";
import * as types from '../constants/actionsConstants';

export function addSite(site){
    return (dispatch) => {
        dispatch(addSiteStart());
        return axios.post(api.addSiteUrl(), site)
            .then(response => {
                dispatch(addSiteSuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error.request.response).reason)
                dispatch(addSiteFail(error.message));
            });
    }
}

export const addSiteStart = () => ({
    type: types.ADD_SITE_START
});

export const addSiteSuccess = (response) => ({
    type: types.ADD_SITE_SUCCESS,
    response
});

export const addSiteFail = (errorMsg) => ({
    type: types.ADD_SITE_FAIL,
    errorMsg,
});

export function updateSite(site){
    return (dispatch) => {
        dispatch(updateSiteStart());
        return axios.put(api.updateSiteUrl(), site)
            .then(response => {
                dispatch(updateSiteSuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error))
                dispatch(updateSiteFail(error.message));
            });
    }
}

export const updateSiteStart = () => ({
    type: types.UPDATE_SITE_START
});

export const updateSiteSuccess = (response) => ({
    type: types.UPDATE_SITE_SUCCESS,
    response
});

export const updateSiteFail = (errorMsg) => ({
    type: types.UPDATE_SITE_FAIL,
    errorMsg,
});


export function deleteSite(siteId){
    return (dispatch) => {
        dispatch(deleteSiteStart());
        return axios.delete(api.deleteSiteUrl(siteId))
            .then(response => {
                dispatch(deleteSiteSuccess(response));
            })
            .catch((error) => {
                console.log(error)
                alert(JSON.parse(error))
                dispatch(deleteSiteFail(error.message));
            });
    }
}

export const deleteSiteStart = () => ({
    type: types.DELETE_SITE_START
});

export const deleteSiteSuccess = (response) => ({
    type: types.DELETE_SITE_SUCCESS,
    response
});

export const deleteSiteFail = (errorMsg) => ({
    type: types.DELETE_SITE_FAIL,
    errorMsg,
});

export function getSites(){
    return (dispatch) => {
        dispatch(getSitesStart());
        return axios.get(api.getSitesUrl())
            .then(response => {
                dispatch(getSitesSuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error.request.response).reason)
                dispatch(getSitesFail(error.message));
            });
    }
}

export const getSitesStart = () => ({
    type: types.GET_SITES_START
});

export const getSitesSuccess = (response) => ({
    type: types.GET_SITES_SUCCESS,
    response
});

export const getSitesFail = (errorMsg) => ({
    type: types.GET_SITES_FAIL,
    errorMsg,
});