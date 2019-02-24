package com.diploma.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
public abstract class Policy extends AbstractIdentifiableEntity {

    @NotNull
    @Column(name = "name", nullable = false)
    protected String name;

    @ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
    @JoinTable(
            name = "policy_apps",
            joinColumns = { @JoinColumn(name = "policy_id") },
            inverseJoinColumns = { @JoinColumn(name = "app_id") }
    )
    protected List<Application> bannedApps;

    @ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
    @JoinTable(
            name = "policy_sites",
            joinColumns = { @JoinColumn(name = "policy_id") },
            inverseJoinColumns = { @JoinColumn(name = "site_id") }
    )
    protected List<Site> bannedSites;

    @ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
    @JoinTable(
            name = "policy_login_methods",
            joinColumns = { @JoinColumn(name = "policy_id") },
            inverseJoinColumns = { @JoinColumn(name = "login_method_id") }
    )
    protected List<LoginMethod> loginMethods;
}
