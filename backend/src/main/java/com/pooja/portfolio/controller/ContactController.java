package com.pooja.portfolio.controller;

import com.pooja.portfolio.dto.ApiResponse;
import com.pooja.portfolio.dto.ContactRequest;
import com.pooja.portfolio.entity.ContactMessage;
import com.pooja.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller exposing Contact API endpoints.
 * Handles incoming contact messages from the portfolio frontend.
 */
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    /**
     * POST /api/contact
     * Receives and persists a contact form submission.
     */
    @PostMapping
    public ResponseEntity<ApiResponse<ContactMessage>> submitContact(@Valid @RequestBody ContactRequest request) {
        ContactMessage savedMessage = contactService.saveMessage(request);
        ApiResponse<ContactMessage> response = ApiResponse.success(
                "Contact message received and saved successfully.",
                savedMessage
        );
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /**
     * GET /api/contact
     * Retrieves recorded contact messages (for verification/admin use).
     */
    @GetMapping
    public ResponseEntity<ApiResponse<List<ContactMessage>>> getAllContacts() {
        List<ContactMessage> messages = contactService.getAllMessages();
        ApiResponse<List<ContactMessage>> response = ApiResponse.success(
                "Retrieved contact messages successfully.",
                messages
        );
        return ResponseEntity.ok(response);
    }
}
