/**
 * HyperMind AI - Unified Form Handler
 * This module provides consistent form handling across the website
 */

// FormHandler module
const FormHandler = (function() {
    // Configuration
    const config = {
        // Default Google Sheets URL - can be overridden via localStorage
        defaultSheetsUrl: "https://script.google.com/macros/s/AKfycbzr9AjCBQycQCqYWB4mbPVey7qrKRbra7WTgWZmUUifAqxsXa3mQVrADq32JjJhd1ZBNg/exec",
        
        // Form type identifiers
        formTypes: {
            NEWSLETTER_MODAL: 'newsletter_modal',
            NEWSLETTER_FOOTER: 'newsletter_footer',
            CONTACT_FORM: 'contact_form',
            CONTACT_WAITLIST: 'contact_waitlist',
            TEST: 'test'
        },
        
        // Debug mode - set to false in production
        debug: true
    };
    
    // Private methods
    
    // Debug logging function
    const log = function(message, data) {
        if (!config.debug) return;
        
        const timestamp = new Date().toISOString();
        if (data) {
            console.log(`[${timestamp}] [FormHandler] ${message}`, data);
        } else {
            console.log(`[${timestamp}] [FormHandler] ${message}`);
        }
    };
    
    // Initialize Google Sheets URL if not set
    const initGoogleSheetsUrl = function() {
        if (!localStorage.getItem('googleSheetsUrl')) {
            localStorage.setItem('googleSheetsUrl', config.defaultSheetsUrl);
            log('Google Sheets URL initialized with default:', config.defaultSheetsUrl);
        } else {
            log('Using existing Google Sheets URL:', localStorage.getItem('googleSheetsUrl'));
        }
    };
    
    // Validate email address
    const isValidEmail = function(email) {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email && emailRegex.test(String(email).toLowerCase());
    };
    
    // Submit form data to Google Sheets
    const submitToGoogleSheets = function(formType, data) {
        log(`Attempting to submit ${formType} form data:`, data);
        
        return new Promise((resolve, reject) => {
            // Get Google Sheets Apps Script URL from localStorage
            const googleSheetsUrl = localStorage.getItem('googleSheetsUrl');
            log('Google Sheets URL found:', googleSheetsUrl);
            
            if (!googleSheetsUrl) {
                const error = new Error('No Google Sheets URL found');
                log('Error:', error.message);
                reject(error);
                return;
            }
            
            // Prepare form data
            const formData = new FormData();
            
            // Add form type
            formData.append('form_type', formType);
            
            // Add all data fields
            for (const key in data) {
                formData.append(key, data[key]);
            }
            
            // Add page URL and timestamp
            formData.append('page_url', window.location.href);
            formData.append('timestamp', new Date().toISOString());
            
            log('Submitting to Google Sheets...', {
                url: googleSheetsUrl,
                formType: formType,
                data: data
            });
            
            // Try submitting with FormData first
            fetch(googleSheetsUrl, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            })
            .then(() => {
                log(`${formType} form submitted to Google Sheets successfully`);
                resolve(true);
            })
            .catch(error => {
                log('Error submitting to Google Sheets:', error);
                
                // Try again with JSON format as fallback
                log('Trying JSON format as fallback...');
                
                // Prepare JSON data
                const jsonData = {
                    form_type: formType,
                    ...data,
                    page_url: window.location.href,
                    timestamp: new Date().toISOString()
                };
                
                fetch(googleSheetsUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(jsonData),
                    mode: 'no-cors'
                })
                .then(() => {
                    log('JSON fallback submission successful');
                    resolve(true);
                })
                .catch(error => {
                    log('Error with JSON fallback:', error);
                    
                    // Last fallback to PHP backend
                    log('Falling back to PHP backend...');
                    fetch('php/submit.php', {
                        method: 'POST',
                        body: formData
                    })
                    .then(() => {
                        log('PHP form submission successful');
                        resolve(true);
                    })
                    .catch(error => {
                        log('Error with PHP submission:', error);
                        reject(error);
                    });
                });
            });
        });
    };
    
    // Setup admin shortcut for updating Google Sheets URL
    const setupAdminShortcut = function() {
        const adminKeyCombo = (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'G') {
                const sheetsUrl = prompt('Enter Google Sheets Apps Script URL:', localStorage.getItem('googleSheetsUrl'));
                if (sheetsUrl) {
                    localStorage.setItem('googleSheetsUrl', sheetsUrl);
                    alert('Google Sheets URL saved successfully!');
                    log('Google Sheets URL updated by admin:', sheetsUrl);
                }
            }
        };
        
        document.addEventListener('keydown', adminKeyCombo);
        log('Admin shortcut (Ctrl+Shift+G) registered');
    };
    
    // Initialize waitlist modal handler
    const initWaitlistModal = function() {
        const waitlistForm = document.getElementById('waitlistForm');
        if (!waitlistForm) {
            log('Waitlist form not found, skipping initialization');
            return;
        }
        
        log('Initializing waitlist form');
        
        waitlistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            log('Waitlist form submitted');
            
            const email = document.getElementById('waitlistEmail').value.trim();
            
            if (!isValidEmail(email)) {
                log('Invalid email entered:', email);
                document.getElementById('waitlistEmail').classList.add('is-invalid');
                return;
            }
            
            document.getElementById('waitlistEmail').classList.remove('is-invalid');
            
            submitToGoogleSheets(config.formTypes.CONTACT_WAITLIST, { email: email })
                .then(() => {
                    // Show success message
                    const successElement = document.getElementById('waitlistSuccess');
                    if (successElement) {
                        successElement.style.display = 'block';
                        log('Waitlist success message displayed');
                        
                        // Hide success message and close modal after delay
                        setTimeout(() => {
                            successElement.style.display = 'none';
                            
                            try {
                                const waitlistModal = bootstrap.Modal.getInstance(document.getElementById('waitlistModal'));
                                if (waitlistModal) {
                                    waitlistModal.hide();
                                }
                            } catch (error) {
                                log('Error hiding modal:', error);
                                // Manual fallback
                                const modal = document.getElementById('waitlistModal');
                                if (modal) {
                                    modal.classList.remove('show');
                                    modal.style.display = 'none';
                                    document.body.classList.remove('modal-open');
                                    
                                    // Remove backdrop
                                    const backdrop = document.querySelector('.modal-backdrop');
                                    if (backdrop) {
                                        backdrop.parentNode.removeChild(backdrop);
                                    }
                                }
                            }
                            
                            // Clear the form
                            waitlistForm.reset();
                        }, 3000);
                    }
                })
                .catch(error => {
                    log('Error submitting waitlist form:', error);
                    alert('There was an error submitting your information. Please try again later.');
                });
        });
        
        log('Waitlist form handler initialized');
    };
    
    // Initialize newsletter modal handler
    const initNewsletterModal = function() {
        const newsletterForm = document.getElementById('newsletterForm');
        if (!newsletterForm) {
            log('Newsletter form not found, skipping initialization');
            return;
        }
        
        log('Initializing newsletter form');
        
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            log('Newsletter form submitted');
            
            const email = document.getElementById('newsletterEmail').value.trim();
            
            if (!isValidEmail(email)) {
                log('Invalid email entered:', email);
                document.getElementById('newsletterEmail').classList.add('is-invalid');
                document.getElementById('newsletter-error').style.display = 'block';
                return;
            }
            
            document.getElementById('newsletterEmail').classList.remove('is-invalid');
            document.getElementById('newsletter-error').style.display = 'none';
            
            submitToGoogleSheets(config.formTypes.NEWSLETTER_MODAL, { email: email })
                .then(() => {
                    // Show success message
                    document.getElementById('newsletter-success').style.display = 'block';
                    log('Newsletter success message displayed');
                    
                    // Clear the form
                    newsletterForm.reset();
                    
                    // Hide success message and close modal after delay
                    setTimeout(() => {
                        document.getElementById('newsletter-success').style.display = 'none';
                        
                        try {
                            const newsletterModal = bootstrap.Modal.getInstance(document.getElementById('newsletterModal'));
                            if (newsletterModal) {
                                newsletterModal.hide();
                            }
                        } catch (error) {
                            log('Error hiding modal:', error);
                            // Manual fallback
                            const modal = document.getElementById('newsletterModal');
                            if (modal) {
                                modal.classList.remove('show');
                                modal.style.display = 'none';
                                document.body.classList.remove('modal-open');
                                
                                // Remove backdrop
                                const backdrop = document.querySelector('.modal-backdrop');
                                if (backdrop) {
                                    backdrop.parentNode.removeChild(backdrop);
                                }
                            }
                        }
                    }, 3000);
                })
                .catch(error => {
                    log('Error submitting newsletter form:', error);
                    alert('There was an error submitting your email. Please try again later.');
                });
        });
        
        log('Newsletter form handler initialized');
    };
    
    // Initialize footer subscription handler
    const initFooterSubscription = function() {
        const footerSubscribeBtn = document.getElementById('footerSubscribeBtn');
        if (!footerSubscribeBtn) {
            log('Footer subscribe button not found, skipping initialization');
            return;
        }
        
        log('Initializing footer subscription');
        
        footerSubscribeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            log('Footer subscribe button clicked');
            
            const emailInput = document.getElementById('footerEmail');
            const email = emailInput.value.trim();
            const successMsg = document.getElementById('footer-subscription-success');
            const errorMsg = document.getElementById('footer-subscription-error');
            
            if (!isValidEmail(email)) {
                log('Invalid email entered:', email);
                emailInput.classList.add('is-invalid');
                successMsg.style.display = 'none';
                errorMsg.style.display = 'block';
                return;
            }
            
            emailInput.classList.remove('is-invalid');
            errorMsg.style.display = 'none';
            
            submitToGoogleSheets(config.formTypes.NEWSLETTER_FOOTER, { email: email })
                .then(() => {
                    // Show success message
                    successMsg.style.display = 'block';
                    log('Footer subscription success message displayed');
                    
                    // Clear the form
                    emailInput.value = '';
                    
                    // Hide success message after delay
                    setTimeout(() => {
                        successMsg.style.display = 'none';
                    }, 3000);
                })
                .catch(error => {
                    log('Error submitting footer subscription:', error);
                    alert('There was an error submitting your email. Please try again later.');
                });
        });
        
        log('Footer subscription handler initialized');
    };
    
    // Initialize contact form handler
    const initContactForm = function() {
        const contactForm = document.getElementById('contact-form');
        if (!contactForm) {
            log('Contact form not found, skipping initialization');
            return;
        }
        
        log('Initializing contact form');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            log('Contact form submitted');
            
            // Reset any previous error messages
            document.querySelectorAll('.error-feedback').forEach(el => {
                el.style.display = 'none';
            });
            
            // Get form values
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const company = document.getElementById('company').value.trim();
            const position = document.getElementById('position').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation flag
            let isValid = true;
            
            // Validate full name
            if (!fullName) {
                document.getElementById('name-error').style.display = 'block';
                isValid = false;
            }
            
            // Validate email
            if (!isValidEmail(email)) {
                document.getElementById('email-error').style.display = 'block';
                isValid = false;
            }
            
            // Validate company
            if (!company) {
                document.getElementById('company-error').style.display = 'block';
                isValid = false;
            }
            
            // Validate position
            if (!position) {
                document.getElementById('position-error').style.display = 'block';
                isValid = false;
            }
            
            // Validate message
            if (!message) {
                document.getElementById('message-error').style.display = 'block';
                isValid = false;
            }
            
            // If form is valid, submit the data
            if (isValid) {
                submitToGoogleSheets(config.formTypes.CONTACT_FORM, {
                    name: fullName,
                    email: email,
                    company: company,
                    position: position,
                    message: message
                })
                .then(() => {
                    // Show success message
                    contactForm.style.display = 'none';
                    document.getElementById('success-message').style.display = 'block';
                    log('Contact form success message displayed');
                })
                .catch(error => {
                    log('Error submitting contact form:', error);
                    alert('There was an error submitting your message. Please try again later.');
                });
            }
        });
        
        log('Contact form handler initialized');
    };
    
    // Initialize try for free buttons
    const initTryFreeButtons = function() {
        const tryFreeButtons = document.querySelectorAll('a.btn-frosted, a.btn-primary');
        if (!tryFreeButtons || tryFreeButtons.length === 0) {
            log('No "Try for free" buttons found, skipping initialization');
            return;
        }
        
        log(`Found ${tryFreeButtons.length} potential "Try for free" buttons`);
        
        tryFreeButtons.forEach(button => {
            if (button.textContent.trim() === "Try for free") {
                log('Initializing "Try for free" button:', button);
                
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    log('"Try for free" button clicked');
                    
                    // Debug: Check if bootstrap is defined
                    log('Bootstrap defined?', typeof bootstrap !== 'undefined');
                    log('Bootstrap Modal defined?', typeof bootstrap !== 'undefined' && typeof bootstrap.Modal !== 'undefined');
                    
                    try {
                        const waitlistModal = new bootstrap.Modal(document.getElementById('waitlistModal'));
                        waitlistModal.show();
                        log('Modal shown using Bootstrap');
                    } catch (error) {
                        log('Error showing modal:', error);
                        
                        // Fallback to manual display
                        const modal = document.getElementById('waitlistModal');
                        if (modal) {
                            modal.classList.add('show');
                            modal.style.display = 'block';
                            document.body.classList.add('modal-open');
                            
                            // Create backdrop
                            const backdrop = document.createElement('div');
                            backdrop.className = 'modal-backdrop fade show';
                            document.body.appendChild(backdrop);
                            
                            log('Manually showed modal as fallback');
                        }
                    }
                });
            }
        });
    };
    
    // Test connection to Google Sheets
    const testSheetsConnection = function() {
        const sheetsUrl = localStorage.getItem('googleSheetsUrl');
        if (!sheetsUrl) {
            log('No Google Sheets URL found, skipping connection test');
            return;
        }
        
        log('Testing connection to Google Sheets:', sheetsUrl);
        
        // Create a test FormData object
        const testData = new FormData();
        testData.append('form_type', 'connection_test');
        testData.append('timestamp', new Date().toISOString());
        
        // Attempt to connect
        fetch(sheetsUrl, {
            method: 'POST',
            body: testData,
            mode: 'no-cors'
        })
        .then(() => {
            log('Google Sheets connection test sent');
        })
        .catch(error => {
            log('Google Sheets connection test failed:', error);
        });
    };
    
    // Public methods
    return {
        // Initialize all form handlers
        init: function() {
            log('Initializing FormHandler module');
            
            // Initialize Google Sheets URL
            initGoogleSheetsUrl();
            
            // Setup keyboard shortcut for admins
            setupAdminShortcut();
            
            // Initialize form handlers
            initWaitlistModal();
            initNewsletterModal();
            initFooterSubscription();
            initContactForm();
            initTryFreeButtons();
            
            // Test connection to Google Sheets after a short delay
            setTimeout(testSheetsConnection, 2000);
            
            log('FormHandler module initialization complete');
        },
        
        // Public method to submit form data
        submitForm: function(formType, data) {
            return submitToGoogleSheets(formType, data);
        },
        
        // Public form type constants
        FORM_TYPES: config.formTypes,
        
        // Public validation method
        isValidEmail: isValidEmail
    };
})();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    FormHandler.init();
}); 