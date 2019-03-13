import * as types from "../constants/actionsConstants";

const initialState = {
    errorMsg: null,
    userPolicy: null,
    userPolicies: null,
    updateUserPolicyInProgress: false,
    getUserPolicyInProgress: false,
    getUserPoliciesInProgress: false,
    addUserPolicyInProgress: false,
    deleteUserPolicyInProgress: false,
}

export default function orgs(state = initialState, action={}) {
    switch (action.type) {
        case types.UPDATE_USER_POLICY_START:
            return {
                ...state,
                errorMsg: null,
                updateUserPolicyInProgress: true
            };
        case types.UPDATE_USER_POLICY_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                updateUserPolicyInProgress: false,
            };
        case types.UPDATE_USER_POLICY_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                updateUserPolicyInProgress: false,
            };
        case types.ADD_USER_POLICY_START:
            return {
                ...state,
                errorMsg: null,
                addUserPolicyInProgress: true
            };
        case types.ADD_USER_POLICY_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                addUserPolicyInProgress: false,
            };
        case types.ADD_USER_POLICY_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                addUserPolicyInProgress: false,
            };
        case types.DELETE_USER_POLICY_START:
            return {
                ...state,
                errorMsg: null,
                deleteUserPolicyInProgress: true
            };
        case types.DELETE_USER_POLICY_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                userPolicies: [...state.userPolicies.filter(userPolicy => userPolicy.value !== action.response.data)],
                deleteUserPolicyInProgress: false,
            };
        case types.DELETE_USER_POLICY_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                deleteUserPolicyInProgress: false,
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
        case types.GET_USER_POLICIES_START:
            return {
                ...state,
                errorMsg: null,
                getUserPoliciesInProgress: true
            };
        case types.GET_USER_POLICIES_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                userPolicies: action.response.data,
                getUserPoliciesInProgress: false,
            };
        case types.GET_USER_POLICIES_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                getUserPoliciesInProgress: false,
            };
        default:
            return state;
    }
}