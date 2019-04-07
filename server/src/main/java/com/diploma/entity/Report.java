package com.diploma.entity;

import java.time.Instant;
import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "report")
public class Report extends AbstractIdentifiableEntity {

  @Column(name = "login_time", nullable = false)
  private Instant loginTime;

  @Column(name = "logout_time")
  private Instant logoutTime;

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  private User user;

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  private Computer computer;
}
