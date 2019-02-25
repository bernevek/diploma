package com.diploma.service.impl;

import com.diploma.DTO.ConfigElementDTO;
import com.diploma.entity.LoginMethod;
import com.diploma.repository.LoginMethodRepository;
import com.diploma.service.LoginMethodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class LoginMethodServiceImpl implements LoginMethodService {

    @Autowired
    LoginMethodRepository loginMethodRepository;

    @Override
    public List<ConfigElementDTO> getLoginMethods() {
        return loginMethodRepository.findAll().stream().map(loginMethod -> new ConfigElementDTO<>(loginMethod)).collect(Collectors.toList());
    }
}
