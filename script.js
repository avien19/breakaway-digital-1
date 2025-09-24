// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initFAQ();
    initNewsletter();
    initSmoothScrolling();
    initFloatingCards();
    initNavbarScroll();
    initServiceSwitching();
    initUnifiedNavigation();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }

        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .step-item, .faq-item, .section-header');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// FAQ functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active', !isActive);
        });
    });
}

// Newsletter functionality
function initNewsletter() {
    const form = document.querySelector('.newsletter-form');
    const successMessage = document.querySelector('.newsletter-message.success');
    const errorMessage = document.querySelector('.newsletter-message.error');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = form.querySelector('input[type="email"]').value;
        
        // Hide previous messages
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
        
        // Simple email validation
        if (validateEmail(email)) {
            // Simulate API call
            setTimeout(() => {
                successMessage.style.display = 'block';
                form.reset();
            }, 500);
        } else {
            errorMessage.style.display = 'block';
        }
    });
}

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Floating cards animation
function initFloatingCards() {
    const cards = document.querySelectorAll('.floating-card');
    
    cards.forEach((card, index) => {
        // Add random floating animation
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        
        card.style.animationDelay = `${randomDelay}s`;
        card.style.animationDuration = `${randomDuration}s`;
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${rate}px)`;
        }
        
        if (heroImage) {
            heroImage.style.transform = `translateY(${rate * 0.3}px)`;
        }
    });
}

// Initialize parallax
initParallax();

// Button hover effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize button effects
initButtonEffects();

// Service cards hover effects
function initServiceCardEffects() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        });
    });
}

// Initialize service card effects
initServiceCardEffects();

// Loading animation
function initLoadingAnimation() {
    const elements = document.querySelectorAll('.hero-content, .hero-image, .service-card, .step-item');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize loading animation
setTimeout(initLoadingAnimation, 100);

// Counter animation for numbers (if any)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            counter.textContent = Math.floor(current);
            
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    });
}

// Intersection Observer for counter animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
});

// Observe counter elements
document.querySelectorAll('.counter').forEach(counter => {
    counterObserver.observe(counter);
});

// Form validation enhancement
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    });
}

// Field validation
function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    let errorMessage = '';
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (type === 'email' && value && !validateEmail(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError(field);
    }
    
    return isValid;
}

// Show field error
function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = '#ef4444';
}

// Clear field error
function clearFieldError(field) {
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
    field.style.borderColor = '';
}

// Initialize form validation
initFormValidation();

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initLazyLoading();

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations and effects
}, 16)); // ~60fps

// Accessibility improvements
function initAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2563eb;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID
    const mainContent = document.querySelector('.hero') || document.querySelector('main');
    if (mainContent) {
        mainContent.id = 'main-content';
    }
}

// Initialize accessibility features
initAccessibility();

// Service switching functionality
function initServiceSwitching() {
    const serviceItems = document.querySelectorAll('.service-item');
    const serviceImage = document.getElementById('service-image');
    const serviceTitle = document.getElementById('service-title');
    const serviceDescription1 = document.getElementById('service-description-1');
    const serviceDescription2 = document.getElementById('service-description-2');

    // Service data
    const servicesData = {
        'Business Strategy': {
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            title: 'Business Strategy',
            description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
            description2: 'Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
        },
        'Process Optimization': {
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            title: 'Process Optimization',
            description1: 'Streamline your business operations with our proven process optimization strategies. We analyze your current workflows and identify bottlenecks to improve efficiency and reduce costs.',
            description2: 'Our team of experts will work with you to implement lean methodologies and automation solutions that will transform your business processes and drive measurable results.'
        },
        'Market Insights': {
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            title: 'Market Insights',
            description1: 'Gain competitive advantage with comprehensive market research and analysis. We provide deep insights into market trends, customer behavior, and competitive landscape.',
            description2: 'Our data-driven approach helps you make informed decisions, identify new opportunities, and stay ahead of market changes with actionable intelligence.'
        },
        'Financial Planning': {
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            title: 'Financial Planning',
            description1: 'Optimize your financial strategy with expert planning and analysis. We help you create robust financial models and investment strategies for sustainable growth.',
            description2: 'From budgeting and forecasting to risk management and investment planning, our financial experts will guide you toward achieving your business objectives.'
        },
        'Operations Management': {
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            title: 'Operations Management',
            description1: 'Transform your operations with strategic management solutions. We help you optimize supply chains, improve quality control, and enhance operational efficiency.',
            description2: 'Our comprehensive approach covers everything from resource allocation to performance monitoring, ensuring your operations run smoothly and profitably.'
        },
        'Growth Consulting': {
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            title: 'Growth Consulting',
            description1: 'Accelerate your business growth with strategic consulting services. We develop customized growth strategies that align with your vision and market opportunities.',
            description2: 'From market expansion to product development, our growth experts will help you scale your business sustainably and achieve long-term success.'
        }
    };

    // Add click event listeners to service items
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            const serviceName = this.querySelector('span').textContent;
            
            // Remove active class from all items
            serviceItems.forEach(serviceItem => {
                serviceItem.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Update content with animation
            updateServiceContent(serviceName);
        });
    });

    // Function to update service content with smooth animation
    function updateServiceContent(serviceName) {
        const serviceData = servicesData[serviceName];
        
        if (serviceData) {
            // Add fade out animation
            const serviceDetails = document.querySelector('.service-details');
            serviceDetails.style.opacity = '0';
            serviceDetails.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                // Update content
                serviceImage.src = serviceData.image;
                serviceImage.alt = serviceData.title;
                serviceTitle.textContent = serviceData.title;
                serviceDescription1.textContent = serviceData.description1;
                serviceDescription2.textContent = serviceData.description2;
                
                // Add fade in animation
                serviceDetails.style.transition = 'all 0.5s ease';
                serviceDetails.style.opacity = '1';
                serviceDetails.style.transform = 'translateY(0)';
            }, 250);
        }
    }
}

// Unified Navigation Component
function initUnifiedNavigation() {
    // Check if navigation already exists
    const existingNav = document.querySelector('.navbar');
    if (existingNav) {
        // Update existing navigation with standardized structure
        updateExistingNavigation();
    } else {
        // Create new navigation if it doesn't exist
        createNewNavigation();
    }
}

function updateExistingNavigation() {
    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;

    // Standardize navigation order
    const standardNavItems = [
        { href: 'index.html', text: 'Home' },
        { href: 'services.html', text: 'Services' },
        { href: 'about.html', text: 'About' },
        { href: 'blog.html', text: 'Who I Work With' },
        { href: 'contact.html', text: 'Contact' }
    ];

    // Get current page
    const currentPage = getCurrentPage();
    
    // Update navigation items
    navMenu.innerHTML = standardNavItems.map(item => `
        <li class="nav-item">
            <a href="${item.href}" class="nav-link ${isActivePage(item.href, currentPage) ? 'active' : ''}">${item.text}</a>
        </li>
    `).join('');

    // Re-attach event listeners
    attachNavigationEventListeners();
}

function createNewNavigation() {
    const currentPage = getCurrentPage();
    const standardNavItems = [
        { href: 'index.html', text: 'Home' },
        { href: 'services.html', text: 'Services' },
        { href: 'about.html', text: 'About' },
        { href: 'blog.html', text: 'Who I Work With' },
        { href: 'contact.html', text: 'Contact' }
    ];

    const navigationHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-logo">
                    <div class="logo-container">
                        <img src="bd-icon.png" alt="Breakaway Digital Icon" class="logo-icon">
                        <img src="bd-text.png" alt="Breakaway Digital" class="logo-text">
                    </div>
                </div>
                <ul class="nav-menu">
                    ${standardNavItems.map(item => `
                        <li class="nav-item">
                            <a href="${item.href}" class="nav-link ${isActivePage(item.href, currentPage) ? 'active' : ''}">${item.text}</a>
                        </li>
                    `).join('')}
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
        </nav>
    `;

    // Insert navigation at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', navigationHTML);
    
    // Attach event listeners
    attachNavigationEventListeners();
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page;
}

function isActivePage(href, currentPage) {
    return currentPage === href || 
           (currentPage === 'index.html' && href === 'index.html') ||
           (currentPage === '' && href === 'index.html');
}

function attachNavigationEventListeners() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        // Remove existing event listeners
        const newHamburger = hamburger.cloneNode(true);
        hamburger.parentNode.replaceChild(newHamburger, hamburger);

        // Add new event listeners
        newHamburger.addEventListener('click', function() {
            newHamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                newHamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!newHamburger.contains(e.target) && !navMenu.contains(e.target)) {
                newHamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Console welcome message
console.log('%c🚀 Breakaway Digital Website Clone', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cWebsite successfully loaded with all animations and interactions!', 'color: #10b981; font-size: 14px;');

