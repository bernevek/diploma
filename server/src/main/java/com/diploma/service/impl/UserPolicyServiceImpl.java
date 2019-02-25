package com.diploma.service.impl;

import com.diploma.DTO.UserPolicyDTO;
import com.diploma.entity.UserPolicy;
import com.diploma.repository.ApplicationRepository;
import com.diploma.repository.LoginMethodRepository;
import com.diploma.repository.SiteRepository;
import com.diploma.repository.UserPolicyRepository;
import com.diploma.service.ApplicationService;
import com.diploma.service.LoginMethodService;
import com.diploma.service.SiteService;
import com.diploma.service.UserPolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserPolicyServiceImpl implements UserPolicyService {

    @Autowired
    UserPolicyRepository userPolicyRepository;

    @Override
    public void saveUserPolicy(UserPolicyDTO userPolicyDTO) {
        userPolicyRepository.save(userPolicyDTO.getUserPolicy());
    }

    @Override
    public void deleteUserPolicy(Long userPolicyId) {
        userPolicyRepository.deleteById(userPolicyId);
    }

    @Override
    public UserPolicyDTO getUserPolicy(Long userPolicyId) {
        Optional<UserPolicy> policy = userPolicyRepository.findById(userPolicyId);
        return policy.isPresent() ? new UserPolicyDTO(policy.get()) : null;
    }

    @Override
    public List<UserPolicyDTO> getUserPolicies() {
        return userPolicyRepository.
                findAll().
                stream().
                map(userPolicy -> new UserPolicyDTO(userPolicy)).
                collect(Collectors.toList());
    }
}
