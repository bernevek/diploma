package com.diploma.service.impl;

import com.diploma.DTO.UserPolicyDTO;
import com.diploma.DTO.PolicyForListDTO;
import com.diploma.entity.ComputerPolicy;
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

  @Autowired UserPolicyRepository userPolicyRepository;
  @Autowired ComputerPolicyRepository computerPolicyRepository;
  @Autowired LoginServiceImpl loginService;
  @Autowired UserRepository userRepository;

  @Override
  public void saveUserPolicy(UserPolicyDTO userPolicyDTO) {
    userPolicyRepository.save(userPolicyDTO.getUserPolicy());
  }

  @Override
  public void deleteUserPolicy(Long userPolicyId) {
    Optional<UserPolicy> userPolicyOptional = userPolicyRepository.findById(userPolicyId);
    Optional<UserPolicy> defaultUserPolicyOptional = userPolicyRepository.findById(1L);
    if (userPolicyId != 1L
        && userPolicyOptional.isPresent()
        && defaultUserPolicyOptional.isPresent()) {
      userRepository.saveAll(
          userPolicyOptional.get().getUsers().stream()
              .map(
                  user -> {
                    user.setUserPolicy(defaultUserPolicyOptional.get());
                    return user;
                  })
              .collect(Collectors.toList()));
      userPolicyRepository.deleteById(userPolicyId);
    }
  }

  @Override
  public UserPolicyDTO getUserPolicy(Long userPolicyId) {
    Optional<UserPolicy> policy = userPolicyRepository.findById(userPolicyId);
    return policy.isPresent() ? new UserPolicyDTO(policy.get()) : null;
  }

  @Override
  public List<PolicyForListDTO> getUserPolicies() {
    return userPolicyRepository.findAll().stream()
        .map(userPolicy -> new PolicyForListDTO(userPolicy))
        .collect(Collectors.toList());
  }

  @Override
  @Transactional
  public Policy getPolicyForAgent(String session) {
    Long userId = loginService.getSessions().get(session).getUserId();
    Long computerId = loginService.getSessions().get(session).getComputerId();
    Optional<UserPolicy> optionalUserPolicy = userPolicyRepository.findUserPolicyByUserId(userId);
    Optional<ComputerPolicy> optionalComputerPolicy =
        computerPolicyRepository.findComputerPolicyByComputerId(computerId);
    Policy policy = new Policy();
    if (optionalUserPolicy.isPresent()) {
      UserPolicy userPolicy = optionalUserPolicy.get();
      userPolicy.getBannedApps().stream()
          .forEach(application -> policy.getBannedApps().add(application.getValue()));
      userPolicy.getBannedSites().stream()
          .forEach(site -> policy.getBannedSites().add(site.getValue()));
    }
    if (optionalComputerPolicy.isPresent()) {
      ComputerPolicy computerPolicy = optionalComputerPolicy.get();
      computerPolicy.getServices().stream()
          .forEach(service -> policy.getBannedServices().add(service.getValue()));
    }
    return policy;
  }
}
