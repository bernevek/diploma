package com.diploma.service;

public interface LoginService {
    String loginPcUser(String login, String password);

    Boolean checkSession(String session);
}
