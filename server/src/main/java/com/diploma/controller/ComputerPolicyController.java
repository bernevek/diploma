package com.diploma.controller;

import com.diploma.DTO.ComputerPolicyDTO;
import com.diploma.service.ComputerPolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ComputerPolicyController {

    @Autowired
    ComputerPolicyService computerPolicyService;

    @GetMapping("/computerPolicies")
    ResponseEntity<?> getComputerPolicies() {
        return new ResponseEntity<>(computerPolicyService.getComputerPolicies(), HttpStatus.OK);
    }

    @GetMapping("/computerPolicy/{computerPolicyId}")
    ResponseEntity<?> getComputerPolicy(@PathVariable Long computerPolicyId) {
        return new ResponseEntity<>(computerPolicyService.getComputerPolicy(computerPolicyId), HttpStatus.OK);
    }

    @PostMapping("/computerPolicy")
    ResponseEntity<?> addComputerPolicy(@RequestBody ComputerPolicyDTO computerPolicyDTO) {
        computerPolicyService.saveComputerPolicy(computerPolicyDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/computerPolicy")
    ResponseEntity<?> editComputerPolicy(@RequestBody ComputerPolicyDTO computerPolicyDTO) {
        computerPolicyService.saveComputerPolicy(computerPolicyDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/computerPolicy/{computerPolicyId}")
    ResponseEntity<?> deleteComputerPolicy(@PathVariable Long computerPolicyId) {
        computerPolicyService.deleteComputerPolicy(computerPolicyId);
        return new ResponseEntity<>(computerPolicyId, HttpStatus.OK);
    }
}
