package com.diploma.endpoint;

import com.diploma.service.ApplicationService;
import localhost._8080.isecurity.GetAppsRequest;
import localhost._8080.isecurity.GetAppsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class ApplicationsEndpoint {

  @Autowired ApplicationService applicationService;

  @PayloadRoot(namespace = "http://localhost:8080/isecurity", localPart = "GetAppsRequest")
  @ResponsePayload
  public GetAppsResponse processGetAppsRequest(@RequestPayload GetAppsRequest request) {
    GetAppsResponse response = new GetAppsResponse();
    response.getApps().addAll(applicationService.getApplicationsForAgent());
    return response;
  }
}
