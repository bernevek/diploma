package com.diploma.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "base_policy")
@Inheritance(
        strategy = InheritanceType.JOINED
)
public abstract class BasePolicy extends AbstractIdentifiableEntity {

    public BasePolicy(@NotNull String name) {
        this.name = name;
    }

    @NotNull
    @Column(name = "name", nullable = false)
    protected String name;
}
