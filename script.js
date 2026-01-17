// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Enhanced Intersection Observer for smooth animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                if (entry.target.classList.contains('feature-item')) {
                    entry.target.style.transform = 'translateX(0)';
                } else {
                    entry.target.style.transform = 'translateY(0)';
                }
                entry.target.classList.add('animated');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-30px)';
        el.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // About section elements
    const aboutElements = document.querySelectorAll('.about-text, .about-image');
    aboutElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`;
        observer.observe(el);
    });
    
    // Section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach((el) => {
        observer.observe(el);
    });
});

// Update observer to handle section headers
const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.2 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.section-header').forEach(header => {
        headerObserver.observe(header);
    });
});

// Smooth scroll with easing
function smoothScrollTo(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        const targetPosition = targetElement.offsetTop - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutCubic(timeElapsed, startPosition, distance, 800);
            window.scrollTo(0, run);
            if (timeElapsed < 800) requestAnimationFrame(animation);
        }
        
        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }
        
        requestAnimationFrame(animation);
    }
}

// Update smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScrollTo(this.getAttribute('href'));
    });
});

// Prevent body scroll when modal is open (mobile fix)
function preventBodyScroll() {
    const body = document.body;
    const scrollY = window.scrollY;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
}

function allowBodyScroll() {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    body.style.width = '';
    if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
}

// Contact Modal
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const modalClose = document.querySelector('.modal-close');
const contactForm = document.getElementById('contactForm');

if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        contactModal.classList.add('active');
        preventBodyScroll();
    });
}

if (modalClose) {
    modalClose.addEventListener('click', () => {
        contactModal.classList.remove('active');
        allowBodyScroll();
    });
}

// Close modal when clicking outside
if (contactModal) {
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.classList.remove('active');
            allowBodyScroll();
        }
    });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal.classList.contains('active')) {
        contactModal.classList.remove('active');
        allowBodyScroll();
    }
});

// Contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data with basic sanitization
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !email || !phone || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Here you would typically send the data to a server with proper CSRF protection
        // For now, we'll just show an alert and reset the form
        alert('Thank you for your message! We will contact you soon.');
        contactForm.reset();
        
        // Optional: Close modal after submission
        // contactModal.classList.remove('active');
        // document.body.style.overflow = '';
    });
}

// About section slide-up effect covering hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const about = document.querySelector('.about');
    const heroContent = document.querySelector('.hero-content');
    const heroHeight = window.innerHeight;
    
    if (hero && about) {
        // Calculate how much the about section should move up
        // It starts at 50vh below, and should reach 0 when scrolled past hero
        const scrollProgress = Math.min(scrolled / heroHeight, 1);
        const translateY = 50 - (scrollProgress * 50); // From 50vh to 0vh
        
        about.style.transform = `translateY(${translateY}vh)`;
        
        // Fade out hero content as we scroll
        if (heroContent && scrolled < heroHeight) {
            heroContent.style.opacity = 1 - (scrolled / heroHeight) * 0.8;
            heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
        
        // Move hero up slightly
        if (scrolled < heroHeight) {
            hero.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    }
});

// Add active class to current section in navigation
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
