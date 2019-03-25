package com.diploma.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "service")
public class WindowsService extends ConfigElement {

    public WindowsService(@NotNull String label, @NotNull String value) {
        super(label, value);
    }

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "services")
    private List<ComputerPolicy> policies;
}
