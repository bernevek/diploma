package com.diploma.service;

public interface LoginService {
    String loginPcUser(Long computerId, String login, String password);

    Boolean checkSession(String session);
}
