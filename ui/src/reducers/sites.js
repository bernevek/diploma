import * as types from "../constants/actionsConstants";

const initialState = {
    errorMsg: null,
    sites: null,
    addSiteInProgress: false,
    getSitesInProgress: false,
    deleteSiteInProgress: false,
    updateSiteInProgress: false,
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
                sites: [...state.sites, action.response.data]
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
                sites: [...state.sites.filter(site => site.id !== action.response.data)],
                deleteSiteInProgress: false,
            };
        case types.DELETE_SITE_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                deleteSiteInProgress: false,
            };
        case types.UPDATE_SITE_START:
            return {
                ...state,
                errorMsg: null,
                updateSiteInProgress: true
            };
        case types.UPDATE_SITE_SUCCESS:
            return {
                ...state,
                errorMsg: null,
                sites: [...state.sites.map(site => {
                    if (site.id === action.response.data.id) {
                        site.label = action.response.data.label;
                        site.value = action.response.data.value;
                    }
                    return site;
                })],
                updateSiteInProgress: false,
            };
        case types.UPDATE_SITE_FAIL:
            return {
                ...state,
                errorMsg: action.errorMsg,
                updateSiteInProgress: false,
            };
        default:
            return state;
    }
}