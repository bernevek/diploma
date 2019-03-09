import axios from 'axios';
import * as api from "../constants/apiEndpoints";
import * as types from '../constants/actionsConstants';

export function addApplication(application){
    return (dispatch) => {
        dispatch(addApplicationStart());
        return axios.post(api.addApplicationUrl(), application)
            .then(response => {
                dispatch(addApplicationSuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error))
                dispatch(addApplicationFail(error.message));
            });
    }
}

export const addApplicationStart = () => ({
    type: types.ADD_APPLICATION_START
});

export const addApplicationSuccess = (response) => ({
    type: types.ADD_APPLICATION_SUCCESS,
    response
});

export const addApplicationFail = (errorMsg) => ({
    type: types.ADD_APPLICATION_FAIL,
    errorMsg,
});

export function updateApplication(application){
    return (dispatch) => {
        dispatch(updateApplicationStart());
        return axios.put(api.updateApplicationUrl(), application)
            .then(response => {
                dispatch(updateApplicationSuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error))
                dispatch(updateApplicationFail(error.message));
            });
    }
}

export const updateApplicationStart = () => ({
    type: types.UPDATE_APPLICATION_START
});

export const updateApplicationSuccess = (response) => ({
    type: types.UPDATE_APPLICATION_SUCCESS,
    response
});

export const updateApplicationFail = (errorMsg) => ({
    type: types.UPDATE_APPLICATION_FAIL,
    errorMsg,
});


export function deleteApplication(applicationId){
    return (dispatch) => {
        dispatch(deleteApplicationStart());
        return axios.delete(api.deleteApplicationUrl(applicationId))
            .then(response => {
                dispatch(deleteApplicationSuccess(response));
            })
            .catch((error) => {
                console.log(error)
                alert(JSON.parse(error))
                dispatch(deleteApplicationFail(error.message));
            });
    }
}

export const deleteApplicationStart = () => ({
    type: types.DELETE_APPLICATION_START
});

export const deleteApplicationSuccess = (response) => ({
    type: types.DELETE_APPLICATION_SUCCESS,
    response
});

export const deleteApplicationFail = (errorMsg) => ({
    type: types.DELETE_APPLICATION_FAIL,
    errorMsg,
});

export function getApplications(){
    return (dispatch) => {
        dispatch(getApplicationsStart());
        return axios.get(api.getApplicationsUrl())
            .then(response => {
                dispatch(getApplicationsSuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error))
                dispatch(getApplicationsFail(error.message));
            });
    }
}

export const getApplicationsStart = () => ({
    type: types.GET_APPLICATIONS_START
});

export const getApplicationsSuccess = (response) => ({
    type: types.GET_APPLICATIONS_SUCCESS,
    response
});

export const getApplicationsFail = (errorMsg) => ({
    type: types.GET_APPLICATIONS_FAIL,
    errorMsg,
});