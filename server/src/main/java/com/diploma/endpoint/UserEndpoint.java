package com.diploma.endpoint;

import localhost._8080.user.GetUserDetailsRequest;
import localhost._8080.user.GetUserDetailsResponse;
import localhost._8080.user.UserDetails;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class UserEndpoint {

    @PayloadRoot(namespace = "http://localhost:8080/user", localPart = "GetUserDetailsRequest")
    @ResponsePayload
    public GetUserDetailsResponse processUserDetailRequest(@RequestPayload GetUserDetailsRequest request) {
        GetUserDetailsResponse response = new GetUserDetailsResponse();
        UserDetails userDetails = new UserDetails();
        userDetails.setId(request.getId());
        userDetails.setFirstName("John");
        userDetails.setLastName("McClane");
        response.setUserDetails(userDetails);
        return response;
    }
}
