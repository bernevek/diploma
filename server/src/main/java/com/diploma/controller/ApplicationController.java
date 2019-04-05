package com.diploma.controller;

import com.diploma.DTO.ConfigElementDTO;
import com.diploma.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/application")
public class ApplicationController {

  @Autowired ApplicationService applicationService;

  @PostMapping("")
  ResponseEntity<?> addApplication(@RequestBody ConfigElementDTO application) {
    ConfigElementDTO savedApplication = applicationService.saveApplication(application);
    return new ResponseEntity<>(savedApplication, HttpStatus.OK);
  }

  @DeleteMapping("/{applicationId}")
  ResponseEntity<?> deleteApplication(@PathVariable Long applicationId) {
    applicationService.deleteApplication(applicationId);
    return new ResponseEntity<>(applicationId, HttpStatus.OK);
  }

  @PutMapping("")
  ResponseEntity<?> editApplication(@RequestBody ConfigElementDTO application) {
    ConfigElementDTO editedApplication = applicationService.saveApplication(application);
    return new ResponseEntity<>(editedApplication, HttpStatus.OK);
  }

  @GetMapping("")
  ResponseEntity<?> getApplications() {
    return new ResponseEntity<>(applicationService.getApplications(), HttpStatus.OK);
  }
}
