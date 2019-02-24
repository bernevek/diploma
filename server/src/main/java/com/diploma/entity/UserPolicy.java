package com.diploma.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "user_policy")
public class UserPolicy extends Policy {

    @OneToMany(mappedBy = "userPolicy", cascade = CascadeType.REMOVE)
    private List<User> users;
}
