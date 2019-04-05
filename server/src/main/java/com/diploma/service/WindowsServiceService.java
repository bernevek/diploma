package com.diploma.service;

import com.diploma.DTO.ConfigElementDTO;

import java.util.List;

public interface WindowsServiceService {
  ConfigElementDTO saveWindowsService(ConfigElementDTO service);

  void deleteWindowsService(Long serviceId);

  List<ConfigElementDTO> getWindowsServices();

  List<String> getWindowsServicesForAgent();
}
