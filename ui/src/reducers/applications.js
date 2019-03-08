import * as types from "../constants/actionsConstants";

const initialState = {
    errorMsg: null,
    applications: null,
    addApplicationInProgress: false,
    getApplicationsInProgress: false,
    deleteApplicationInProgress: false,
    updateApplicationInProgress: false,
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
                applications: [...state.applications, action.response.data]
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
                applications: [...state.applications.filter(app => app.id !== action.response.data.id)],
                deleteApplicationInProgress: false,
            };
        case types.DELETE_APPLICATION_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                deleteApplicationInProgress: false,
            };
        case types.UPDATE_APPLICATION_START:
            return {
                ...state,
                errorMsg: null,
                updateApplicationInProgress: true
            };
        case types.UPDATE_APPLICATION_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                applications: [...state.applications.forEach(app => {
                    if (app.id === action.response.data.id) {
                        app.label = action.response.data.label;
                        app.value = action.response.data.value;
                    }
                })],
                updateApplicationInProgress: false,
            };
        case types.UPDATE_APPLICATION_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                updateApplicationInProgress: false,
            };
        default:
            return state;
    }
}