package com.diploma.DTO;

import com.diploma.entity.ConfigElement;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ConfigElementDTO<T extends ConfigElement> {
  private Long id;
  private String label;
  private String value;

  public ConfigElementDTO(ConfigElement configElement) {
    this.id = configElement.getId();
    this.label = configElement.getLabel();
    this.value = configElement.getValue();
  }

  @JsonIgnore
  public T getConfigElement(T configElement) {
    configElement.setId(this.id);
    configElement.setLabel(this.label);
    configElement.setValue(this.value);
    return configElement;
  }
}
