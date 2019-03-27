import * as types from "../constants/actionsConstants";

const initialState = {
    errorMsg: null,
    computerPolicy: null,
    computerPolicies: null,
    updateComputerPolicyInProgress: false,
    getComputerPolicyInProgress: false,
    getComputerPoliciesInProgress: false,
    addComputerPolicyInProgress: false,
    deleteComputerPolicyInProgress: false,
}

export default function orgs(state = initialState, action={}) {
    switch (action.type) {
        case types.UPDATE_COMPUTER_POLICY_START:
            return {
                ...state,
                errorMsg: null,
                updateComputerPolicyInProgress: true
            };
        case types.UPDATE_COMPUTER_POLICY_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                updateComputerPolicyInProgress: false,
            };
        case types.UPDATE_COMPUTER_POLICY_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                updateComputerPolicyInProgress: false,
            };
        case types.ADD_COMPUTER_POLICY_START:
            return {
                ...state,
                errorMsg: null,
                addComputerPolicyInProgress: true
            };
        case types.ADD_COMPUTER_POLICY_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                addComputerPolicyInProgress: false,
            };
        case types.ADD_COMPUTER_POLICY_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                addComputerPolicyInProgress: false,
            };
        case types.DELETE_COMPUTER_POLICY_START:
            return {
                ...state,
                errorMsg: null,
                deleteComputerPolicyInProgress: true
            };
        case types.DELETE_COMPUTER_POLICY_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                computerPolicies: [...state.computerPolicies.filter(computerPolicy => computerPolicy.value !== action.response.data)],
                deleteComputerPolicyInProgress: false,
            };
        case types.DELETE_COMPUTER_POLICY_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                deleteComputerPolicyInProgress: false,
            };
        case types.GET_COMPUTER_POLICY_START:
            return {
                ...state,
                errorMsg: null,
                getComputerPolicyInProgress: true
            };
        case types.GET_COMPUTER_POLICY_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                computerPolicy: action.response.data,
                getComputerPolicyInProgress: false,
            };
        case types.GET_COMPUTER_POLICY_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                getComputerPolicyInProgress: false,
            };
        case types.GET_COMPUTER_POLICIES_START:
            return {
                ...state,
                errorMsg: null,
                getComputerPoliciesInProgress: true
            };
        case types.GET_COMPUTER_POLICIES_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                computerPolicies: action.response.data,
                getComputerPoliciesInProgress: false,
            };
        case types.GET_COMPUTER_POLICIES_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                getComputerPoliciesInProgress: false,
            };
        default:
            return state;
    }
}