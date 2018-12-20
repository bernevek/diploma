package com.diploma.endpoint;

import com.diploma.service.LoginService;
import localhost._8080.login.LoginRequest;
import localhost._8080.login.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import javax.xml.namespace.QName;
import javax.xml.soap.SOAPConstants;
import javax.xml.soap.SOAPException;
import javax.xml.soap.SOAPFactory;
import javax.xml.soap.SOAPFault;
import javax.xml.ws.soap.SOAPFaultException;

@Endpoint
public class LoginEndpoint {

    @Autowired
    LoginService loginService;

    @PayloadRoot(namespace = "http://localhost:8080/login", localPart = "LoginRequest")
    @ResponsePayload
    public LoginResponse processUserDetailRequest(@RequestPayload LoginRequest request) throws SOAPException {

        String session = loginService.loginPcUser(request.getLogin(), request.getPassword());

        if (session.isEmpty()) {
            SOAPFault soapFault = SOAPFactory.newInstance().createFault();
            soapFault.setFaultString("Unnown user");
            soapFault.setFaultCode(new QName(SOAPConstants.URI_NS_SOAP_ENVELOPE, "Sender"));
            throw new SOAPFaultException(soapFault);
        } else {
            LoginResponse response = new LoginResponse();
            response.setSession(session);
            return response;
        }
    }
}
