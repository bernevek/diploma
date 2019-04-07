package com.diploma.DTO;

import java.time.Instant;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReportFilter {
  private Long userId;
  private Long computerId;
  private Instant loginTime;
  private Instant logoutTime;
}
