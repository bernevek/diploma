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
@Table(name = "computer_policy")
public class ComputerPolicy extends BasePolicy  {

    public ComputerPolicy(@NotNull String name, List<Application> bannedApps, List<Site> bannedSites, List<LoginMethod> loginMethods) {
        super(name, bannedApps, bannedSites, loginMethods);
    }

    @NotNull
    @Column(name = "test_column", nullable = false)
    protected String testColumn;

    @OneToMany(mappedBy = "computerPolicy", cascade = CascadeType.REMOVE)
    private List<Computer> computers;
}