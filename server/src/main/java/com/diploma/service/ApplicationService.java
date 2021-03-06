package com.diploma.service;

import com.diploma.DTO.ConfigElementDTO;

import java.util.List;

public interface ApplicationService {
  ConfigElementDTO saveApplication(ConfigElementDTO application);

  void deleteApplication(Long applicationId);

  List<ConfigElementDTO> getApplications();

  List<String> getApplicationsForAgent();
}
