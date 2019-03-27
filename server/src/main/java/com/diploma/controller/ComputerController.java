package com.diploma.controller;

import com.diploma.DTO.ComputerDTO;
import com.diploma.service.ComputerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("api/computer")
public class ComputerController {

    @Autowired
    private ComputerService computerService;

    @DeleteMapping("/{computerId}")
    ResponseEntity<?> deleteComputer(@PathVariable Long computerId) {
        computerService.deleteComputer(computerId);
        return new ResponseEntity<>(computerId, HttpStatus.OK);
    }

    @PutMapping("")
    ResponseEntity<?> editComputer(@RequestBody ComputerDTO computerDTO) {
        ComputerDTO editedComputer = computerService.saveComputer(computerDTO);
        return new ResponseEntity<>(editedComputer, HttpStatus.OK);
    }

    @GetMapping("")
    ResponseEntity<?> getComputers() {
        return new ResponseEntity<>(computerService.getComputers(), HttpStatus.OK);
    }
}
