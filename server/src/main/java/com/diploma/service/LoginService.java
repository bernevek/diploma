package com.diploma.service;

public interface LoginService {
  String loginPcUser(Long computerId, String login, String password);

  String logoutPcUser(String session);

  Boolean checkSession(String session);
}
