package com.diploma.DTO;

import com.diploma.entity.ComputerPolicy;
import com.diploma.entity.WindowsService;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class ComputerPolicyDTO extends PolicyDTO {
  private List<ConfigElementDTO> windowsServices;
  private List<SimpleComputerDTO> computers;

  public ComputerPolicyDTO(
      Long id,
      String name,
      List<ConfigElementDTO> windowsServices,
      List<SimpleComputerDTO> computers) {
    super(id, name);
    this.windowsServices = windowsServices;
    this.computers = computers;
  }

  public ComputerPolicyDTO(ComputerPolicy computerPolicy) {
    super(computerPolicy.getId(), computerPolicy.getName());
    this.windowsServices =
        computerPolicy.getServices().stream()
            .map(service -> new ConfigElementDTO<>(service))
            .collect(Collectors.toList());
    this.computers =
        computerPolicy.getComputers().stream()
            .map(computer -> new SimpleComputerDTO(computer))
            .collect(Collectors.toList());
  }

  @JsonIgnore
  public ComputerPolicy getComputerPolicy() {
    ComputerPolicy policy =
        new ComputerPolicy(
            this.getName(),
            this.getWindowsServices().stream()
                .map(
                    configElementDTO ->
                        (WindowsService) configElementDTO.getConfigElement(new WindowsService()))
                .collect(Collectors.toList()));
    policy.setId(this.getId());
    return policy;
  }
}
