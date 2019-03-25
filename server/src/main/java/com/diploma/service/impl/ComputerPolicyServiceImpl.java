package com.diploma.service.impl;

import com.diploma.DTO.ComputerPolicyDTO;
import com.diploma.DTO.PolicyForListDTO;
import com.diploma.entity.ComputerPolicy;
import com.diploma.repository.ComputerPolicyRepository;
import com.diploma.repository.ComputerRepository;
import com.diploma.service.ComputerPolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ComputerPolicyServiceImpl implements ComputerPolicyService {

    @Autowired
    ComputerPolicyRepository computerPolicyRepository;
    @Autowired
    ComputerRepository computerRepository;

    @Override
    public void saveComputerPolicy(ComputerPolicyDTO computerPolicyDTO) {
        computerPolicyRepository.save(computerPolicyDTO.getComputerPolicy());
    }

    @Override
    public void deleteComputerPolicy(Long computerPolicyId) {
        Optional<ComputerPolicy> computerPolicyOptional = computerPolicyRepository.findById(computerPolicyId);
        Optional<ComputerPolicy> defaultComputerPolicyOptional = computerPolicyRepository.findById(2L);
        if (computerPolicyId != 2L && computerPolicyOptional.isPresent() && defaultComputerPolicyOptional.isPresent()) {
            computerRepository.saveAll(computerPolicyOptional.
                    get().
                    getComputers().
                    stream().
                    map(computer -> {
                        computer.setComputerPolicy(defaultComputerPolicyOptional.get());
                        return computer;
                    }).
                    collect(Collectors.toList())
            );
            computerPolicyRepository.deleteById(computerPolicyId);
        }


    }

    @Override
    public ComputerPolicyDTO getComputerPolicy(Long computerPolicyId) {
        Optional<ComputerPolicy> policy = computerPolicyRepository.findById(computerPolicyId);
        return policy.isPresent() ? new ComputerPolicyDTO(policy.get()) : null;
    }

    @Override
    public List<PolicyForListDTO> getComputerPolicies() {
        return computerPolicyRepository.
                findAll().
                stream().
                map(computerPolicy -> new PolicyForListDTO(computerPolicy)).
                collect(Collectors.toList());
    }
}
