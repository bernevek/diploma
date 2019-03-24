package com.diploma.DTO;

import com.diploma.entity.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
public class ComputerPolicyDTO extends PolicyDTO{
    private List<ConfigElementDTO> services;
//    private List<ComputerDTO> computers;
    public ComputerPolicyDTO(Long id,
                             String name,
                             List<ConfigElementDTO> services
    ) {
        super(id, name);
        this.services = services;
    }

    public ComputerPolicyDTO(ComputerPolicy computerPolicy) {
        super(computerPolicy.getId(), computerPolicy.getName());
        this.services = computerPolicy.
                        getServices().
                        stream().
                        map(service -> new ConfigElementDTO<>(service)).
                        collect(Collectors.toList());
    }

    @JsonIgnore
    public ComputerPolicy getComputerPolicy() {
        ComputerPolicy policy = new ComputerPolicy(this.getName(),
                this.getServices().
                        stream().
                        map(configElementDTO -> (Service) configElementDTO.getConfigElement(new Service())).
                        collect(Collectors.toList()));
        policy.setId(this.getId());
        return policy;
    }
}
