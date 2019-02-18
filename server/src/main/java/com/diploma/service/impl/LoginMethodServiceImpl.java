package com.diploma.service.impl;

import com.diploma.entity.LoginMethod;
import com.diploma.service.LoginMethodService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class LoginMethodServiceImpl implements LoginMethodService {
    private Map<Long, LoginMethod> loginMethods = new HashMap<>();
    private Long count = 0L;

    LoginMethodServiceImpl() {
        loginMethods.put(count, new LoginMethod(count++,"password","password"));
        loginMethods.put(count, new LoginMethod(count++,"finger print","fingerPrint"));
    }
    @Override
    public List<LoginMethod> getLoginMethods() {
        return new ArrayList<LoginMethod>(loginMethods.values());
    }
}
