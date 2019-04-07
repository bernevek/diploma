package com.diploma.entity;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "user")
public class User extends AbstractIdentifiableEntity {

  @NotNull
  @Column(name = "login", nullable = false, unique = true)
  private String login;

  @NotNull
  @Column(name = "password", nullable = false)
  private String password;

  @NotNull
  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  private UserPolicy userPolicy;

  @OneToMany(mappedBy = "user")
  private List<Report> reports;

  @OneToOne(mappedBy = "computersOwner")
  private Computer computer;
}
