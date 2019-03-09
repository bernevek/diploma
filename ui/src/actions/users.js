import axios from 'axios';
import * as api from "../constants/apiEndpoints";
import * as types from '../constants/actionsConstants';

export function addUser(user){
    return (dispatch) => {
        dispatch(addUserStart());
        return axios.post(api.addUserUrl(), user)
            .then(response => {
                dispatch(addUserSuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error))
                dispatch(addUserFail(error.message));
            });
    }
}

export const addUserStart = () => ({
    type: types.ADD_USER_START
});

export const addUserSuccess = (response) => ({
    type: types.ADD_USER_SUCCESS,
    response
});

export const addUserFail = (errorMsg) => ({
    type: types.ADD_USER_FAIL,
    errorMsg,
});

export function updateUser(user){
    return (dispatch) => {
        dispatch(updateUserStart());
        return axios.put(api.updateUserUrl(), user)
            .then(response => {
                dispatch(updateUserSuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error))
                dispatch(updateUserFail(error.message));
            });
    }
}

export const updateUserStart = () => ({
    type: types.UPDATE_USER_START
});

export const updateUserSuccess = (response) => ({
    type: types.UPDATE_USER_SUCCESS,
    response
});

export const updateUserFail = (errorMsg) => ({
    type: types.UPDATE_USER_FAIL,
    errorMsg,
});


export function deleteUser(userId){
    return (dispatch) => {
        dispatch(deleteUserStart());
        return axios.delete(api.deleteUserUrl(userId))
            .then(response => {
                dispatch(deleteUserSuccess(response));
            })
            .catch((error) => {
                console.log(error)
                alert(JSON.parse(error))
                dispatch(deleteUserFail(error.message));
            });
    }
}

export const deleteUserStart = () => ({
    type: types.DELETE_USER_START
});

export const deleteUserSuccess = (response) => ({
    type: types.DELETE_USER_SUCCESS,
    response
});

export const deleteUserFail = (errorMsg) => ({
    type: types.DELETE_USER_FAIL,
    errorMsg,
});

export function getUsers(){
    return (dispatch) => {
        dispatch(getUsersStart());
        return axios.get(api.getUsersUrl())
            .then(response => {
                dispatch(getUsersSuccess(response));
            })
            .catch((error) => {
            console.log(error)
                // alert(JSON.parse(error))
                dispatch(getUsersFail(error.message));
            });
    }
}

export const getUsersStart = () => ({
    type: types.GET_USERS_START
});

export const getUsersSuccess = (response) => ({
    type: types.GET_USERS_SUCCESS,
    response
});

export const getUsersFail = (errorMsg) => ({
    type: types.GET_USERS_FAIL,
    errorMsg,
});