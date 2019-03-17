package com.diploma.service.impl;

import com.diploma.DTO.UserPolicyDTO;
import com.diploma.DTO.UserPolicyForListDTO;
import com.diploma.entity.User;
import com.diploma.entity.UserPolicy;
import com.diploma.repository.*;
import com.diploma.service.*;
import localhost._8080.isecurity.Policy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserPolicyServiceImpl implements UserPolicyService {

    @Autowired
    UserPolicyRepository userPolicyRepository;
    @Autowired
    LoginServiceImpl loginService;
    @Autowired
    UserRepository userRepository;

    @Override
    public void saveUserPolicy(UserPolicyDTO userPolicyDTO) {
        userPolicyRepository.save(userPolicyDTO.getUserPolicy());
    }

    @Override
    public void deleteUserPolicy(Long userPolicyId) {
        Optional<UserPolicy> userPolicyOptional = userPolicyRepository.findById(userPolicyId);
        Optional<UserPolicy> defaultUserPolicyOptional = userPolicyRepository.findById(1L);
        if (userPolicyId != 1L && userPolicyOptional.isPresent() && defaultUserPolicyOptional.isPresent()) {
            userRepository.saveAll(userPolicyOptional.
                                                get().
                                                getUsers().
                                                stream().
                                                map(user -> {
                                                    user.setUserPolicy(defaultUserPolicyOptional.get());
                                                    return user;
                                                }).
                                                collect(Collectors.toList())
            );
            userPolicyRepository.deleteById(userPolicyId);
        }
    }

    @Override
    public UserPolicyDTO getUserPolicy(Long userPolicyId) {
        Optional<UserPolicy> policy = userPolicyRepository.findById(userPolicyId);
        return policy.isPresent() ? new UserPolicyDTO(policy.get()) : null;
    }

    @Override
    public List<UserPolicyForListDTO> getUserPolicies() {
        return userPolicyRepository.
                findAll().
                stream().
                map(userPolicy -> new UserPolicyForListDTO(userPolicy)).
                collect(Collectors.toList());
    }

    @Override
    @Transactional
    public Policy getPolicyForAgent(String session) {
        Long userId = loginService.getSessions().get(session).getUserId();
        Optional<UserPolicy> optionalUserPolicy = userPolicyRepository.findUserPolicyByUserId(userId);
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
