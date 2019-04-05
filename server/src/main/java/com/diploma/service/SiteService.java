package com.diploma.service;

import com.diploma.DTO.ConfigElementDTO;
import com.diploma.entity.Site;

import java.util.List;

public interface SiteService {
  ConfigElementDTO saveSite(ConfigElementDTO site);

  void deleteSite(Long siteId);

  List<ConfigElementDTO> getSites();
}
