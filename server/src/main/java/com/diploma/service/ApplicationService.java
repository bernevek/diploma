package com.diploma.service;

import com.diploma.DTO.ConfigElementDTO;
import com.diploma.entity.Application;

import java.util.List;

public interface ApplicationService {
    void saveApplication(ConfigElementDTO application);
    void deleteApplication(Long applicationId);
    List<ConfigElementDTO> getApplications();
}
