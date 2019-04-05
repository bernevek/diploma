package com.diploma.controller;

import com.diploma.DTO.ConfigElementDTO;
import com.diploma.service.SiteService;
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
@RequestMapping("api/site")
public class SiteController {

  @Autowired SiteService siteService;

  @PostMapping("")
  ResponseEntity<?> addSite(@RequestBody ConfigElementDTO site) {
    ConfigElementDTO savedSite = siteService.saveSite(site);
    return new ResponseEntity<>(savedSite, HttpStatus.OK);
  }

  @DeleteMapping("/{siteId}")
  ResponseEntity<?> deleteSite(@PathVariable Long siteId) {
    siteService.deleteSite(siteId);
    return new ResponseEntity<>(siteId, HttpStatus.OK);
  }

  @PutMapping("")
  ResponseEntity<?> editSite(@RequestBody ConfigElementDTO site) {
    ConfigElementDTO editedSite = siteService.saveSite(site);
    return new ResponseEntity<>(editedSite, HttpStatus.OK);
  }

  @GetMapping("")
  ResponseEntity<?> getSites() {
    return new ResponseEntity<>(siteService.getSites(), HttpStatus.OK);
  }
}
