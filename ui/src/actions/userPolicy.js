import axios from 'axios';
import * as api from "../constants/apiEndpoints";
import * as types from '../constants/actionsConstants';
import { history } from '../store'

export function getUserPolicies(){
    return (dispatch) => {
        dispatch(getUserPoliciesStart());
        return axios.get(api.getUserPoliciesUrl())
            .then(response => {
                dispatch(getUserPoliciesSuccess(response));
            })
            .catch((error) => {
            console.log(error)
                alert(JSON.parse(error.request.response).reason)
                dispatch(getUserPoliciesFail(error.message));
            });
    }
}

export const getUserPoliciesStart = () => ({
    type: types.GET_USER_POLICIES_START
});

export const getUserPoliciesSuccess = (response) => ({
    type: types.GET_USER_POLICIES_SUCCESS,
    response
});

export const getUserPoliciesFail = (errorMsg) => ({
    type: types.GET_USER_POLICIES_FAIL,
    errorMsg,
});

export function updateUserPolicy(userPolicy){
    return (dispatch) => {
        dispatch(updateUserPolicyStart());
        return axios.put(api.updateUserPolicyUrl(), userPolicy)
            .then(response => {
                dispatch(updateUserPolicySuccess(response));
                history.push({pathname: "/userPolicies"})
            })
            .catch((error) => {
                alert(JSON.parse(error.request.response).reason)
                dispatch(updateUserPolicyFail(error.message));
            });
    }
}

export const updateUserPolicyStart = () => ({
    type: types.UPDATE_USER_POLICY_START
});

export const updateUserPolicySuccess = (response) => ({
    type: types.UPDATE_USER_POLICY_SUCCESS,
    response
});

export const updateUserPolicyFail = (errorMsg) => ({
    type: types.UPDATE_USER_POLICY_FAIL,
    errorMsg,
});

export function addUserPolicy(userPolicy){
    return (dispatch) => {
        dispatch(addUserPolicyStart());
        return axios.post(api.addUserPolicyUrl(), userPolicy)
            .then(response => {
                dispatch(addUserPolicySuccess(response));
                history.push({pathname: "/userPolicies"})
            })
            .catch((error) => {
                alert(JSON.parse(error.request.response).reason)
                dispatch(addUserPolicyFail(error.message));
            });
    }
}

export const addUserPolicyStart = () => ({
    type: types.ADD_USER_POLICY_START
});

export const addUserPolicySuccess = (response) => ({
    type: types.ADD_USER_POLICY_SUCCESS,
    response
});

export const addUserPolicyFail = (errorMsg) => ({
    type: types.ADD_USER_POLICY_FAIL,
    errorMsg,
});

export function deleteUserPolicy(policyId){
    return (dispatch) => {
        dispatch(deleteUserPolicyStart());
        return axios.delete(api.deleteUserPolicyUrl(policyId))
            .then(response => {
                dispatch(deleteUserPolicySuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error.request.response).reason)
                dispatch(deleteUserPolicyFail(error.message));
            });
    }
}

export const deleteUserPolicyStart = () => ({
    type: types.DELETE_USER_POLICY_START
});

export const deleteUserPolicySuccess = (response) => ({
    type: types.DELETE_USER_POLICY_SUCCESS,
    response
});

export const deleteUserPolicyFail = (errorMsg) => ({
    type: types.DELETE_USER_POLICY_FAIL,
    errorMsg,
});

export function getUserPolicy(userPolicyId){
    return (dispatch) => {
        dispatch(getUserPolicyStart());
        return axios.get(api.getUserPolicyUrl(userPolicyId))
            .then(response => {
                dispatch(getUserPolicySuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error.request.response).reason)
                dispatch(getUserPolicyFail(error.message));
            });
    }
}

export const getUserPolicyStart = () => ({
    type: types.GET_USER_POLICY_START
});

export const getUserPolicySuccess = (response) => ({
    type: types.GET_USER_POLICY_SUCCESS,
    response
});

export const getUserPolicyFail = (errorMsg) => ({
    type: types.GET_USER_POLICY_FAIL,
    errorMsg,
});