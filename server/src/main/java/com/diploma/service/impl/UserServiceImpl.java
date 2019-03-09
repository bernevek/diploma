package com.diploma.service.impl;

import com.diploma.DTO.UserDTO;
import com.diploma.entity.User;
import com.diploma.repository.UserPolicyRepository;
import com.diploma.repository.UserRepository;
import com.diploma.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserPolicyRepository userPolicyRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        User user = new User();
        user.setId(userDTO.getId());
        user.setLogin(userDTO.getLogin());
        user.setPassword(userDTO.getPassword());
        if (userDTO.getUserPolicyId() != null) {
            user.setUserPolicy(userPolicyRepository.getOne(userDTO.getUserPolicyId()));
        } else {
            user.setUserPolicy(userPolicyRepository.getOne(1L));   }
        return new UserDTO(userRepository.save(user));
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public List<UserDTO> getUsers() {
        return userRepository.findAll().stream().map(user -> new UserDTO(user)).collect(Collectors.toList());
    }
}
