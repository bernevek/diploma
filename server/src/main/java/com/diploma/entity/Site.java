package com.diploma.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
public class Site extends AbstractIdentifiableEntity {
    public Site(Long id, String label, String value) {
        super(id);
        this.label = label;
        this.value = value;
    }

    private String label;
    private String value;
}