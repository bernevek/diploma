package com.diploma.controller;

import com.diploma.entity.Application;
import com.diploma.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/application")
public class ApplicationController {

    @Autowired
    ApplicationService applicationService;

    @PostMapping("")
    ResponseEntity<?> addApplication(@RequestBody Application application) {
        applicationService.addApplication(application);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{applicationId}")
    ResponseEntity<?> deleteApplication(@PathVariable Long applicationId) {
        applicationService.deleteApplication(applicationId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{applicationId}")
    ResponseEntity<?> editApplication(@PathVariable Long applicationId, @RequestBody Application application) {
        applicationService.editApplication(applicationId, application);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("")
    ResponseEntity<?> getSites() {
        return new ResponseEntity<>(applicationService.getApplications(), HttpStatus.OK);
    }
}
