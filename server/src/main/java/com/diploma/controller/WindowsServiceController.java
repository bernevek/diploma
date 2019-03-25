package com.diploma.controller;

import com.diploma.DTO.ConfigElementDTO;
import com.diploma.service.WindowsServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/windowsService")
public class WindowsServiceController {

    @Autowired
    WindowsServiceService windowsServiceService;

    @PostMapping("")
    ResponseEntity<?> addWindowsService(@RequestBody ConfigElementDTO windowsService) {
        ConfigElementDTO savedWindowsService = windowsServiceService.saveWindowsService(windowsService);
        return new ResponseEntity<>(savedWindowsService, HttpStatus.OK);
    }

    @DeleteMapping("/{windowsServiceId}")
    ResponseEntity<?> deleteWindowsService(@PathVariable Long windowsServiceId) {
        windowsServiceService.deleteWindowsService(windowsServiceId);
        return new ResponseEntity<>(windowsServiceId, HttpStatus.OK);
    }

    @PutMapping("")
    ResponseEntity<?> editWindowsService(@RequestBody ConfigElementDTO windowsService) {
        ConfigElementDTO editedWindowsService = windowsServiceService.saveWindowsService(windowsService);
        return new ResponseEntity<>(editedWindowsService, HttpStatus.OK);
    }

    @GetMapping("")
    ResponseEntity<?> getWindowsServices() {
        return new ResponseEntity<>(windowsServiceService.getWindowsServices(), HttpStatus.OK);
    }
}
