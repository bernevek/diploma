package com.diploma.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "config_element")
@Inheritance(strategy = InheritanceType.JOINED)
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
