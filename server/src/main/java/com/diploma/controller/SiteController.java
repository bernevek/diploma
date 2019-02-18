package com.diploma.controller;

import com.diploma.entity.Site;
import com.diploma.service.SiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/site")
public class SiteController {

    @Autowired
    SiteService siteService;

    @PostMapping("")
    ResponseEntity<?> addSite(@RequestBody Site site) {
        siteService.addSite(site);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{siteId}")
    ResponseEntity<?> deleteSite(@PathVariable Long siteId) {
        siteService.deleteSite(siteId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{siteId}")
    ResponseEntity<?> editSite(@PathVariable Long siteId, @RequestBody Site site) {
        siteService.editSite(siteId, site);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("")
    ResponseEntity<?> getSites() {
        return new ResponseEntity<>(siteService.getSites(), HttpStatus.OK);
    }
}
