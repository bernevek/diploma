import axios from 'axios';
import * as api from "../constants/apiEndpoints";
import * as types from '../constants/actionsConstants';

export function addSite(site){
    return (dispatch) => {
        dispatch(addSiteStart());
        return axios.post(api.addSiteUrl(), site)
            .then(response => {
                dispatch(addSiteSuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error.request.response).reason)
                dispatch(addSiteFail(error.message));
            });
    }
}

export const addSiteStart = () => ({
    type: types.ADD_SITE_START
});

export const addSiteSuccess = (response) => ({
    type: types.ADD_SITE_SUCCESS,
    response
});

export const addSiteFail = (errorMsg) => ({
    type: types.ADD_APPLICATION_FAIL,
    errorMsg,
});

// export function getSites(){
//     return (dispatch) => {
//         dispatch(getSitesStart());
//         return axios.get(api.getSitesApi())
//             .then(response => {
//                 dispatch(getSitesSuccess(response));
//             })
//             .catch((error) => {
//                 alert(JSON.parse(error.request.response).reason)
//                 dispatch(getSitesFail(error.message));
//             });
//     }
// }

export function getSites(){
    return (dispatch) => {
        dispatch(getSitesStart());
        dispatch(getSitesSuccess({data:[
                {label: "vk", value: "vk.com"},
                {label: "fb", value: "facebook.com"}
            ]
        }));
    }
}

export const getSitesStart = () => ({
    type: types.GET_SITES_START
});

export const getSitesSuccess = (response) => ({
    type: types.GET_SITES_SUCCESS,
    response
});

export const getSitesFail = (errorMsg) => ({
    type: types.GET_SITES_FAIL,
    errorMsg,
});