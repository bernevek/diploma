package com.diploma.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "user_policy")
public class UserPolicy extends BasePolicy {

    public UserPolicy(@NotNull String name, List<Application> bannedApps, List<Site> bannedSites) {
        super(name);
        this.bannedApps = bannedApps;
        this.bannedSites = bannedSites;
    }

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "policy_apps",
            joinColumns = { @JoinColumn(name = "policy_id") },
            inverseJoinColumns = { @JoinColumn(name = "app_id") }
    )
    protected List<Application> bannedApps;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "policy_sites",
            joinColumns = { @JoinColumn(name = "policy_id") },
            inverseJoinColumns = { @JoinColumn(name = "site_id") }
    )
    protected List<Site> bannedSites;

    @OneToMany(mappedBy = "userPolicy")
    private List<User> users;
}
