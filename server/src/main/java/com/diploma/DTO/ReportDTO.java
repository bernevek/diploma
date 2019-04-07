package com.diploma.DTO;

import com.diploma.entity.Report;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReportDTO {
  private String userName;
  private String computerName;
  private String loginTime;
  private String logoutTime;

  public ReportDTO(Report report) {
    this.userName = report.getUser().getLogin();
    this.computerName = report.getComputer().getComputerName();
    this.loginTime = report.getLoginTime().toString();
    this.logoutTime = report.getLogoutTime().toString();
  }

}
