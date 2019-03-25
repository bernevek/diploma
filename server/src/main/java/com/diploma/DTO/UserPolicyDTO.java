package com.diploma.DTO;

import com.diploma.entity.Application;
import com.diploma.entity.Site;
import com.diploma.entity.UserPolicy;
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
public class UserPolicyDTO extends PolicyDTO {
    private List<ConfigElementDTO> bannedApps;
    private List<ConfigElementDTO> bannedSites;
    private List<SimpleUserDTO> users;
    public UserPolicyDTO(Long id,
                         String name,
                         List<ConfigElementDTO> bannedApps,
                         List<ConfigElementDTO> bannedSites,
                         List<SimpleUserDTO> users
    ) {
        super(id, name);
        this.bannedApps = bannedApps;
        this.bannedSites = bannedSites;
        this.users = users;
    }

    public UserPolicyDTO(UserPolicy userPolicy) {
        super(userPolicy.getId(), userPolicy.getName());
        this.bannedApps = userPolicy.
                        getBannedApps().
                        stream().
                        map(application -> new ConfigElementDTO<>(application)).
                        collect(Collectors.toList());
        this.bannedSites = userPolicy.
                        getBannedSites().
                        stream().
                        map(site -> new ConfigElementDTO<>(site)).
                        collect(Collectors.toList());
        this.users = userPolicy.getUsers().stream().map(user -> new SimpleUserDTO(user)).collect(Collectors.toList());
    }

    @JsonIgnore
    public UserPolicy getUserPolicy() {
        UserPolicy policy = new UserPolicy(this.getName(),
                this.getBannedApps().
                        stream().
                        map(configElementDTO -> (Application) configElementDTO.getConfigElement(new Application())).
                        collect(Collectors.toList()),
                this.getBannedSites().
                        stream().
                        map(configElementDTO -> (Site) configElementDTO.getConfigElement(new Site())).
                        collect(Collectors.toList()));
        policy.setId(this.getId());
        return policy;
    }
}
