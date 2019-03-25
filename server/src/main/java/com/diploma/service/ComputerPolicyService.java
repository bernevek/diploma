package com.diploma.service;


import com.diploma.DTO.ComputerPolicyDTO;
import com.diploma.DTO.PolicyForListDTO;

import java.util.List;

public interface ComputerPolicyService {
    void saveComputerPolicy(ComputerPolicyDTO computerPolicyDTO);
    void deleteComputerPolicy(Long computerPolicyId);
    ComputerPolicyDTO getComputerPolicy(Long computerPolicyId);
    List<PolicyForListDTO> getComputerPolicies();
}
