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
@Table(name = "application")
public class Application extends AbstractIdentifiableEntity {

    @NotNull
    @Column(name = "label", nullable = false)
    private String label;

    @NotNull
    @Column(name = "value", nullable = false)
    private String value;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "bannedApps")
    private List<Policy> policies;
}
