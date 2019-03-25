package com.diploma.DTO;

import com.diploma.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SimpleUserDTO {
    private Long id;
    private String login;

    public SimpleUserDTO(User user) {
        this.id = user.getId();
        this.login = user.getLogin();
    }
}
