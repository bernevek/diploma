import * as types from "../constants/actionsConstants";

const initialState = {
    errorMsg: null,
    reports: null,
    getReportsInProgress: false,
}

export default function orgs(state = initialState, action={}) {
    switch (action.type) {
        case types.GET_REPORTS_START:
            return {
                ...state,
                errorMsg: null,
                getReportsInProgress: true
            };
        case types.GET_REPORTS_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                reports: action.response.data,
                getReportsInProgress: false,
            };
        case types.GET_REPORTS_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                getReportsInProgress: false,
            };
        default:
            return state;
    }
}