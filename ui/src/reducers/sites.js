import * as types from "../constants/actionsConstants";

const initialState = {
    errorMsg: null,
    sites: null,
    addSiteInProgress: false,
    getSitesInProgress: false,
    deleteSiteInProgress: false,
}

export default function orgs(state = initialState, action={}) {
    switch (action.type) {
        case types.ADD_SITE_START:
            return {
                ...state,
                errorMsg: null,
                addSiteInProgress: true
            };
        case types.ADD_SITE_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                addSiteInProgress: false,
                sites: action.response.data,
            };
        case types.ADD_SITE_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                addSiteInProgress: false,
            };
        case types.GET_SITES_START:
            return {
                ...state,
                errorMsg: null,
                getSitesInProgress: true
            };
        case types.GET_SITES_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                sites: action.response.data,
                getSitesInProgress: false,
            };
        case types.GET_SITES_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                getSitesInProgress: false,
            };
        case types.DELETE_SITE_START:
            return {
                ...state,
                errorMsg: null,
                deleteSiteInProgress: true
            };
        case types.DELETE_SITE_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                sites: action.response.data,
                deleteSiteInProgress: false,
            };
        case types.DELETE_SITE_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                deleteSiteInProgress: false,
            };
        default:
            return state;
    }
}