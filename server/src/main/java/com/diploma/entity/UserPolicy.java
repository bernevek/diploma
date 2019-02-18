package com.diploma.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class UserPolicy extends Policy {
    public UserPolicy(
            Long id,
            String name,
            List<Application> bannedApps,
            List<Site> bannedSites,
            List<LoginMethod> loginMethods) {
        super(id, name, bannedApps, bannedSites, loginMethods);
    }
}
