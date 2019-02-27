package com.diploma.endpoint;

import com.diploma.service.UserPolicyService;
import localhost._8080.isecurity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class PolicyEndpoint {

    @Autowired
    UserPolicyService userPolicyService;

    @PayloadRoot(namespace = "http://localhost:8080/isecurity", localPart = "GetPolicyRequest")
    @ResponsePayload
    public GetPolicyResponse processGetPolicyRequest(@RequestPayload GetPolicyRequest request) {
        Policy policy = userPolicyService.getPolicyForAgent(request.getSession());
        GetPolicyResponse response = new GetPolicyResponse();
        response.setPolicy(policy);
        return response;
    }
}
