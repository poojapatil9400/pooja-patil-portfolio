package com.pooja.portfolio;

import com.pooja.portfolio.dto.ApiResponse;
import com.pooja.portfolio.dto.ContactRequest;
import com.pooja.portfolio.entity.ContactMessage;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PortfolioApplicationTests {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    @DisplayName("Context Loads Successfully")
    void contextLoads() {
        assertThat(restTemplate).isNotNull();
    }

    @Test
    @DisplayName("GET /api/health returns UP status")
    void testHealthEndpoint() {
        String url = "http://localhost:" + port + "/api/health";
        ResponseEntity<Map> response = restTemplate.getForEntity(url, Map.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody().get("status")).isEqualTo("UP");
        assertThat(response.getBody().get("service")).isEqualTo("Pooja Patil Portfolio Backend");
    }

    @Test
    @DisplayName("POST /api/contact successfully validates and saves message")
    void testContactSubmission() {
        String url = "http://localhost:" + port + "/api/contact";
        ContactRequest request = new ContactRequest(
                "Pooja Patil Test",
                "test@example.com",
                "Interview Request",
                "Hello, I would like to schedule an interview for the Java Developer position."
        );

        ResponseEntity<ApiResponse> response = restTemplate.postForEntity(url, request, ApiResponse.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody().getStatus()).isEqualTo("SUCCESS");
    }

    @Test
    @DisplayName("POST /api/contact rejects invalid request")
    void testContactValidationFailure() {
        String url = "http://localhost:" + port + "/api/contact";
        // Invalid request: empty name and invalid email
        ContactRequest invalidRequest = new ContactRequest("", "invalid-email", "", "short");

        ResponseEntity<ApiResponse> response = restTemplate.postForEntity(url, invalidRequest, ApiResponse.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }
}
