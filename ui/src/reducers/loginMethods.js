import * as types from "../constants/actionsConstants";

const initialState = {
    errorMsg: null,
    loginMethods: null,
    getLoginMethodsInProgress: false,
}

export default function orgs(state = initialState, action={}) {
    switch (action.type) {
        case types.GET_LOGIN_METHODS_START:
            return {
                ...state,
                errorMsg: null,
                getLoginMethodsInProgress: true
            };
        case types.GET_LOGIN_METHODS_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                loginMethods: action.response.data,
                getLoginMethodsInProgress: false,
            };
        case types.GET_LOGIN_METHODS_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                getLoginMethodsInProgress: false,
            };
        default:
            return state;
    }
}