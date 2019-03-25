import * as types from "../constants/actionsConstants";

const initialState = {
    errorMsg: null,
    services: null,
    addServiceInProgress: false,
    getServicesInProgress: false,
    deleteServiceInProgress: false,
    updateServiceInProgress: false,
}

export default function orgs(state = initialState, action={}) {
    switch (action.type) {
        case types.ADD_SERVICE_START:
            return {
                ...state,
                errorMsg: null,
                addServiceInProgress: true
            };
        case types.ADD_SERVICE_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                addServiceInProgress: false,
                services: [...state.services, action.response.data]
            };
        case types.ADD_SERVICE_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                addServiceInProgress: false,
            };
        case types.GET_SERVICES_START:
            return {
                ...state,
                errorMsg: null,
                getServicesInProgress: true
            };
        case types.GET_SERVICES_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                services: action.response.data,
                getServicesInProgress: false,
            };
        case types.GET_SERVICES_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                getServicesInProgress: false,
            };
        case types.DELETE_SERVICE_START:
            return {
                ...state,
                errorMsg: null,
                deleteServiceInProgress: true
            };
        case types.DELETE_SERVICE_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                services: [...state.services.filter(app => app.id !== action.response.data)],
                deleteServiceInProgress: false,
            };
        case types.DELETE_SERVICE_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                deleteServiceInProgress: false,
            };
        case types.UPDATE_SERVICE_START:
            return {
                ...state,
                errorMsg: null,
                updateServiceInProgress: true
            };
        case types.UPDATE_SERVICE_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                services: [...state.services.map(app => {
                    if (app.id === action.response.data.id) {
                        app.label = action.response.data.label;
                        app.value = action.response.data.value;
                    }
                    return app;
                })],
                updateServiceInProgress: false,
            };
        case types.UPDATE_SERVICE_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                updateServiceInProgress: false,
            };
        default:
            return state;
    }
}