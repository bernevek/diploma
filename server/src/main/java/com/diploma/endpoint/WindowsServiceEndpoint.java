package com.diploma.endpoint;

import com.diploma.service.WindowsServiceService;
import localhost._8080.isecurity.GetServicesRequest;
import localhost._8080.isecurity.GetServicesResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class WindowsServiceEndpoint {
    @Autowired
    WindowsServiceService windowsServiceService;

    @PayloadRoot(namespace = "http://localhost:8080/isecurity", localPart = "GetServicesRequest")
    @ResponsePayload
    public GetServicesResponse processGetAppsRequest(@RequestPayload GetServicesRequest request) {
        GetServicesResponse response = new GetServicesResponse();
        response.getServices().addAll(windowsServiceService.getWindowsServicesForAgent());
        return response;
    }

}
