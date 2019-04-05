package com.diploma.configuration;

import com.diploma.endpoint.ComputerEndpoint;
import com.diploma.endpoint.LoginEndpoint;
import com.diploma.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ws.context.MessageContext;
import org.springframework.ws.server.EndpointInterceptor;
import org.springframework.ws.soap.SoapMessage;

@Component
public class GlobalEndpointInterceptor implements EndpointInterceptor {

  @Autowired LoginService loginService;

  @Override
  public boolean handleRequest(MessageContext messageContext, Object endpoint) throws Exception {
    if (endpoint.toString().contains(LoginEndpoint.class.getSimpleName())
        || endpoint.toString().contains(ComputerEndpoint.class.getSimpleName())) {
      return true;
    } else {
      SoapMessage request = (SoapMessage) messageContext.getRequest();
      String session =
          request.getDocument().getElementsByTagName("session").item(0).getTextContent();
      return loginService.checkSession(session);
    }
  }

  @Override
  public boolean handleResponse(MessageContext messageContext, Object endpoint) throws Exception {
    System.out.println("Endpoint Response Handling");
    return true;
  }

  @Override
  public boolean handleFault(MessageContext messageContext, Object endpoint) throws Exception {
    System.out.println("Endpoint Exception Handling");
    return true;
  }

  @Override
  public void afterCompletion(MessageContext messageContext, Object endpoint, Exception ex)
      throws Exception {
    System.out.println("Execute code after completion");
  }
}
