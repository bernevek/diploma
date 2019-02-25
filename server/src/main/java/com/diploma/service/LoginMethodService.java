package com.diploma.service;

import com.diploma.DTO.ConfigElementDTO;
import com.diploma.entity.LoginMethod;

import java.util.List;

public interface LoginMethodService {
    List<ConfigElementDTO> getLoginMethods();
}
