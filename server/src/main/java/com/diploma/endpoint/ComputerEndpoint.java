package com.diploma.endpoint;

import localhost._8080.isecurity.ComputerDetails;
import localhost._8080.isecurity.GetComputerDetailsRequest;
import localhost._8080.isecurity.GetComputerDetailsResponse;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class ComputerEndpoint {
    @PayloadRoot(namespace = "http://localhost:8080/isecurity", localPart = "GetComputerDetailsRequest")
    @ResponsePayload
    public GetComputerDetailsResponse processComputerDetailRequest(@RequestPayload GetComputerDetailsRequest request) {
        GetComputerDetailsResponse response = new GetComputerDetailsResponse();
        ComputerDetails computerDetails = new ComputerDetails();
        computerDetails.setId(request.getId());
        computerDetails.setIp("192.168.20.20");
        response.setComputerDetails(computerDetails);
        return response;
    }
}
