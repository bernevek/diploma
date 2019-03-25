import axios from 'axios';
import * as api from "../constants/apiEndpoints";
import * as types from '../constants/actionsConstants';

export function addService(service){
    return (dispatch) => {
        dispatch(addServiceStart());
        return axios.post(api.addServiceUrl(), service)
            .then(response => {
                dispatch(addServiceSuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error))
                dispatch(addServiceFail(error.message));
            });
    }
}

export const addServiceStart = () => ({
    type: types.ADD_SERVICE_START
});

export const addServiceSuccess = (response) => ({
    type: types.ADD_SERVICE_SUCCESS,
    response
});

export const addServiceFail = (errorMsg) => ({
    type: types.ADD_SERVICE_FAIL,
    errorMsg,
});

export function updateService(service){
    return (dispatch) => {
        dispatch(updateServiceStart());
        return axios.put(api.updateServiceUrl(), service)
            .then(response => {
                dispatch(updateServiceSuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error))
                dispatch(updateServiceFail(error.message));
            });
    }
}

export const updateServiceStart = () => ({
    type: types.UPDATE_SERVICE_START
});

export const updateServiceSuccess = (response) => ({
    type: types.UPDATE_SERVICE_SUCCESS,
    response
});

export const updateServiceFail = (errorMsg) => ({
    type: types.UPDATE_SERVICE_FAIL,
    errorMsg,
});


export function deleteService(serviceId){
    return (dispatch) => {
        dispatch(deleteServiceStart());
        return axios.delete(api.deleteServiceUrl(serviceId))
            .then(response => {
                dispatch(deleteServiceSuccess(response));
            })
            .catch((error) => {
                console.log(error)
                alert(JSON.parse(error))
                dispatch(deleteServiceFail(error.message));
            });
    }
}

export const deleteServiceStart = () => ({
    type: types.DELETE_SERVICE_START
});

export const deleteServiceSuccess = (response) => ({
    type: types.DELETE_SERVICE_SUCCESS,
    response
});

export const deleteServiceFail = (errorMsg) => ({
    type: types.DELETE_SERVICE_FAIL,
    errorMsg,
});

export function getServices(){
    return (dispatch) => {
        dispatch(getServicesStart());
        return axios.get(api.getServicesUrl())
            .then(response => {
                dispatch(getServicesSuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error))
                dispatch(getServicesFail(error.message));
            });
    }
}

export const getServicesStart = () => ({
    type: types.GET_SERVICES_START
});

export const getServicesSuccess = (response) => ({
    type: types.GET_SERVICES_SUCCESS,
    response
});

export const getServicesFail = (errorMsg) => ({
    type: types.GET_SERVICES_FAIL,
    errorMsg,
});