package com.pooja.portfolio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

/**
 * REST Controller providing health check and status verification.
 * Used by cloud hosting platforms (e.g. Render, Netlify, Docker healthchecks).
 */
@RestController
@RequestMapping("/api/health")
public class HealthController {

    @GetMapping
    public ResponseEntity<Map<String, Object>> checkHealth() {
        Map<String, Object> status = new HashMap<>();
        status.put("status", "UP");
        status.put("service", "Pooja Patil Portfolio Backend");
        status.put("version", "1.0.0");
        status.put("framework", "Spring Boot 3.2.5 (Java 17+)");
        status.put("timestamp", LocalDateTime.now());
        return ResponseEntity.ok(status);
    }
}
