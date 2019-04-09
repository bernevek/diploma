import axios from 'axios';
import * as api from "../constants/apiEndpoints";
import * as types from '../constants/actionsConstants';

export function getReports(reportFilter){
    return (dispatch) => {
        dispatch(getReportsStart());
        return axios.post(api.getReportsUrl(), reportFilter)
            .then(response => {
                dispatch(getReportsSuccess(response));
            })
            .catch((error) => {
                alert(JSON.parse(error))
                dispatch(getReportsFail(error.message));
            });
    }
}

export const getReportsStart = () => ({
    type: types.GET_REPORTS_START
});

export const getReportsSuccess = (response) => ({
    type: types.GET_REPORTS_SUCCESS,
    response
});

export const getReportsFail = (errorMsg) => ({
    type: types.GET_REPORTS_FAIL,
    errorMsg,
});