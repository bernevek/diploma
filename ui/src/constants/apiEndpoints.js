var API_URL = "";

process.env.REACT_APP_STAGE === 'dev'
    ? API_URL = 'http://localhost:8080/api'
    : API_URL = '/api'

/* User Policy */
export const getUserPoliciesApi = () => {
    return API_URL + "/userPolicies";
}

export const getUserPolicyApi = (policyId) => {
    return API_URL + "/userPolicy/" + policyId;
}

export const saveUserPolicyUrl = (policyId) => {
    return API_URL + "/userPolicy";
}

export const addUserPolicyUrl = () => {
    return API_URL + "/userPolicy";
}

export const deleteUserPolicyUrl = (policyId) => {
    return API_URL + "/userPolicy/" + policyId;
}

/* Applications */
export const getApplicationsApi = () => {
    return API_URL + "/application";
}

export const saveApplicationUrl = (applicationId) => {
    return API_URL + "/application";
}

export const addApplicationUrl = () => {
    return API_URL + "/application";
}

export const deleteApplicationUrl = (applicationId) => {
    return API_URL + "/application/" + applicationId;
}

/* Sites */
export const getSitesApi = () => {
    return API_URL + "/site";
}

export const saveSiteUrl = (sitesId) => {
    return API_URL + "/site";
}

export const addSiteUrl = () => {
    return API_URL + "/site";
}

export const deleteSiteUrl = (sitesId) => {
    return API_URL + "/site/" + sitesId;
}

/* Login methods*/
export const getLoginMethodsApi = () => {
    return API_URL + "/loginMethod";
}
