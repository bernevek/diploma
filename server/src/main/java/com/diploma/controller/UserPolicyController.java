package com.diploma.controller;

import com.diploma.DTO.UserPolicyDTO;
import com.diploma.entity.UserPolicy;
import com.diploma.service.UserPolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserPolicyController {

    @Autowired
    UserPolicyService userPolicyService;

    @GetMapping("/userPolicies")
    ResponseEntity<?> getUserPolicies() {
        return new ResponseEntity<>(userPolicyService.getUserPolicies(), HttpStatus.OK);
    }

    @GetMapping("/userPolicy/{userPolicyId}")
    ResponseEntity<?> getUserPolicy(@PathVariable Long userPolicyId) {
        return new ResponseEntity<>(userPolicyService.getUserPolicy(userPolicyId), HttpStatus.OK);
    }

    @PostMapping("/userPolicy")
    ResponseEntity<?> addUserPolicy(@RequestBody UserPolicyDTO userPolicyDTO) {
        userPolicyService.saveUserPolicy(userPolicyDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/userPolicy")
    ResponseEntity<?> editUserPolicy(@RequestBody UserPolicyDTO userPolicyDTO) {
        userPolicyService.saveUserPolicy(userPolicyDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/userPolicy/{userPolicyId}")
    ResponseEntity<?> deleteUserPolicy(@PathVariable Long userPolicyId) {
        userPolicyService.deleteUserPolicy(userPolicyId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
