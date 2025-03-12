/**
 * Portfolio JavaScript Functionality
 * Modern, professional interactions for a portfolio website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initProjectFilters();
    initLightbox();
    initContactForm();
    initAnimations();
    initDarkMode();
    initTypingEffect();
    initSkillsProgress();
    initTooltips();
});

/**
 * Navigation functionality
 * - Handles mobile navigation toggle with smooth animation
 * - Adds active class to current section in nav
 * - Implements smooth scrolling
 */
function initNavigation() {
    const header = document.querySelector('.header');
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');
    
    // Hide close button by default
    if(closeBtn) {
        closeBtn.style.display = 'none';
    }
    
    // Toggle mobile menu with improved animation
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            mainNav.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
            mainNav.classList.add('active');
            // Show close button when menu is opened
            if(closeBtn) {
                closeBtn.style.display = 'block';
            }
            document.body.style.overflow = 'hidden';
        });
    }
    
    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeNavWithAnimation();
        });
    }
    
    // Helper function for closing navigation with animation
    function closeNavWithAnimation() {
        mainNav.style.opacity = '0';
        mainNav.style.transform = 'translateX(100%)';
        
        // Wait for animation to complete before removing active class
        setTimeout(() => {
            mainNav.classList.remove('active');
            mainNav.style.opacity = '';
            mainNav.style.transform = '';
            document.body.style.overflow = '';
            // Hide close button when menu is closed
            if(closeBtn) {
                closeBtn.style.display = 'none';
            }
        }, 300);
    }
    
    // Smooth scroll for nav links with improved mobile handling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if(targetSection) {
                // Check if mobile menu is open
                if(window.innerWidth < 768 && mainNav.classList.contains('active')) {
                    // Close mobile menu with animation first
                    closeNavWithAnimation();
                    
                    // Wait for menu to close before scrolling
                    setTimeout(() => {
                        window.scrollTo({
                            top: targetSection.offsetTop - header.offsetHeight,
                            behavior: 'smooth'
                        });
                    }, 300);
                } else {
                    // Desktop or already closed mobile menu
                    window.scrollTo({
                        top: targetSection.offsetTop - header.offsetHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if(window.innerWidth < 768 && 
           mainNav.classList.contains('active') &&
           !mainNav.contains(e.target) && 
           e.target !== menuBtn &&
           !menuBtn.contains(e.target)) {
            closeNavWithAnimation();
        }
    });
    
    // Close menu when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if(e.key === 'Escape' && mainNav.classList.contains('active')) {
            closeNavWithAnimation();
        }
    });
    
    // Update active nav link on scroll
    updateActiveNavOnScroll();
}

/**
 * Updates active nav link based on current scroll position
 */
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav a');
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const headerHeight = header.offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Scroll effects
 * - Header shrink on scroll
 * - Scroll to top button
 * - Reveal animations on scroll
 */
function initScrollEffects() {
    const header = document.querySelector('.header');
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    // Header shrink effect
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Show/hide scroll to top button
        if(scrollTopBtn) {
            if(window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });
    
    // Scroll to top button functionality
    if(scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Initialize scroll reveal animations
    initScrollReveal();
}

/**
 * Scroll reveal animations using Intersection Observer
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
        // Set initial state
        element.classList.add('reveal-initial');
    });
}

/**
 * Project filtering functionality
 */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if(filterButtons.length && projectCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                // Filter projects
                projectCards.forEach(card => {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    
                    setTimeout(() => {
                        if(filter === 'all' || card.classList.contains(filter)) {
                            card.style.display = 'flex';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            card.style.display = 'none';
                        }
                    }, 300);
                });
            });
        });
    }
}

/**
 * Image/Project lightbox functionality
 */
function initLightbox() {
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
    
    if(lightboxTriggers.length > 0) {
        // Create lightbox container if it doesn't exist
        if(!document.querySelector('.lightbox')) {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <div class="lightbox-image-container">
                        <img class="lightbox-image" src="" alt="Project Image">
                    </div>
                    <div class="lightbox-details">
                        <h3 class="lightbox-title"></h3>
                        <p class="lightbox-description"></p>
                    </div>
                </div>
            `;
            document.body.appendChild(lightbox);
            
            // Add close functionality
            const closeBtn = document.querySelector('.lightbox-close');
            closeBtn.addEventListener('click', () => {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            });
            
            // Close on click outside
            lightbox.addEventListener('click', (e) => {
                if(e.target === lightbox) {
                    lightbox.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
        
        const lightbox = document.querySelector('.lightbox');
        const lightboxImage = document.querySelector('.lightbox-image');
        const lightboxTitle = document.querySelector('.lightbox-title');
        const lightboxDescription = document.querySelector('.lightbox-description');
        
        // Add click event to all lightbox triggers
        lightboxTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                
                const imgSrc = trigger.getAttribute('data-image') || trigger.querySelector('img')?.src;
                const title = trigger.getAttribute('data-title') || '';
                const description = trigger.getAttribute('data-description') || '';
                
                lightboxImage.src = imgSrc;
                lightboxTitle.textContent = title;
                lightboxDescription.textContent = description;
                
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
    }
}

/**
 * Contact form validation and submission
 * Improved with better feedback and proper validation
 */
function initContactForm() {
    const contactForm = document.querySelector('#contact-form');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements
            const nameInput = contactForm.querySelector('#name');
            const emailInput = contactForm.querySelector('#email');
            const subjectInput = contactForm.querySelector('#subject');
            const messageInput = contactForm.querySelector('#message');
            
            // Simple validation
            let isValid = true;
            
            // Validate name
            if(!nameInput.value.trim()) {
                showError(nameInput, 'Please enter your name');
                isValid = false;
            } else {
                removeError(nameInput);
            }
            
            // Validate email
            if(!validateEmail(emailInput.value)) {
                showError(emailInput, 'Please enter a valid email address');
                isValid = false;
            } else {
                removeError(emailInput);
            }
            
            // Validate subject
            if(!subjectInput.value.trim()) {
                showError(subjectInput, 'Please enter a subject');
                isValid = false;
            } else {
                removeError(subjectInput);
            }
            
            // Validate message
            if(!messageInput.value.trim()) {
                showError(messageInput, 'Please enter your message');
                isValid = false;
            } else {
                removeError(messageInput);
            }
            
            if(isValid) {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.textContent;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                
                // Submit the form data
                const formData = new FormData(contactForm);
                
                fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Network response was not ok.');
                })
                .then(data => {
                    // Show success message
                    showFormSuccess(contactForm);
                    contactForm.reset();
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Show error message
                    showFormError(contactForm);
                })
                .finally(() => {
                    // Reset button state
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                });
            }
        });
        
        // Input event listeners to clear errors on input
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                removeError(input);
            });
        });
    }
}

/**
 * Helper function to validate email
 */
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Helper function to show form error message
 */
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    let errorElement = formGroup.querySelector('.form-error-message');
    
    if(!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'form-error-message';
        formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    input.classList.add('error');
}

/**
 * Helper function to remove error message
 */
function removeError(input) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.form-error-message');
    
    if(errorElement) {
        errorElement.textContent = '';
    }
    
    input.classList.remove('error');
}

/**
 * Helper function to show form success message
 */
function showFormSuccess(form) {
    // Remove any existing messages
    removeFormMessages(form);
    
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.className = 'form-message success';
    successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Your message has been sent successfully!';
    
    // Insert before the form
    form.parentNode.insertBefore(successMessage, form);
    
    // Automatically remove the message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

/**
 * Helper function to show form error message
 */
function showFormError(form) {
    // Remove any existing messages
    removeFormMessages(form);
    
    // Create error message
    const errorMessage = document.createElement('div');
    errorMessage.className = 'form-message error';
    errorMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> There was a problem sending your message. Please try again.';
    
    // Insert before the form
    form.parentNode.insertBefore(errorMessage, form);
    
    // Automatically remove the message after 5 seconds
    setTimeout(() => {
        errorMessage.remove();
    }, 5000);
}

/**
 * Helper function to remove all form messages
 */
function removeFormMessages(form) {
    const messages = form.parentNode.querySelectorAll('.form-message');
    messages.forEach(message => message.remove());
}

/**
 * Animations for UI elements
 */
function initAnimations() {
    // Add animation to services cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add animation to skills items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.05}s`;
    });
    
    // Add animation to testimonials
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach((testimonial, index) => {
        testimonial.style.animationDelay = `${index * 0.2}s`;
    });
}

/**
 * Dark mode toggle functionality
 */
function initDarkMode() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Set initial theme
    if(currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if(darkModeToggle) {
            darkModeToggle.classList.add('active');
        }
    }
    
    // Toggle theme when button is clicked
    if(darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            darkModeToggle.classList.toggle('active');
            
            // Save preference to localStorage
            const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        });
    }
    
    // Listen for changes in system preference
    prefersDarkScheme.addEventListener('change', (e) => {
        if(!localStorage.getItem('theme')) {
            if(e.matches) {
                document.body.classList.add('dark-mode');
                if(darkModeToggle) {
                    darkModeToggle.classList.add('active');
                }
            } else {
                document.body.classList.remove('dark-mode');
                if(darkModeToggle) {
                    darkModeToggle.classList.remove('active');
                }
            }
        }
    });
}

/**
 * Typing effect for hero section
 */
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    
    if(typingElement) {
        const words = typingElement.getAttribute('data-words').split(',');
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;
        
        const type = () => {
            const currentWord = words[wordIndex].trim();
            
            if(isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }
            
            // Add blinking cursor effect
            typingElement.classList.add('cursor');
            
            // Handle word completion/deletion
            if(!isDeleting && charIndex === currentWord.length) {
                // Pause at end of word
                typeSpeed = 1500;
                isDeleting = true;
            } else if(isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                // Pause before typing next word
                typeSpeed = 500;
            }
            
            setTimeout(type, typeSpeed);
        };
        
        // Start typing effect
        setTimeout(type, 1000);
    }
}

/**
 * Skills progress bars animation
 */
function initSkillsProgress() {
    const progressBars = document.querySelectorAll('.skill-progress-bar');
    
    if(progressBars.length) {
        const animateProgress = () => {
            progressBars.forEach(bar => {
                const percentage = bar.getAttribute('data-progress');
                bar.style.width = percentage + '%';
            });
        };
        
        // Use Intersection Observer to trigger animation when visible
        const progressObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setTimeout(animateProgress, 300);
                    progressObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        // Observe the parent container
        const skillsSection = document.querySelector('.skills-section');
        if(skillsSection) {
            progressObserver.observe(skillsSection);
        }
    }
}

/**
 * Initialize tooltips for icons and buttons
 */
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        const tooltipText = element.getAttribute('data-tooltip');
        
        element.addEventListener('mouseenter', () => {
            // Create tooltip element
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            
            // Position the tooltip above the element
            const rect = element.getBoundingClientRect();
            tooltip.style.top = rect.top - 10 + 'px';
            tooltip.style.left = rect.left + (rect.width / 2) + 'px';
            
            // Add tooltip to page
            document.body.appendChild(tooltip);
            
            // Animate tooltip
            setTimeout(() => {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateY(-10px)';
            }, 10);
            
            // Store reference to tooltip
            element.tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', () => {
            if(element.tooltip) {
                // Animate tooltip out
                element.tooltip.style.opacity = '0';
                element.tooltip.style.transform = 'translateY(0)';
                
                // Remove tooltip after animation
                setTimeout(() => {
                    if(element.tooltip) {
                        element.tooltip.remove();
                        delete element.tooltip;
                    }
                }, 200);
            }
        });
    });
}