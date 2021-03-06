package com.diploma.endpoint;

import com.diploma.service.LoginService;
import javax.xml.namespace.QName;
import javax.xml.soap.SOAPConstants;
import javax.xml.soap.SOAPException;
import javax.xml.soap.SOAPFactory;
import javax.xml.soap.SOAPFault;
import javax.xml.ws.soap.SOAPFaultException;
import localhost._8080.isecurity.LoginRequest;
import localhost._8080.isecurity.LoginResponse;
import localhost._8080.isecurity.LogoutRequest;
import localhost._8080.isecurity.LogoutResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class LoginEndpoint {

  @Autowired LoginService loginService;

  @PayloadRoot(namespace = "http://localhost:8080/isecurity", localPart = "LoginRequest")
  @ResponsePayload
  public LoginResponse processLoginRequest(@RequestPayload LoginRequest request)
      throws SOAPException {
    String session =
        loginService.loginPcUser(
            request.getComputerId(), request.getLogin(), request.getPassword());

    if (session.isEmpty()) {
      SOAPFault soapFault = SOAPFactory.newInstance().createFault();
      soapFault.setFaultString("Unknown user");
      soapFault.setFaultCode(new QName(SOAPConstants.URI_NS_SOAP_ENVELOPE, "Sender"));
      throw new SOAPFaultException(soapFault);
    } else {
      LoginResponse response = new LoginResponse();
      response.setSession(session);
      return response;
    }
  }

  @PayloadRoot(namespace = "http://localhost:8080/isecurity", localPart = "LogoutRequest")
  @ResponsePayload
  public LogoutResponse processLogoutRequest(@RequestPayload LogoutRequest request)
      throws SOAPException {
    LogoutResponse response = new LogoutResponse();
    response.setStatus(loginService.logoutPcUser(request.getSession()));
    return response;
  }
}
