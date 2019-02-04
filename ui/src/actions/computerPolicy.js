import axios from 'axios';
import * as api from "../constants/apiEndpoints";
import * as types from '../constants/actionsConstants';

export function saveComputerPolicy(computerPolicy){
    return (dispatch, getState) => {
        dispatch(saveComputerPolicyStart());
        return axios.post("", computerPolicy)
            .then(response => {
                dispatch(saveComputerPolicySuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error.request.response).reason)
                dispatch(saveComputerPolicyFail(error.message));
            });
    }
}

export const saveComputerPolicyStart = () => ({
    type: types.SAVE_COMPUTER_POLICY_START
});

export const saveComputerPolicySuccess = (response) => ({
    type: types.SAVE_COMPUTER_POLICY_SUCCESS,
    response
});

export const saveComputerPolicyFail = (errorMsg) => ({
    type: types.SAVE_COMPUTER_POLICY_FAIL,
    errorMsg,
});

export function getComputerPolicy(computerPolicyId){
    return (dispatch, getState) => {
        dispatch(getComputerPolicyStart());
        return axios.get("" + "/" + id)
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