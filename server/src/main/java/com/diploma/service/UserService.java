package com.diploma.service;

import com.diploma.DTO.UserDTO;

import java.util.List;

public interface UserService {
    UserDTO saveUser(UserDTO user);
    void deleteUser(Long userId);
    List<UserDTO> getUsers();
}
