package com.pooja.portfolio.repository;

import com.pooja.portfolio.entity.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data JPA Repository for ContactMessage entities.
 * Inherits standard CRUD, pagination, and sorting capabilities.
 */
@Repository
public interface ContactRepository extends JpaRepository<ContactMessage, Long> {

    /**
     * Find messages ordered by creation timestamp descending.
     */
    List<ContactMessage> findAllByOrderByCreatedAtDesc();
}
