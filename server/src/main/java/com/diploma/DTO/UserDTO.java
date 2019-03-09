package com.diploma.DTO;

import com.diploma.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long id;
    private String login;
    private String password;
    private Long userPolicyId;
    private String computerName;

    public UserDTO(User user) {
        this.id = user.getId();
        this.login = user.getLogin();
        this.password = user.getPassword();
        this.userPolicyId = user.getUserPolicy().getId();
        if (user.getComputer() != null){
            this.computerName = user.getComputer().getName();
        } else {
            this.computerName = null;
        }
    }
}
