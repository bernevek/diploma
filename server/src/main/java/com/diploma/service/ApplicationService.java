package com.diploma.service;

import com.diploma.entity.Application;

import java.util.List;

public interface ApplicationService {
    void addApplication(Application application);
    void deleteApplication(Long applicationId);
    void editApplication(Long applicationId, Application application);
    List<Application> getApplications();
}
