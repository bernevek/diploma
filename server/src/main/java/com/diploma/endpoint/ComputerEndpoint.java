package com.diploma.endpoint;

import com.diploma.service.ComputerService;
import localhost._8080.isecurity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class ComputerEndpoint {

    @Autowired
    ComputerService computerService;

    @PayloadRoot(namespace = "http://localhost:8080/isecurity", localPart = "SendComputerDetailsRequest")
    @ResponsePayload
    public SendComputerDetailsResponse processComputerDetailRequest(@RequestPayload SendComputerDetailsRequest request) {
        SendComputerDetailsResponse response = new SendComputerDetailsResponse();
        response.setComputerDetails(computerService.saveComputer(request.getComputerDetails()));
        return response;
    }
}
