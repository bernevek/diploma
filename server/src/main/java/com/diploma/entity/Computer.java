package com.diploma.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@Entity
@Table(name = "computer")
public class Computer extends AbstractIdentifiableEntity{

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @NotNull
    @Column(name = "login", nullable = false)
    private String login;

    @NotNull
    @Column(name = "password", nullable = false)
    private String password;

    @NotNull
    @Column(name = "ip", nullable = false)
    private String ip;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private ComputerPolicy computerPolicy;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="owner_id")
    private User computersOwner;
}
