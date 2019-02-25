package com.diploma.service;

import com.diploma.DTO.UserPolicyDTO;
import com.diploma.entity.UserPolicy;

import java.util.List;

public interface UserPolicyService {
    void saveUserPolicy(UserPolicyDTO userPolicyDTO);
    void deleteUserPolicy(Long userPolicyId);
    UserPolicyDTO getUserPolicy(Long userPolicyId);
    List<UserPolicyDTO> getUserPolicies();
}
