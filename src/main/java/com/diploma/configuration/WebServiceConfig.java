package com.diploma.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.ws.config.annotation.EnableWs;
import org.springframework.ws.config.annotation.WsConfigurerAdapter;
import org.springframework.ws.transport.http.MessageDispatcherServlet;
import org.springframework.ws.wsdl.wsdl11.DefaultWsdl11Definition;
import org.springframework.xml.xsd.SimpleXsdSchema;
import org.springframework.xml.xsd.XsdSchema;

import java.util.List;

@EnableWs
@Configuration
public class WebServiceConfig extends WsConfigurerAdapter {

    @Autowired
    GlobalEndpointInterceptor globalEndpointInterceptor;

    @Override
    public void addInterceptors(List interceptors) {
        interceptors.add(globalEndpointInterceptor);
    }

    @Bean
    public ServletRegistrationBean messageDispatcherServlet(ApplicationContext context) {
        MessageDispatcherServlet messageDispatcherServlet = new MessageDispatcherServlet();
        messageDispatcherServlet.setApplicationContext(context);
        messageDispatcherServlet.setTransformWsdlLocations(true);
        return new ServletRegistrationBean(messageDispatcherServlet, "/ws/*");
    }

    @Bean(name = "user")
    public DefaultWsdl11Definition defaultWsdl11DefinitionUser(XsdSchema usersSchema) {
        DefaultWsdl11Definition definition = new DefaultWsdl11Definition();
        definition.setPortTypeName("UserPort");
        definition.setTargetNamespace("http://localhost:8080/user");
        definition.setLocationUri("/ws");
        definition.setSchema(usersSchema);
        return definition;
    }

    @Bean
    public XsdSchema usersSchema() {
        return new SimpleXsdSchema(new ClassPathResource("wsdl/user.xsd"));
    }

    @Bean(name = "computer")
    public DefaultWsdl11Definition defaultWsdl11DefinitionComputer(XsdSchema computersSchema) {
        DefaultWsdl11Definition definition = new DefaultWsdl11Definition();
        definition.setPortTypeName("ComputerPort");
        definition.setTargetNamespace("http://localhost:8080/computer");
        definition.setLocationUri("/ws");
        definition.setSchema(computersSchema);
        return definition;
    }

    @Bean
    public XsdSchema computersSchema() {
        return new SimpleXsdSchema(new ClassPathResource("wsdl/computer.xsd"));
    }
}
