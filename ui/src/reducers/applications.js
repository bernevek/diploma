import * as types from "../constants/actionsConstants";

const initialState = {
    errorMsg: null,
    applications: null,
    addApplicationInProgress: false,
    getApplicationsInProgress: false,
    deleteApplicationInProgress: false,
}

export default function orgs(state = initialState, action={}) {
    switch (action.type) {
        case types.ADD_APPLICATION_START:
            return {
                ...state,
                errorMsg: null,
                addApplicationInProgress: true
            };
        case types.ADD_APPLICATION_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                addApplicationInProgress: false,
                applications: action.response.data,
            };
        case types.ADD_APPLICATION_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                addApplicationInProgress: false,
            };
        case types.GET_APPLICATIONS_START:
            return {
                ...state,
                errorMsg: null,
                getApplicationsInProgress: true
            };
        case types.GET_APPLICATIONS_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                applications: action.response.data,
                getApplicationsInProgress: false,
            };
        case types.GET_APPLICATIONS_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                getApplicationsInProgress: false,
            };
        case types.DELETE_APPLICATION_START:
            return {
                ...state,
                errorMsg: null,
                deleteApplicationInProgress: true
            };
        case types.DELETE_APPLICATION_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                applications: action.response.data,
                deleteApplicationInProgress: false,
            };
        case types.DELETE_APPLICATION_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                deleteApplicationInProgress: false,
            };
        default:
            return state;
    }
}