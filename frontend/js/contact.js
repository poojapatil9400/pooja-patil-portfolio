/**
 * Contact Form Controller
 * Validates user input, communicates with the Spring Boot REST backend,
 * prevents duplicate submissions, and manages loading and alert states.
 */

document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
});

function initContactForm() {
    const contactForm = document.getElementById('portfolio-contact-form');
    if (!contactForm) return;

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const submitBtn = document.getElementById('contact-submit-btn');
    const statusAlert = document.getElementById('form-status-alert');

    // Real-time input clearing of error states
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
        if (!input) return;
        input.addEventListener('input', () => {
            clearFieldError(input);
            hideStatusAlert();
        });
    });

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 1. Client-Side Validation
        const isValid = validateContactForm(nameInput, emailInput, subjectInput, messageInput);
        if (!isValid) return;

        // 2. Prepare payload
        const payload = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            subject: subjectInput.value.trim(),
            message: messageInput.value.trim()
        };

        // 3. UI State: Loading & anti-spam prevention
        setButtonLoadingState(submitBtn, true);
        hideStatusAlert();

        try {
            const endpoint = `${CONFIG.API_BASE_URL}/api/contact`;
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json().catch(() => null);

            if (response.ok && (data?.status === 'SUCCESS' || response.status === 201 || response.status === 200)) {
                // Success
                showStatusAlert(
                    `Thank you, ${payload.name}! Your message has been sent successfully to the backend and recorded. I will get in touch with you shortly.`,
                    'success'
                );
                contactForm.reset();
            } else {
                // Server or Validation error
                const errorMsg = data?.message || data?.errors?.join(', ') || 'Failed to submit contact message. Please try again.';
                showStatusAlert(`Submission note: ${errorMsg}`, 'error');
            }
        } catch (error) {
            console.error('Contact Form Network Error:', error);
            showStatusAlert(
                `Unable to reach backend service (${CONFIG.API_BASE_URL}). If backend is starting up or offline, you can directly reach me at: ${CONFIG.PROFILE.email}`,
                'error'
            );
        } finally {
            setButtonLoadingState(submitBtn, false);
        }
    });
}

function validateContactForm(nameEl, emailEl, subjectEl, messageEl) {
    let valid = true;

    // Validate Name
    if (!nameEl.value.trim() || nameEl.value.trim().length < 2) {
        showFieldError(nameEl, 'Please enter your full name (at least 2 characters).');
        valid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailEl.value.trim() || !emailRegex.test(emailEl.value.trim())) {
        showFieldError(emailEl, 'Please enter a valid email address.');
        valid = false;
    }

    // Validate Subject
    if (!subjectEl.value.trim() || subjectEl.value.trim().length < 3) {
        showFieldError(subjectEl, 'Please enter a subject (at least 3 characters).');
        valid = false;
    }

    // Validate Message
    if (!messageEl.value.trim() || messageEl.value.trim().length < 10) {
        showFieldError(messageEl, 'Please enter your message (at least 10 characters).');
        valid = false;
    }

    return valid;
}

function showFieldError(inputEl, message) {
    const errorEl = inputEl.parentElement.querySelector('.form-error-msg');
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('visible');
    }
    inputEl.style.borderColor = '#ef4444';
}

function clearFieldError(inputEl) {
    const errorEl = inputEl.parentElement.querySelector('.form-error-msg');
    if (errorEl) {
        errorEl.classList.remove('visible');
        errorEl.textContent = '';
    }
    inputEl.style.borderColor = '';
}

function showStatusAlert(message, type) {
    const alertEl = document.getElementById('form-status-alert');
    if (!alertEl) return;
    alertEl.textContent = message;
    alertEl.className = `form-status-alert ${type}`;
    alertEl.style.display = 'block';
}

function hideStatusAlert() {
    const alertEl = document.getElementById('form-status-alert');
    if (alertEl) {
        alertEl.style.display = 'none';
        alertEl.className = 'form-status-alert';
    }
}

function setButtonLoadingState(buttonEl, isLoading) {
    if (!buttonEl) return;
    if (isLoading) {
        buttonEl.disabled = true;
        buttonEl.dataset.originalHtml = buttonEl.innerHTML;
        buttonEl.innerHTML = `<span class="spinner"></span> Sending Message...`;
    } else {
        buttonEl.disabled = false;
        buttonEl.innerHTML = buttonEl.dataset.originalHtml || `<i class="fas fa-paper-plane"></i> Send Message`;
    }
}
