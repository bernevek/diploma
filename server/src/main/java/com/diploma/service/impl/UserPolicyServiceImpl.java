package com.diploma.service.impl;

import com.diploma.entity.UserPolicy;
import com.diploma.service.ApplicationService;
import com.diploma.service.LoginMethodService;
import com.diploma.service.SiteService;
import com.diploma.service.UserPolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserPolicyServiceImpl implements UserPolicyService {
    private Map<Long, UserPolicy> userPolicies = new HashMap<>();
    private Long count = 0L;

    @Autowired
    ApplicationService applicationService;
    @Autowired
    SiteService siteService;
    @Autowired
    LoginMethodService loginMethodService;

    @PostConstruct
    private void init() {
        userPolicies.put(count, new UserPolicy(count++,
                "Default User Policy",
                applicationService.getApplications(),
                siteService.getSites(),
                loginMethodService.getLoginMethods()
        ));
    }

    @Override
    public void addUserPolicy(UserPolicy userPolicy) {
        userPolicy.setId(count);
        userPolicies.put(count++, userPolicy);
    }

    @Override
    public void deleteUserPolicy(Long userPolicyId) {
        userPolicies.remove(userPolicyId);
    }

    @Override
    public void editUserPolicy(Long userPolicyId, UserPolicy userPolicy) {
        userPolicies.put(userPolicyId, userPolicy);
    }

    @Override
    public UserPolicy getUserPolicy(Long userPolicyId) {
        return userPolicies.get(userPolicyId);
    }

    @Override
    public List<UserPolicy> getUserPolicies() {
        return new ArrayList<UserPolicy>(userPolicies.values());
    }
}
