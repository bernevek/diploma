package com.diploma.DTO;

import com.diploma.entity.Computer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SimpleComputerDTO {
  private Long id;
  private Long localId;
  private String computerName;

  public SimpleComputerDTO(Computer computer) {
    this.id = computer.getId();
    this.localId = computer.getLocalId();
    this.computerName = computer.getComputerName();
  }
}
