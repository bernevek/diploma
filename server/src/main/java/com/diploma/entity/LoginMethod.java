package com.diploma.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "login_method")
public class LoginMethod extends ConfigElement {

    public LoginMethod(@NotNull String label, @NotNull String value) {
        super(label, value);
    }

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "loginMethods")
    private List<BasePolicy> policies;
}
