package com.diploma.service.impl;

import com.diploma.entity.User;
import com.diploma.repository.UserRepository;
import com.diploma.service.LoginService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Getter
@Setter
@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private UserRepository userRepository;

    private ConcurrentMap<String, Ids> sessions = new ConcurrentHashMap<>();

    @Override
    public String loginPcUser(Long computerId, String login, String password) {
        User user =userRepository.getUserByLoginAndPassword(login, password);
        if (user != null) {
            String session = UUID.randomUUID().toString();
            Ids ids = new Ids(user.getId(), computerId, Instant.now().plusSeconds(400));
            if (sessions.containsValue(ids)) {
                sessions.entrySet().stream().filter(stringIdsEntry -> !stringIdsEntry.getValue().equals(ids));
            }
            sessions.put(session, ids);
            return session;
        } else {
            return "";
        }
    }

    @Override
    public Boolean checkSession(String session) {
        if (sessions.containsKey(session) && sessions.get(session).getInstant().isAfter(Instant.now())) {
            sessions.get(session).setInstant(Instant.now().plusSeconds(400));
            return true;
        } else
            sessions.remove(session);
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
