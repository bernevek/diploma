package com.diploma.controller;

import com.diploma.entity.Computer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/computer")
public class UserController {

    @GetMapping("")
    ResponseEntity<?> getComputer() {
        Computer computer = new Computer();
        computer.setId(22L);
        computer.setIp("192.168.0.1");
        return new ResponseEntity<>(computer, HttpStatus.OK);
    }
}
