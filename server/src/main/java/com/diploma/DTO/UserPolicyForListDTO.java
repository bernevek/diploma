package com.diploma.DTO;

import com.diploma.entity.UserPolicy;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserPolicyForListDTO {
    private Long value;
    private String label;

    public UserPolicyForListDTO(UserPolicy userPolicy) {
        this.value = userPolicy.getId();
        this.label = userPolicy.getName();
    }
}
