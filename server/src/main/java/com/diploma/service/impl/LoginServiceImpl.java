package com.diploma.service.impl;

import com.diploma.service.LoginService;
import org.springframework.stereotype.Service;

import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Service
public class LoginServiceImpl implements LoginService {
    private ConcurrentMap<Long, String> sessions = new ConcurrentHashMap<>();

    @Override
    public String loginPcUser(String login, String password) {
        //check user in db
        if (login.equals("1") && password.equals("1")) {
            String session = UUID.randomUUID().toString();
//            sessions.put(1L, session);
            return session;
        } else {
            return "";
        }
    }

    @Override
    public Boolean checkSession(String session) {
        return !session.equals("");
    }
}
