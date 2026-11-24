package com.pooja.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main Entry Point for Pooja Patil's Developer Portfolio Backend.
 * Standard Spring Boot Application Bootstrapper.
 */
@SpringBootApplication
public class PortfolioApplication {

    public static void main(String[] args) {
        SpringApplication.run(PortfolioApplication.class, args);
        System.out.println("==================================================================");
        System.out.println(" Pooja Patil - Developer Portfolio Backend Started Successfully! ");
        System.out.println(" REST API available at: http://localhost:8080                    ");
        System.out.println(" Health check:          http://localhost:8080/api/health         ");
        System.out.println(" Contact endpoint:      http://localhost:8080/api/contact        ");
        System.out.println("==================================================================");
    }
}
