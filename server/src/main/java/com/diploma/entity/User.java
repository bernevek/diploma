package com.diploma.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@Entity
@Table(name = "user")
public class User extends AbstractIdentifiableEntity {

    @NotNull
    @Column(name = "login", nullable = false)
    private String login;

    @NotNull
    @Column(name = "password", nullable = false)
    private String password;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private UserPolicy userPolicy;

    @OneToOne(mappedBy = "computersOwner")
    private Computer computer;
}