package com.diploma.service;

import com.diploma.DTO.ReportDTO;
import com.diploma.DTO.ReportFilter;
import com.diploma.entity.Computer;
import com.diploma.entity.User;

import java.time.Instant;
import java.util.List;

public interface ReportService {
  List<ReportDTO> getReports(ReportFilter reportFilter);

  void addNewReport(User user, Computer computer);

  void closeReport(Long userId, Long computerId);
}
