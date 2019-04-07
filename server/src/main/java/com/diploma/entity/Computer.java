package com.diploma.entity;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
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
@Table(name = "computer")
public class Computer extends AbstractIdentifiableEntity {

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

  @OneToMany(mappedBy = "computer")
  private List<Report> reports;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "owner_id")
  private User computersOwner;
}
