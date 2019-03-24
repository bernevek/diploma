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
@NoArgsConstructor
@Entity
@Table(name = "application")
public class Application extends ConfigElement {

    public Application(@NotNull String label, @NotNull String value) {
        super(label, value);
    }

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "bannedApps")
    private List<UserPolicy> policies;
}
