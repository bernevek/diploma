package com.diploma.entity;

import lombok.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public abstract class AbstractIdentifiableEntity {
    protected Long id;
}
