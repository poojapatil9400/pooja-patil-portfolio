package com.pooja.portfolio.service;

import com.pooja.portfolio.dto.ContactRequest;
import com.pooja.portfolio.entity.ContactMessage;
import com.pooja.portfolio.repository.ContactRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Layer handling business logic for contact inquiries.
 * Decouples controller endpoints from persistence layer.
 */
@Service
public class ContactService {

    private static final Logger logger = LoggerFactory.getLogger(ContactService.class);

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    /**
     * Processes and stores a new contact inquiry into the database.
     *
     * @param request Validated contact form submission
     * @return Saved ContactMessage entity
     */
    @Transactional
    public ContactMessage saveMessage(ContactRequest request) {
        logger.info("Processing contact inquiry from: {} <{}> | Subject: {}",
                request.getName(), request.getEmail(), request.getSubject());

        ContactMessage entity = new ContactMessage(
                request.getName().trim(),
                request.getEmail().trim().toLowerCase(),
                request.getSubject().trim(),
                request.getMessage().trim()
        );

        ContactMessage saved = contactRepository.save(entity);
        logger.info("Successfully recorded contact message ID: {}", saved.getId());
        return saved;
    }

    /**
     * Retrieves all recorded contact messages ordered by most recent.
     */
    @Transactional(readOnly = true)
    public List<ContactMessage> getAllMessages() {
        return contactRepository.findAllByOrderByCreatedAtDesc();
    }
}
