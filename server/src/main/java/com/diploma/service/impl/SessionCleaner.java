package com.diploma.service.impl;

import com.diploma.service.ReportService;

import java.time.Instant;
import java.util.TimerTask;
import java.util.concurrent.ConcurrentMap;

public class SessionCleaner extends TimerTask {

  private ConcurrentMap<String, LoginServiceImpl.Ids> sessions;

  private ReportService reportService;

  public SessionCleaner(ConcurrentMap<String, LoginServiceImpl.Ids> sessions, ReportService reportService) {
    this.reportService = reportService;
    this.sessions = sessions;
  }

  public void run() {
    sessions.entrySet().stream()
        .filter(
            stringIdsEntry -> {
              return stringIdsEntry.getValue().getInstant().isBefore(Instant.now());
            })
        .forEach(
            stringIdsEntry -> {
              reportService.closeReport(stringIdsEntry.getValue().getUserId(), stringIdsEntry.getValue().getComputerId());
              sessions.remove(stringIdsEntry.getKey());
            });
  }
}
