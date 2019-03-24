package com.diploma.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "computer_policy")
public class ComputerPolicy extends BasePolicy  {

    public ComputerPolicy(@NotNull String name, List<Service> services) {
        super(name);
        this.services = services;
    }

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "policy_services",
            joinColumns = { @JoinColumn(name = "policy_id") },
            inverseJoinColumns = { @JoinColumn(name = "service_id") }
    )
    protected List<Service> services;

    @OneToMany(mappedBy = "computerPolicy")
    private List<Computer> computers;
}