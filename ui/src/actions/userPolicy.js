import axios from 'axios';
import * as api from "../constants/apiEndpoints";
import * as types from '../constants/actionsConstants';

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

export function saveUserPolicy(userPolicy){
    return (dispatch) => {
        dispatch(saveUserPolicyStart());
        return axios.put(api.updateUserPolicyUrl(userPolicy.id), userPolicy)
            .then(response => {
                dispatch(saveUserPolicySuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error.request.response).reason)
                dispatch(saveUserPolicyFail(error.message));
            });
    }
}

export const saveUserPolicyStart = () => ({
    type: types.SAVE_USER_POLICY_START
});

export const saveUserPolicySuccess = (response) => ({
    type: types.SAVE_USER_POLICY_SUCCESS,
    response
});

export const saveUserPolicyFail = (errorMsg) => ({
    type: types.SAVE_USER_POLICY_FAIL,
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