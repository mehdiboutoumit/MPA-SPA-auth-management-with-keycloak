package com.example.spabackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class SpaBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpaBackendApplication.class, args);
    }
    
//    @Bean
//    public RestTemplate restTemplate() {
//        return new RestTemplate();
//    }

}
