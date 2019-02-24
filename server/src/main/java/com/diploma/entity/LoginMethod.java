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
@Entity
@Table(name = "login_method")
public class LoginMethod extends AbstractIdentifiableEntity {

    @NotNull
    @Column(name = "label", nullable = false)
    private String label;

    @NotNull
    @Column(name = "value", nullable = false)
    private String value;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "loginMethods")
    private List<Policy> policies;
}
