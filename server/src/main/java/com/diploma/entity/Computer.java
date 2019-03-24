package com.diploma.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "computer")
public class Computer extends AbstractIdentifiableEntity{

    @NotNull
    @Column(name = "local_id", nullable = false, unique = true)
    private Long localId;

    @NotNull
    @Column(name = "computer_name", nullable = false)
    private String computerName;

    @NotNull
    @Column(name = "local_user_name", nullable = false)
    private String localUserName;

    @NotNull
    @Column(name = "ip", nullable = false)
    private String ip;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private ComputerPolicy computerPolicy;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="owner_id")
    private User computersOwner;
}
