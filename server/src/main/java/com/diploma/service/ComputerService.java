package com.diploma.service;

import com.diploma.DTO.ComputerDTO;
import com.diploma.entity.Computer;
import localhost._8080.isecurity.ComputerDetails;

import java.util.List;

public interface ComputerService {
  ComputerDetails saveComputer(ComputerDetails computerDetails);

  ComputerDTO saveComputer(ComputerDTO computerDTO);

  void deleteComputer(Long computerId);

  List<ComputerDTO> getComputers();
}
