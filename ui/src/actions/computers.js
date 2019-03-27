import axios from 'axios';
import * as api from "../constants/apiEndpoints";
import * as types from '../constants/actionsConstants';

export function updateComputer(computer){
    return (dispatch) => {
        dispatch(updateComputerStart());
        return axios.put(api.updateComputerUrl(), computer)
            .then(response => {
                dispatch(updateComputerSuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error))
                dispatch(updateComputerFail(error.message));
            });
    }
}

export const updateComputerStart = () => ({
    type: types.UPDATE_COMPUTER_START
});

export const updateComputerSuccess = (response) => ({
    type: types.UPDATE_COMPUTER_SUCCESS,
    response
});

export const updateComputerFail = (errorMsg) => ({
    type: types.UPDATE_COMPUTER_FAIL,
    errorMsg,
});


export function deleteComputer(computerId){
    return (dispatch) => {
        dispatch(deleteComputerStart());
        return axios.delete(api.deleteComputerUrl(computerId))
            .then(response => {
                dispatch(deleteComputerSuccess(response));
            })
            .catch((error) => {
                console.log(error)
                alert(JSON.parse(error))
                dispatch(deleteComputerFail(error.message));
            });
    }
}

export const deleteComputerStart = () => ({
    type: types.DELETE_COMPUTER_START
});

export const deleteComputerSuccess = (response) => ({
    type: types.DELETE_COMPUTER_SUCCESS,
    response
});

export const deleteComputerFail = (errorMsg) => ({
    type: types.DELETE_COMPUTER_FAIL,
    errorMsg,
});

export function getComputers(){
    return (dispatch) => {
        dispatch(getComputersStart());
        return axios.get(api.getComputersUrl())
            .then(response => {
                dispatch(getComputersSuccess(response));
            })
            .catch((error) => {
                console.log(error)
                // alert(JSON.parse(error))
                dispatch(getComputersFail(error.message));
            });
    }
}

export const getComputersStart = () => ({
    type: types.GET_COMPUTERS_START
});

export const getComputersSuccess = (response) => ({
    type: types.GET_COMPUTERS_SUCCESS,
    response
});

export const getComputersFail = (errorMsg) => ({
    type: types.GET_COMPUTERS_FAIL,
    errorMsg,
});