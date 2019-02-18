package com.diploma.service;

import com.diploma.entity.Site;

import java.util.List;

public interface SiteService {
    void addSite(Site site);
    void deleteSite(Long siteId);
    void editSite(Long siteId, Site site);
    List<Site> getSites();
}
