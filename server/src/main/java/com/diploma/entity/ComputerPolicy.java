package com.diploma.entity;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "computer_policy")
public class ComputerPolicy extends BasePolicy {

  public ComputerPolicy(@NotNull String name, List<WindowsService> services) {
    super(name);
    this.services = services;
  }

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(
      name = "policy_services",
      joinColumns = {@JoinColumn(name = "policy_id")},
      inverseJoinColumns = {@JoinColumn(name = "service_id")})
  protected List<WindowsService> services;

  @OneToMany(mappedBy = "computerPolicy")
  private List<Computer> computers;
}
