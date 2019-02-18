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
                alert(JSON.parse(error.request.response).reason)
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

export function getApplications(){
    return (dispatch) => {
        dispatch(getApplicationsStart());
        return axios.get(api.getApplicationsApi())
            .then(response => {
                dispatch(getApplicationsSuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error.request.response).reason)
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