package com.diploma.service.impl;

import com.diploma.entity.Computer;
import com.diploma.entity.User;
import com.diploma.repository.ComputerRepository;
import com.diploma.repository.UserRepository;
import com.diploma.service.LoginService;
import com.diploma.service.ReportService;
import java.time.Instant;
import java.util.Optional;
import java.util.Timer;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import javax.annotation.PostConstruct;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Getter
@Setter
@Service
public class LoginServiceImpl implements LoginService {

  @Autowired private UserRepository userRepository;

  @Autowired private ComputerRepository computerRepository;

  @Autowired private ReportService reportService;

  private ConcurrentMap<String, Ids> sessions = new ConcurrentHashMap<>();

  @PostConstruct
  public void initSessionCleaner() {
    Timer time = new Timer();
    SessionCleaner sessionCleaner = new SessionCleaner(sessions, reportService);
    time.schedule(sessionCleaner, 0, 300000);
  }

  @Override
  public String loginPcUser(Long computerId, String login, String password) {
    User user = userRepository.getUserByLoginAndPassword(login, password);
    Optional<Computer> computerOptional = computerRepository.findById(computerId);
    if (user != null && computerOptional.isPresent()) {
      String session = UUID.randomUUID().toString();
      Ids ids = new Ids(user.getId(), computerId, Instant.now().plusSeconds(300));
      if (sessions.containsValue(ids)) {
        sessions.entrySet().stream()
            .filter(stringIdsEntry -> !stringIdsEntry.getValue().equals(ids));
      }
      sessions.put(session, ids);
      reportService.addNewReport(user, computerOptional.get());
      return session;
    } else {
      return "";
    }
  }

  public String logoutPcUser(String session) {
    if (sessions.containsKey(session)) {
      Ids ids = sessions.get(session);
      reportService.closeReport(ids.getUserId(), ids.getComputerId());
      sessions.remove(session);
    }
    return "OK";
  }

  @Override
  public Boolean checkSession(String session) {
    if (sessions.containsKey(session)
        && sessions.get(session).getInstant().isAfter(Instant.now())) {
      sessions.get(session).setInstant(Instant.now().plusSeconds(300));
      return true;
    } else sessions.remove(session);
    return false;
  }

  @Getter
  @Setter
  @NoArgsConstructor
  @AllArgsConstructor
  public class Ids {
    private Long userId;
    private Long computerId;
    private Instant instant;

    @Override
    public boolean equals(Object o) {
      if (this == o) return true;
      if (!(o instanceof Ids)) return false;

      Ids ids = (Ids) o;

      if (!userId.equals(ids.userId)) return false;
      return computerId.equals(ids.computerId);
    }

    @Override
    public int hashCode() {
      int result = userId.hashCode();
      result = 31 * result + computerId.hashCode();
      return result;
    }
  }
}
