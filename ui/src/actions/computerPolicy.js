import axios from 'axios';
import * as api from "../constants/apiEndpoints";
import * as types from '../constants/actionsConstants';
import { history } from '../store'

export function getComputerPolicies(){
    return (dispatch) => {
        dispatch(getComputerPoliciesStart());
        return axios.get(api.getComputerPoliciesUrl())
            .then(response => {
                dispatch(getComputerPoliciesSuccess(response));
            })
            .catch((error) => {
                console.log(error)
                alert(JSON.parse(error.request.response).reason)
                dispatch(getComputerPoliciesFail(error.message));
            });
    }
}

export const getComputerPoliciesStart = () => ({
    type: types.GET_COMPUTER_POLICIES_START
});

export const getComputerPoliciesSuccess = (response) => ({
    type: types.GET_COMPUTER_POLICIES_SUCCESS,
    response
});

export const getComputerPoliciesFail = (errorMsg) => ({
    type: types.GET_COMPUTER_POLICIES_FAIL,
    errorMsg,
});

export function updateComputerPolicy(computerPolicy){
    return (dispatch) => {
        dispatch(updateComputerPolicyStart());
        return axios.put(api.updateComputerPolicyUrl(), computerPolicy)
            .then(response => {
                dispatch(updateComputerPolicySuccess(response));
                history.push({pathname: "/computerPolicies"})
            })
            .catch((error) => {
                alert(JSON.parse(error.request.response).reason)
                dispatch(updateComputerPolicyFail(error.message));
            });
    }
}

export const updateComputerPolicyStart = () => ({
    type: types.UPDATE_COMPUTER_POLICY_START
});

export const updateComputerPolicySuccess = (response) => ({
    type: types.UPDATE_COMPUTER_POLICY_SUCCESS,
    response
});

export const updateComputerPolicyFail = (errorMsg) => ({
    type: types.UPDATE_COMPUTER_POLICY_FAIL,
    errorMsg,
});

export function addComputerPolicy(computerPolicy){
    return (dispatch) => {
        dispatch(addComputerPolicyStart());
        return axios.post(api.addComputerPolicyUrl(), computerPolicy)
            .then(response => {
                dispatch(addComputerPolicySuccess(response));
                history.push({pathname: "/computerPolicies"})
            })
            .catch((error) => {
                alert(JSON.parse(error.request.response).reason)
                dispatch(addComputerPolicyFail(error.message));
            });
    }
}

export const addComputerPolicyStart = () => ({
    type: types.ADD_COMPUTER_POLICY_START
});

export const addComputerPolicySuccess = (response) => ({
    type: types.ADD_COMPUTER_POLICY_SUCCESS,
    response
});

export const addComputerPolicyFail = (errorMsg) => ({
    type: types.ADD_COMPUTER_POLICY_FAIL,
    errorMsg,
});

export function deleteComputerPolicy(policyId){
    return (dispatch) => {
        dispatch(deleteComputerPolicyStart());
        return axios.delete(api.deleteComputerPolicyUrl(policyId))
            .then(response => {
                dispatch(deleteComputerPolicySuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error.request.response).reason)
                dispatch(deleteComputerPolicyFail(error.message));
            });
    }
}

export const deleteComputerPolicyStart = () => ({
    type: types.DELETE_COMPUTER_POLICY_START
});

export const deleteComputerPolicySuccess = (response) => ({
    type: types.DELETE_COMPUTER_POLICY_SUCCESS,
    response
});

export const deleteComputerPolicyFail = (errorMsg) => ({
    type: types.DELETE_COMPUTER_POLICY_FAIL,
    errorMsg,
});

export function getComputerPolicy(computerPolicyId){
    return (dispatch) => {
        dispatch(getComputerPolicyStart());
        return axios.get(api.getComputerPolicyUrl(computerPolicyId))
            .then(response => {
                dispatch(getComputerPolicySuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error.request.response).reason)
                dispatch(getComputerPolicyFail(error.message));
            });
    }
}

export const getComputerPolicyStart = () => ({
    type: types.GET_COMPUTER_POLICY_START
});

export const getComputerPolicySuccess = (response) => ({
    type: types.GET_COMPUTER_POLICY_SUCCESS,
    response
});

export const getComputerPolicyFail = (errorMsg) => ({
    type: types.GET_COMPUTER_POLICY_FAIL,
    errorMsg,
});