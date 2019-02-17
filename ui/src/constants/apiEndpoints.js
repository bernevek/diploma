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
    return API_URL + "/userPolicy/" + policyId;
}

export const addUserPolicyUrl = () => {
    return API_URL + "/userPolicy";
}

export const deleteUserPolicyUrl = (policyId) => {
    return API_URL + "/userPolicy/" + policyId;
}

/* Applications */
export const getApplicationsApi = () => {
    return API_URL + "/applications";
}

export const saveApplicationUrl = (applicationId) => {
    return API_URL + "/applications/" + applicationId;
}

export const addApplicationUrl = () => {
    return API_URL + "/applications";
}

export const deleteApplicationUrl = (applicationId) => {
    return API_URL + "/applications/" + applicationId;
}

/* Sites */
export const getSitesApi = () => {
    return API_URL + "/sites";
}

export const saveSiteUrl = (sitesId) => {
    return API_URL + "/sites/" + sitesId;
}

export const addSiteUrl = () => {
    return API_URL + "/sites";
}

export const deleteSiteUrl = (sitesId) => {
    return API_URL + "/sites/" + sitesId;
}

/* Login methods*/
export const getLoginMethodsApi = () => {
    return API_URL + "/loginMethods";
}
