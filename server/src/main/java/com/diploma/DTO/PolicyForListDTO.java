package com.diploma.DTO;

import com.diploma.entity.BasePolicy;
import com.diploma.entity.UserPolicy;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PolicyForListDTO {
    private Long value;
    private String label;

    public PolicyForListDTO(BasePolicy basePolicy) {
        this.value = basePolicy.getId();
        this.label = basePolicy.getName();
    }
}
