import axios from 'axios';
import * as api from "../constants/apiEndpoints";
import * as types from '../constants/actionsConstants';

// export function saveUserPolicy(userPolicy){
//     return (dispatch) => {
//         dispatch(saveUserPolicyStart());
//         return axios.put(api.saveUserPolicyUrl(userPolicy.id), userPolicy)
//             .then(response => {
//                 dispatch(saveUserPolicySuccess(response));
//             })
//             .catch((error) => {
//                 alert(JSON.parse(error.request.response).reason)
//                 dispatch(saveUserPolicyFail(error.message));
//             });
//     }
// }

export function saveUserPolicy(userPolicy){
    return (dispatch) => {
        console.log(userPolicy)
    }
}

export const saveUserPolicyStart = () => ({
    type: types.SAVE_USER_POLICY_START
});

export const saveUserPolicySuccess = (response) => ({
    type: types.SAVE_USER_POLICY_SUCCESS,
    response
});

export const saveUserPolicyFail = (errorMsg) => ({
    type: types.SAVE_USER_POLICY_FAIL,
    errorMsg,
});

// export function getUserPolicy(userPolicyId){
//     return (dispatch) => {
//         dispatch(getUserPolicyStart());
//         return axios.get(api.getUserPolicyApi(userPolicyId))
//             .then(response => {
//                 dispatch(getUserPolicySuccess(response));
//             })
//             .catch((error) => {
//                 alert(JSON.parse(error.request.response).reason)
//                 dispatch(getUserPolicyFail(error.message));
//             });
//     }
// }

export function getUserPolicy(userPolicyId){
    return (dispatch) => {
        dispatch(getUserPolicyStart());
        dispatch(getUserPolicySuccess({data:{
                id: 1,
                name: "Default policy",
                bannedApps: [
                    {label: "WORD", value: "word.exe"},
                    {label: "NOTEPAD", value: "notepad.exe"},
                ],
                bannedSites: [
                    {label: "vk", value: "vk.com"}
                ],
                loginMethods: [
                    {label: "password", value: "password"}
                ],
                enableRDP: false
            }
        }));
    }
}

export const getUserPolicyStart = () => ({
    type: types.GET_USER_POLICY_START
});

export const getUserPolicySuccess = (response) => ({
    type: types.GET_USER_POLICY_SUCCESS,
    response
});

export const getUserPolicyFail = (errorMsg) => ({
    type: types.GET_USER_POLICY_FAIL,
    errorMsg,
});