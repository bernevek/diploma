package com.diploma.controller;

import com.diploma.service.LoginMethodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/loginMethod")
public class LoginMethodController {

    @Autowired
    LoginMethodService loginMethodService;

    @GetMapping("")
    ResponseEntity<?> getLoginMethods() {
        return new ResponseEntity<>(loginMethodService.getLoginMethods(), HttpStatus.OK);
    }
}
