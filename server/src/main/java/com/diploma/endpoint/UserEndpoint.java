package com.diploma.endpoint;

import localhost._8080.isecurity.GetUserDetailsRequest;
import localhost._8080.isecurity.GetUserDetailsResponse;
import localhost._8080.isecurity.UserDetails;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class UserEndpoint {

  @PayloadRoot(namespace = "http://localhost:8080/isecurity", localPart = "GetUserDetailsRequest")
  @ResponsePayload
  public GetUserDetailsResponse processUserDetailRequest(
      @RequestPayload GetUserDetailsRequest request) {
    GetUserDetailsResponse response = new GetUserDetailsResponse();
    UserDetails userDetails = new UserDetails();
    userDetails.setId(2);
    userDetails.setFirstName("John");
    userDetails.setLastName("McClane");
    response.setUserDetails(userDetails);
    return response;
  }
}
