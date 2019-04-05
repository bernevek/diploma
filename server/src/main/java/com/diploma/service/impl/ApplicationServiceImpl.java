package com.diploma.service.impl;

import com.diploma.DTO.ConfigElementDTO;
import com.diploma.entity.Application;
import com.diploma.repository.ApplicationRepository;
import com.diploma.service.ApplicationService;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplicationServiceImpl implements ApplicationService {

  @Autowired ApplicationRepository applicationRepository;

  @Override
  public ConfigElementDTO saveApplication(ConfigElementDTO application) {
    return new ConfigElementDTO<Application>(
        applicationRepository.save((Application) application.getConfigElement(new Application())));
  }

  @Override
  public void deleteApplication(Long applicationId) {
    applicationRepository.deleteById(applicationId);
  }

  @Override
  public List<ConfigElementDTO> getApplications() {
    return applicationRepository.findAll().stream()
        .map(application -> new ConfigElementDTO<>(application))
        .collect(Collectors.toList());
  }

  @Override
  public List<String> getApplicationsForAgent() {
    return applicationRepository.findAll().stream()
        .map(application -> application.getValue())
        .collect(Collectors.toList());
  }
}
