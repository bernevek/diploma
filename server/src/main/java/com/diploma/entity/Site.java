package com.diploma.entity;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "site")
public class Site extends ConfigElement {

  public Site(@NotNull String label, @NotNull String value) {
    super(label, value);
  }

  @ManyToMany(fetch = FetchType.LAZY, mappedBy = "bannedSites")
  private List<UserPolicy> policies;
}
