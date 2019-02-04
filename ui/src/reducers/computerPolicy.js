import * as types from "../constants/actionsConstants";

const initialState = {
    errorMsg: null,
    computerPolicy: null,
    saveComputerPolicyInProgress: false,
    getComputerPolicyInProgress: false
}

export default function orgs(state = initialState, action={}) {
    switch (action.type) {
        case types.SAVE_COMPUTER_POLICY_START:
            return {
                ...state,
                errorMsg: null,
                saveComputerPolicyInProgress: true
            };
        case types.SAVE_COMPUTER_POLICY_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                computerPolicy: action.response.data,
                saveComputerPolicyInProgress: false,
            };
        case types.SAVE_COMPUTER_POLICY_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                saveComputerPolicyInProgress: false,
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
        default:
            return state;
    }
}