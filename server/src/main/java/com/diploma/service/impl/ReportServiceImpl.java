package com.diploma.service.impl;

import com.diploma.DTO.ReportDTO;
import com.diploma.DTO.ReportFilter;
import com.diploma.entity.Computer;
import com.diploma.entity.Report;
import com.diploma.entity.User;
import com.diploma.repository.ReportRepository;
import com.diploma.service.ReportService;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportServiceImpl implements ReportService {

  @Autowired ReportRepository reportRepository;

  @Override
  public List<ReportDTO> getReports(ReportFilter reportFilter) {
    Long userId = reportFilter.getUserId();
    Long computerId = reportFilter.getComputerId();
    Instant loginTime = reportFilter.getLoginTime();
    Instant logoutTime = reportFilter.getLogoutTime();
    List<Report> reports = null;
    if (loginTime != null && logoutTime != null) {
      reports = reportRepository.findAllByUserIdAndComputerIdAndLoginTimeAfterAndLogoutTimeBefore(
              userId, computerId, loginTime, logoutTime);
    } else if (loginTime != null && logoutTime == null) {
      reports = reportRepository.findAllByUserIdAndComputerIdAndLoginTimeAfter(
              userId, computerId, loginTime);
    } else if (loginTime == null && logoutTime != null) {
      reports = reportRepository.findAllByUserIdAndComputerIdAndLogoutTimeBefore(
              userId, computerId, logoutTime);
    } else if (loginTime == null && logoutTime == null) {
      reports = reportRepository.findAllByUserIdAndComputerId(
              userId, computerId);
    } else {
      return null;
    }
    return reports.stream().map(report -> new ReportDTO(report)).collect(Collectors.toList());
  }

  @Override
  public void addNewReport(User user, Computer computer) {
    Report report = new Report();
    report.setUser(user);
    report.setComputer(computer);
    report.setLoginTime(Instant.now());
    reportRepository.save(report);
  }

  @Override
  public void closeReport(Long userId, Long computerId) {
    Optional<List<Report>> reportOptional =
        reportRepository.findReportByUserIdAndComputerIdAndLogoutTimeIsNull(userId, computerId);
    List<Report> reports = null;
    if (reportOptional.isPresent()) {
      reports = reportOptional.get();
      for (Report report : reports) {
        report.setLogoutTime(Instant.now());
      }
      reportRepository.saveAll(reports);
    }
  }
}
