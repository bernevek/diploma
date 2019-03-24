package com.diploma.DTO;

import com.diploma.entity.Application;
import com.diploma.entity.LoginMethod;
import com.diploma.entity.Site;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PolicyDTO {
    private Long id;
    private String name;
}
