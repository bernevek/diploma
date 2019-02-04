import * as types from "../constants/actionsConstants";

const initialState = {
    errorMsg: null,
    userPolicy: null,
    saveUserPolicyInProgress: false,
    getUserPolicyInProgress: false
}

export default function orgs(state = initialState, action={}) {
    switch (action.type) {
        case types.SAVE_USER_POLICY_START:
            return {
                ...state,
                errorMsg: null,
                saveUserPolicyInProgress: true
            };
        case types.SAVE_USER_POLICY_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                userPolicy: action.response.data,
                saveUserPolicyInProgress: false,
            };
        case types.SAVE_USER_POLICY_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                saveUserPolicyInProgress: false,
            };
        case types.GET_USER_POLICY_START:
            return {
                ...state,
                errorMsg: null,
                getUserPolicyInProgress: true
            };
        case types.GET_USER_POLICY_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                userPolicy: action.response.data,
                getUserPolicyInProgress: false,
            };
        case types.GET_USER_POLICY_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                getUserPolicyInProgress: false,
            };
        default:
            return state;
    }
}