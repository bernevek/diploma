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
@Table(name = "base_policy")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class BasePolicy extends AbstractIdentifiableEntity {

  public BasePolicy(@NotNull String name) {
    this.name = name;
  }

  @NotNull
  @Column(name = "name", nullable = false)
  protected String name;
}
