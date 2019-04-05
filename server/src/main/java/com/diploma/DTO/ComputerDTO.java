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
public class ComputerDTO {
  private Long id;
  private Long localId;
  private String computerName;
  private String localUserName;
  private String ip;
  private Long computerPolicyId;

  public ComputerDTO(Computer computer) {
    this.id = computer.getId();
    this.localId = computer.getLocalId();
    this.computerName = computer.getComputerName();
    this.localUserName = computer.getLocalUserName();
    this.ip = computer.getIp();
    this.computerPolicyId = computer.getComputerPolicy().getId();
  }
}
