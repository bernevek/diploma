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
@Table(name = "config_element")
@Inheritance(
        strategy = InheritanceType.JOINED
)
public abstract class ConfigElement extends AbstractIdentifiableEntity {

    public ConfigElement(@NotNull String label, @NotNull String value) {
        this.label = label;
        this.value = value;
    }

    @NotNull
    @Column(name = "label", nullable = false)
    private String label;

    @NotNull
    @Column(name = "value", nullable = false)
    private String value;
}
