package com.diploma.service.impl;

import com.diploma.DTO.ConfigElementDTO;
import com.diploma.entity.Site;
import com.diploma.repository.SiteRepository;
import com.diploma.service.SiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class SiteServiceImpl implements SiteService {

  @Autowired SiteRepository siteRepository;

  @Override
  public ConfigElementDTO saveSite(ConfigElementDTO site) {
    return new ConfigElementDTO<Site>(
        siteRepository.save((Site) site.getConfigElement(new Site())));
  }

  @Override
  public void deleteSite(Long siteId) {
    siteRepository.deleteById(siteId);
  }

  @Override
  public List<ConfigElementDTO> getSites() {
    return siteRepository.findAll().stream()
        .map(site -> new ConfigElementDTO<>(site))
        .collect(Collectors.toList());
  }
}
