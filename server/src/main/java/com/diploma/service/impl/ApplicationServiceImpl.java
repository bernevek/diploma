package com.diploma.service.impl;

import com.diploma.entity.Application;
import com.diploma.service.ApplicationService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ApplicationServiceImpl implements ApplicationService{
    private Map<Long, Application> applications = new HashMap<>();
    private Long count = 0L;

    ApplicationServiceImpl() {
        applications.put(count, new Application(count++,"WORD","word.exe"));
        applications.put(count, new Application(count++,"NOTEPAD","notepad.exe"));
        applications.put(count, new Application(count++,"EXEL","exel.exe"));
    }

    @Override
    public void addApplication(Application application) {
        application.setId(count);
        applications.put(count++, application);
    }

    @Override
    public void deleteApplication(Long applicationId) {
        applications.remove(applicationId);
    }

    @Override
    public void editApplication(Long applicationId, Application application) {
        applications.put(applicationId, application);
    }

    @Override
    public List<Application> getApplications() {
        return new ArrayList<Application>(applications.values());
    }
}
