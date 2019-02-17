import axios from 'axios';
import * as api from "../constants/apiEndpoints";
import * as types from '../constants/actionsConstants';

// export function getLoginMethods(){
//     return (dispatch) => {
//         dispatch(getLoginMethodsStart());
//         return axios.get(api.getLoginMethodsApi())
//             .then(response => {
//                 dispatch(getLoginMethodsSuccess(response));
//             })
//             .catch((error) => {
//                 alert(JSON.parse(error.request.response).reason)
//                 dispatch(getLoginMethodsFail(error.message));
//             });
//     }
// }

export function getLoginMethods(){
    return (dispatch) => {
        dispatch(getLoginMethodsStart());
        dispatch(getLoginMethodsSuccess({data:[
                {label: "password", value: "password"},
                {label: "finger print", value: "fingerPrint"}
            ]
        }));
    }
}

export const getLoginMethodsStart = () => ({
    type: types.GET_LOGIN_METHODS_START
});

export const getLoginMethodsSuccess = (response) => ({
    type: types.GET_LOGIN_METHODS_SUCCESS,
    response
});

export const getLoginMethodsFail = (errorMsg) => ({
    type: types.GET_LOGIN_METHODS_FAIL,
    errorMsg,
});