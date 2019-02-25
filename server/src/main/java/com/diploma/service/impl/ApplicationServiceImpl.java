package com.diploma.service.impl;

import com.diploma.DTO.ConfigElementDTO;
import com.diploma.entity.Application;
import com.diploma.repository.ApplicationRepository;
import com.diploma.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ApplicationServiceImpl implements ApplicationService{

    @Autowired
    ApplicationRepository applicationRepository;

    @Override
    public void saveApplication(ConfigElementDTO application) {
        applicationRepository.save((Application) application.getConfigElement(new Application()));
    }

    @Override
    public void deleteApplication(Long applicationId) {
        applicationRepository.deleteById(applicationId);
    }

    @Override
    public List<ConfigElementDTO> getApplications() {
        return applicationRepository.findAll().stream().map(application -> new ConfigElementDTO<>(application)).collect(Collectors.toList());
    }
}
