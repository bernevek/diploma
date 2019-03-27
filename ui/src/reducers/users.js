import * as types from "../constants/actionsConstants";

const initialState = {
    errorMsg: null,
    users: null,
    addUserInProgress: false,
    getUsersInProgress: false,
    deleteUserInProgress: false,
    updateUserInProgress: false,
}

export default function orgs(state = initialState, action={}) {
    switch (action.type) {
        case types.ADD_USER_START:
            return {
                ...state,
                errorMsg: null,
                addUserInProgress: true
            };
        case types.ADD_USER_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                addUserInProgress: false,
                users: [...state.users, action.response.data]
            };
        case types.ADD_USER_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                addUserInProgress: false,
            };
        case types.GET_USERS_START:
            return {
                ...state,
                errorMsg: null,
                getUsersInProgress: true
            };
        case types.GET_USERS_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                users: action.response.data,
                getUsersInProgress: false,
            };
        case types.GET_USERS_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                getUsersInProgress: false,
            };
        case types.DELETE_USER_START:
            return {
                ...state,
                errorMsg: null,
                deleteUserInProgress: true
            };
        case types.DELETE_USER_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                users: [...state.users.filter(app => app.id !== action.response.data)],
                deleteUserInProgress: false,
            };
        case types.DELETE_USER_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                deleteUserInProgress: false,
            };
        case types.UPDATE_USER_START:
            return {
                ...state,
                errorMsg: null,
                updateUserInProgress: true
            };
        case types.UPDATE_USER_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                users: [...state.users.map(user => {
                    if (user.id === action.response.data.id) {
                        user.login = action.response.data.login;
                        user.password = action.response.data.password;
                        user.userPolicyId = action.response.data.userPolicyId;
                        user.computerId = action.response.data.computerId;
                    }
                    return user;
                })],
                updateUserInProgress: false,
            };
        case types.UPDATE_USER_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                updateUserInProgress: false,
            };
        default:
            return state;
    }
}