package com.diploma.service;

import com.diploma.entity.UserPolicy;

import java.util.List;

public interface UserPolicyService {
    void addUserPolicy(UserPolicy userPolicy);
    void deleteUserPolicy(Long userPolicyId);
    void editUserPolicy(Long userPolicyId, UserPolicy userPolicy);
    UserPolicy getUserPolicy(Long userPolicyId);
    List<UserPolicy> getUserPolicies();
}
