var API_URL = "";

process.env.REACT_APP_STAGE === 'dev'
    ? API_URL = 'http://localhost:8080/api'
    : API_URL = '/api'

/* User Policy */
export const getUserPoliciesUrl = () => {
    return API_URL + "/userPolicies";
}

export const getUserPolicyUrl = (policyId) => {
    return API_URL + "/userPolicy/" + policyId;
}

export const updateUserPolicyUrl = () => {
    return API_URL + "/userPolicy";
}

export const addUserPolicyUrl = () => {
    return API_URL + "/userPolicy";
}

export const deleteUserPolicyUrl = (policyId) => {
    return API_URL + "/userPolicy/" + policyId;
}

/* Computer Policy */
export const getComputerPoliciesUrl = () => {
    return API_URL + "/computerPolicies";
}

export const getComputerPolicyUrl = (policyId) => {
    return API_URL + "/computerPolicy/" + policyId;
}

export const updateComputerPolicyUrl = () => {
    return API_URL + "/computerPolicy";
}

export const addComputerPolicyUrl = () => {
    return API_URL + "/computerPolicy";
}

export const deleteComputerPolicyUrl = (policyId) => {
    return API_URL + "/computerPolicy/" + policyId;
}

/* Users */
export const getUsersUrl = () => {
    return API_URL + "/user";
}

export const updateUserUrl = () => {
    return API_URL + "/user";
}

export const addUserUrl = () => {
    return API_URL + "/user";
}

export const deleteUserUrl = (userId) => {
    return API_URL + "/user/" + userId;
}

/* Computers */
export const getComputersUrl = () => {
    return API_URL + "/computer";
}

export const updateComputerUrl = () => {
    return API_URL + "/computer";
}

export const deleteComputerUrl = (computerId) => {
    return API_URL + "/computer/" + computerId;
}

/* Applications */
export const getApplicationsUrl = () => {
    return API_URL + "/application";
}

export const updateApplicationUrl = () => {
    return API_URL + "/application";
}

export const addApplicationUrl = () => {
    return API_URL + "/application";
}

export const deleteApplicationUrl = (applicationId) => {
    return API_URL + "/application/" + applicationId;
}

/* Sites */
export const getSitesUrl = () => {
    return API_URL + "/site";
}

export const updateSiteUrl = () => {
    return API_URL + "/site";
}

export const addSiteUrl = () => {
    return API_URL + "/site";
}

export const deleteSiteUrl = (sitesId) => {
    return API_URL + "/site/" + sitesId;
}

/* Services */
export const getServicesUrl = () => {
    return API_URL + "/windowsService";
}

export const updateServiceUrl = () => {
    return API_URL + "/windowsService";
}

export const addServiceUrl = () => {
    return API_URL + "/windowsService";
}

export const deleteServiceUrl = (serviceId) => {
    return API_URL + "/windowsService/" + serviceId;
}

