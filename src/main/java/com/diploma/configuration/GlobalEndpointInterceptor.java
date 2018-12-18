package com.diploma.configuration;

import org.springframework.stereotype.Component;
import org.springframework.ws.WebServiceMessage;
import org.springframework.ws.context.MessageContext;
import org.springframework.ws.server.EndpointInterceptor;
import org.springframework.ws.soap.SoapBody;
import org.springframework.ws.soap.SoapMessage;

@Component
public class GlobalEndpointInterceptor implements EndpointInterceptor {


    @Override
    public boolean handleRequest(MessageContext messageContext, Object endpoint) throws Exception {
        WebServiceMessage wsm = messageContext.getRequest();
        SoapMessage sm = (SoapMessage) wsm;
        SoapBody sb = sm.getSoapBody();
        System.out.println(sb);
        System.out.println("Endpoint Request Handling");
        return true;
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
    public void afterCompletion(MessageContext messageContext, Object endpoint, Exception ex) throws Exception {
        System.out.println("Execute code after completion");
    }
}
