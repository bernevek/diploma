package com.diploma.DTO;

import com.diploma.entity.Application;
import com.diploma.entity.ComputerPolicy;
import com.diploma.entity.LoginMethod;
import com.diploma.entity.Site;
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
    public ComputerPolicyDTO(Long id,
                             String name,
                             List<ConfigElementDTO> bannedApps,
                             List<ConfigElementDTO> bannedSites,
                             List<ConfigElementDTO> loginMethods
    ) {
        super(id, name, bannedApps, bannedSites, loginMethods);
    }

    public ComputerPolicyDTO(ComputerPolicy computerPolicy) {
        super(computerPolicy.getId(),
                computerPolicy.getName(),
                computerPolicy.
                        getBannedApps().
                        stream().
                        map(application -> new ConfigElementDTO<>(application)).
                        collect(Collectors.toList()),
                computerPolicy.
                        getBannedSites().
                        stream().
                        map(site -> new ConfigElementDTO<>(site)).
                        collect(Collectors.toList()),
                computerPolicy.
                        getLoginMethods().
                        stream().
                        map(loginMethod -> new ConfigElementDTO<>(loginMethod)).
                        collect(Collectors.toList()));
    }

    @JsonIgnore
    public ComputerPolicy getComputerPolicy() {
        ComputerPolicy policy = new ComputerPolicy(this.getName(),
                this.getBannedApps().
                        stream().
                        map(configElementDTO -> (Application) configElementDTO.getConfigElement(new Application())).
                        collect(Collectors.toList()),
                this.getBannedSites().
                        stream().
                        map(configElementDTO -> (Site) configElementDTO.getConfigElement(new Site())).
                        collect(Collectors.toList()),
                this.getLoginMethods().
                        stream().
                        map(configElementDTO -> (LoginMethod) configElementDTO.getConfigElement(new LoginMethod())).
                        collect(Collectors.toList()));
        policy.setId(this.getId());
        return policy;
    }
}
