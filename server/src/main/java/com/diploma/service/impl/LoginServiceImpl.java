package com.diploma.service.impl;

import com.diploma.service.LoginService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Getter
@Setter
@Service
public class LoginServiceImpl implements LoginService {
    private ConcurrentMap<String, Ids> sessions = new ConcurrentHashMap<>();

    @Override
    public String loginPcUser(Long computerId, String login, String password) {
        //check user in db
        if (login.equals("1") && password.equals("1")) {
            String session = UUID.randomUUID().toString();
            sessions.put(session, new Ids(1L, computerId));
            return session;
        } else {
            return "";
        }
    }

    @Override
    public Boolean checkSession(String session) {
        return !session.equals("");
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public class Ids {
        private Long userId;
        private Long computerId;

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
