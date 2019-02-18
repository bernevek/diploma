package com.diploma.service.impl;

import com.diploma.entity.Site;
import com.diploma.service.SiteService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SiteServiceImpl implements SiteService {
    private Map<Long, Site> sites = new HashMap<>();
    private Long count = 0L;

    SiteServiceImpl() {
        sites.put(count, new Site(count++,"vk","vk.com"));
        sites.put(count, new Site(count++,"fb","facebook.com"));
        sites.put(count, new Site(count++,"mail.ru","mail.ru"));
    }

    @Override
    public void addSite(Site site) {
        site.setId(count);
        sites.put(count++, site);
    }

    @Override
    public void deleteSite(Long siteId) {
        sites.remove(siteId);
    }

    @Override
    public void editSite(Long siteId, Site site) {
        sites.put(siteId, site);
    }

    @Override
    public List<Site> getSites() {
        return new ArrayList<Site>(sites.values());
    }
}
