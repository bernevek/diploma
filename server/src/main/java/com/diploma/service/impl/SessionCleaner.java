package com.diploma.service.impl;

import java.time.Instant;
import java.util.TimerTask;
import java.util.concurrent.ConcurrentMap;

public class SessionCleaner extends TimerTask {

  private ConcurrentMap<String, LoginServiceImpl.Ids> sessions;

  public SessionCleaner(ConcurrentMap<String, LoginServiceImpl.Ids> sessions) {
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
              sessions.remove(stringIdsEntry.getKey());
            });
  }
}
