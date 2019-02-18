package com.diploma.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public abstract class Policy extends AbstractIdentifiableEntity {
    public Policy(Long id, String name, List<Application> bannedApps, List<Site> bannedSites, List<LoginMethod> loginMethods) {
        super(id);
        this.name = name;
        this.bannedApps = bannedApps;
        this.bannedSites = bannedSites;
        this.loginMethods = loginMethods;
    }

    protected String name;
    protected List<Application> bannedApps;
    protected List<Site> bannedSites;
    protected List<LoginMethod> loginMethods;
}
