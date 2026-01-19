// Social Studies Interactive Features
// Vocabulary Card Flip Functionality
document.addEventListener('DOMContentLoaded', function() {

    // Vocabulary Card Flip
    const vocabCards = document.querySelectorAll('.vocab-card');
    vocabCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });

        // Keyboard accessibility
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.classList.toggle('flipped');
            }
        });

        // Make cards focusable for keyboard navigation
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', 'Click to flip vocabulary card');
    });

    // Back to Top Button
    createBackToTopButton();

    // Scroll Reveal Animations
    setupScrollReveal();

    // Smooth Scroll for Anchor Links
    setupSmoothScroll();

    // Mobile Navigation Toggle
    setupMobileNav();
});

// Create and manage back to top button
function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);

    // Show/hide button on scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Scroll reveal animations
function setupScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with fade-in animation
    const elementsToReveal = document.querySelectorAll('.section, .unit-card');
    elementsToReveal.forEach(el => {
        // Skip if already animated
        if (!el.style.opacity) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
        observer.observe(el);
    });
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Add visual feedback for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn, .back-link');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// Progress indicator for reading (optional feature)
function createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #dc2626, #2563eb, #d97706, #059669);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize progress bar on unit pages (not on index)
if (document.querySelector('.unit-header')) {
    createProgressBar();
}

// Expandable sections (optional - can be used for long content)
function makeExpandable(selector) {
    const sections = document.querySelectorAll(selector);
    sections.forEach(section => {
        const heading = section.querySelector('h3');
        if (heading) {
            heading.style.cursor = 'pointer';
            heading.innerHTML += ' <span class="expand-icon" style="font-size: 0.8em;">▼</span>';

            const content = Array.from(section.children).filter(el => el !== heading);
            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'expandable-content';
            content.forEach(el => contentWrapper.appendChild(el));
            section.appendChild(contentWrapper);

            heading.addEventListener('click', function() {
                const icon = this.querySelector('.expand-icon');
                const isExpanded = contentWrapper.style.maxHeight;

                if (isExpanded) {
                    contentWrapper.style.maxHeight = null;
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    contentWrapper.style.maxHeight = contentWrapper.scrollHeight + 'px';
                    icon.style.transform = 'rotate(180deg)';
                }
            });

            // Style the expandable content
            contentWrapper.style.cssText = `
                max-height: 1000px;
                overflow: hidden;
                transition: max-height 0.3s ease;
            `;

            heading.querySelector('.expand-icon').style.transition = 'transform 0.3s ease';
        }
    });
}

// Mobile Navigation Toggle
function setupMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Set active link based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        links.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
}

// Add keyboard navigation hints for accessibility
document.addEventListener('DOMContentLoaded', function() {
    // Add focus visible styles for keyboard navigation
    const style = document.createElement('style');
    style.textContent = `
        *:focus-visible {
            outline: 3px solid #3b82f6;
            outline-offset: 2px;
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }

        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// ============================================
// TAB-BASED NAVIGATION SYSTEM - 4 Tabs per Unit
// ============================================

function initTabNavigation() {
    // Select both old sidebar nav items (if any exist) and new dropdown menu links
    const tabButtons = document.querySelectorAll('.slide-nav-item, .dropdown-menu a');
    const slides = document.querySelectorAll('.slide');

    if (slides.length === 0) return;

    function showTab(tabName) {
        // Update active states
        tabButtons.forEach(btn => btn.classList.remove('active'));

        const activeButton = document.querySelector(
            `.dropdown-menu a[href$="#tab-${tabName}"]`
        );
        if (activeButton) {
            activeButton.classList.add('active');
        }

        // Show slides matching this tab
        slides.forEach(slide => {
            const slideTab = slide.getAttribute('data-tab');
            slide.classList.toggle('active', slideTab === tabName);
        });

        // Scroll to top
        const mainContent = document.querySelector('.slide-main-content');
        if (mainContent) {
            mainContent.scrollTop = 0;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Update URL hash
        if (!window.location.hash.includes(`tab-${tabName}`)) {
            window.location.hash = `tab-${tabName}`;
        }
    }

    // Check hash on load
    function checkHashAndShowTab() {
        if (window.location.hash) {
            const match = window.location.hash.match(/tab-(\w+)/);
            if (match && match[1]) {
                showTab(match[1]);
                return;
            }
        }
        showTab('overview'); // Default
    }

    checkHashAndShowTab();
    window.addEventListener('hashchange', checkHashAndShowTab);
}

// ============================================
// DROPDOWN NAVIGATION HANDLERS
// ============================================

function initDropdownNavigation() {
    const dropdownItems = document.querySelectorAll('.has-dropdown');

    if (dropdownItems.length === 0) return;

    dropdownItems.forEach(item => {
        const trigger = item.querySelector('.dropdown-trigger');
        const menu = item.querySelector('.dropdown-menu');

        if (!trigger || !menu) return;

        // Desktop: hover shows dropdown
        item.addEventListener('mouseenter', () => {
            // Hide all other dropdowns first
            dropdownItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('active');
                }
            });
            item.classList.add('active');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('active');
        });

        // Mobile: click toggles dropdown (preventDefault on mobile only)
        trigger.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();

                // Close other dropdowns
                dropdownItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current dropdown
                item.classList.toggle('active');
            }
        });
    });

    // Mark current page's dropdown
    const currentPage = window.location.pathname.split('/').pop();
    dropdownItems.forEach(item => {
        const trigger = item.querySelector('.dropdown-trigger');
        if (trigger && trigger.getAttribute('href') === currentPage) {
            item.classList.add('current-page');
        }
    });

    // Mark active tab in dropdown
    if (window.location.hash) {
        const activeLink = document.querySelector(`.dropdown-menu a[href="${currentPage}${window.location.hash}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Close all dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.has-dropdown')) {
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
}

// Tab switching for capstone requirements
function initCapstoneRequirements() {
    const tabButtons = document.querySelectorAll('.requirement-tab');
    const tabPanels = document.querySelectorAll('.requirement-panel');

    if (tabButtons.length === 0) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active from all
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add active to clicked
            button.classList.add('active');
            const targetPanel = document.getElementById(button.dataset.tab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// Initialize tab navigation when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Always initialize dropdown navigation (on all pages)
    initDropdownNavigation(); // New function - handles dropdown interactions

    // Only initialize tab navigation on unit pages
    if (document.querySelector('.slide-container')) {
        initTabNavigation();      // Updated function - supports dropdown links
    }

    // Initialize capstone requirements tabs
    initCapstoneRequirements();
});
