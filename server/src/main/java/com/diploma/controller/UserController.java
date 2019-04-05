package com.diploma.controller;

import com.diploma.DTO.UserDTO;
import com.diploma.service.UserService;
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
@RequestMapping("api/user")
public class UserController {

  @Autowired private UserService userService;

  @PostMapping("")
  ResponseEntity<?> addUser(@RequestBody UserDTO userDTO) {
    UserDTO savedUser = userService.saveUser(userDTO);
    return new ResponseEntity<>(savedUser, HttpStatus.OK);
  }

  @DeleteMapping("/{userId}")
  ResponseEntity<?> deleteUser(@PathVariable Long userId) {
    userService.deleteUser(userId);
    return new ResponseEntity<>(userId, HttpStatus.OK);
  }

  @PutMapping("")
  ResponseEntity<?> editUser(@RequestBody UserDTO userDTO) {
    UserDTO editedUser = userService.saveUser(userDTO);
    return new ResponseEntity<>(editedUser, HttpStatus.OK);
  }

  @GetMapping("")
  ResponseEntity<?> getUsers() {
    return new ResponseEntity<>(userService.getUsers(), HttpStatus.OK);
  }
}
