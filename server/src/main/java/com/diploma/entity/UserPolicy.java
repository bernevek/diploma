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

    public UserPolicy(@NotNull String name, List<Application> bannedApps, List<Site> bannedSites, List<LoginMethod> loginMethods) {
        super(name, bannedApps, bannedSites, loginMethods);
    }

    @OneToMany(mappedBy = "userPolicy")
    private List<User> users;
}
