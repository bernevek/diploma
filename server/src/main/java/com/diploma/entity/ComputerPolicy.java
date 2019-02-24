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
@Table(name = "computer_policy")
public class ComputerPolicy extends Policy {

    @OneToMany(mappedBy = "computerPolicy", cascade = CascadeType.REMOVE)
    private List<Computer> computers;
}