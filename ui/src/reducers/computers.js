import * as types from "../constants/actionsConstants";

const initialState = {
    errorMsg: null,
    computers: null,
    getComputersInProgress: false,
    deleteComputerInProgress: false,
    updateComputerInProgress: false,
}

export default function orgs(state = initialState, action={}) {
    switch (action.type) {
        case types.GET_COMPUTERS_START:
            return {
                ...state,
                errorMsg: null,
                getComputersInProgress: true
            };
        case types.GET_COMPUTERS_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                computers: action.response.data,
                getComputersInProgress: false,
            };
        case types.GET_COMPUTERS_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                getComputersInProgress: false,
            };
        case types.DELETE_COMPUTER_START:
            return {
                ...state,
                errorMsg: null,
                deleteComputerInProgress: true
            };
        case types.DELETE_COMPUTER_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                computers: [...state.computers.filter(app => app.id !== action.response.data)],
                deleteComputerInProgress: false,
            };
        case types.DELETE_COMPUTER_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                deleteComputerInProgress: false,
            };
        case types.UPDATE_COMPUTER_START:
            return {
                ...state,
                errorMsg: null,
                updateComputerInProgress: true
            };
        case types.UPDATE_COMPUTER_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                computers: [...state.computers.map(app => {
                    if (app.id === action.response.data.id) {
                        app.localId = action.response.data.localId;
                        app.computerName = action.response.data.computerName;
                        app.localUserName = action.response.data.localUserName;
                        app.ip = action.response.data.ip;
                        app.computerPolicyId = action.response.data.computerPolicyId;
                    }
                    return app;
                })],
                updateComputerInProgress: false,
            };
        case types.UPDATE_COMPUTER_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                updateComputerInProgress: false,
            };
        default:
            return state;
    }
}