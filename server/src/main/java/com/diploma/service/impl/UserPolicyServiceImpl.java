package com.diploma.service.impl;

import com.diploma.DTO.UserPolicyDTO;
import com.diploma.entity.UserPolicy;
import com.diploma.repository.ApplicationRepository;
import com.diploma.repository.LoginMethodRepository;
import com.diploma.repository.SiteRepository;
import com.diploma.repository.UserPolicyRepository;
import com.diploma.service.*;
import localhost._8080.isecurity.Policy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserPolicyServiceImpl implements UserPolicyService {

    @Autowired
    UserPolicyRepository userPolicyRepository;
    @Autowired
    LoginServiceImpl loginService;

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

    @Override
    @Transactional
    public Policy getPolicyForAgent(String session) {
        Long userId = loginService.getSessions().get(session).getUserId();
//        todo
//        get policy by user and computer id
        Optional<UserPolicy> optionalUserPolicy = userPolicyRepository.findById(userId);
        if (optionalUserPolicy.isPresent()) {
            UserPolicy userPolicy = optionalUserPolicy.get();
            Policy policy = new Policy();
            policy.setId(userPolicy.getId());
            policy.setName(userPolicy.getName());
            userPolicy.getBannedApps().
                    stream().
                    forEach(
                            application -> policy.getBannedApps().add(application.getValue())
                    );
            userPolicy.getBannedSites().
                    stream().
                    forEach(
                            site -> policy.getBannedSites().add(site.getValue())
                    );
            userPolicy.getLoginMethods().
                    stream().
                    forEach(
                            loginMethod -> policy.getLoginMethods().add(loginMethod.getValue())
                    );
            return policy;
        }
        return null;
    }
}
