package com.diploma.service;

import com.diploma.DTO.UserPolicyDTO;
import com.diploma.DTO.PolicyForListDTO;
import localhost._8080.isecurity.Policy;

import java.util.List;

public interface UserPolicyService {
    void saveUserPolicy(UserPolicyDTO userPolicyDTO);
    void deleteUserPolicy(Long userPolicyId);
    UserPolicyDTO getUserPolicy(Long userPolicyId);
    List<PolicyForListDTO> getUserPolicies();
    Policy getPolicyForAgent(String session);
}
