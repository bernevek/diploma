package com.diploma.service.impl;

import com.diploma.DTO.ConfigElementDTO;
import com.diploma.entity.WindowsService;
import com.diploma.repository.WindowsServiceRepository;
import com.diploma.service.WindowsServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WindowsServiceServiceImpl implements WindowsServiceService {

  @Autowired WindowsServiceRepository windowsServiceRepository;

  @Override
  public ConfigElementDTO saveWindowsService(ConfigElementDTO service) {
    return new ConfigElementDTO<WindowsService>(
        windowsServiceRepository.save(
            (WindowsService) service.getConfigElement(new WindowsService())));
  }

  @Override
  public void deleteWindowsService(Long windowsServiceId) {
    windowsServiceRepository.deleteById(windowsServiceId);
  }

  @Override
  public List<ConfigElementDTO> getWindowsServices() {
    return windowsServiceRepository.findAll().stream()
        .map(windowsService -> new ConfigElementDTO<>(windowsService))
        .collect(Collectors.toList());
  }

  @Override
  public List<String> getWindowsServicesForAgent() {
    return windowsServiceRepository.findAll().stream()
        .map(windowsService -> windowsService.getValue())
        .collect(Collectors.toList());
  }
}
