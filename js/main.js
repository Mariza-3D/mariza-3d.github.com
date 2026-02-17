// Main entry point
import { initNavigation } from './navigation.js';
import { initThreeScene } from './three-scene.js';
import { initAnimations } from './animations.js';
import { initCountdown } from './countdown.js';
import { populateContent } from './content.js';

// Loading management
let loadProgress = 0;
const loadingScreen = document.getElementById('loading-screen');
const loadingProgress = document.getElementById('loading-progress');

function updateLoadProgress(percent) {
    loadProgress = Math.min(100, loadProgress + percent);
    if (loadingProgress) {
        loadingProgress.style.width = `${loadProgress}%`;
    }

    if (loadProgress >= 100) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 500);
    }
}

// Initialize app
async function init() {
    try {
        // Populate static content
        populateContent();
        updateLoadProgress(20);

        // Initialize navigation
        initNavigation();
        updateLoadProgress(10);

        // Initialize Three.js scene
        await initThreeScene();
        updateLoadProgress(40);

        // Initialize scroll animations
        initAnimations();
        updateLoadProgress(10);

        // Initialize countdown timer
        initCountdown();
        updateLoadProgress(10);

        // Initialize other features
        initBackToTop();
        initCookieConsent();
        initCustomCursor();

        updateLoadProgress(10);

        console.log('✅ All systems initialized');
    } catch (error) {
        console.error('❌ Initialization error:', error);
        updateLoadProgress(100); // Hide loading screen anyway
    }
}

// Back to Top Button
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Cookie Consent
function initCookieConsent() {
    const consent = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');
    const closeBtn = document.getElementById('cookie-close');

    // Check if user already responded
    const hasConsent = localStorage.getItem('cookie-consent');

    if (!hasConsent) {
        setTimeout(() => {
            consent.classList.add('visible');
        }, 2000);
    }

    function hideConsent() {
        consent.classList.remove('visible');
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'accepted');
        hideConsent();
    });

    declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'declined');
        hideConsent();
    });

    closeBtn.addEventListener('click', hideConsent);
}

// Custom Cursor
function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    const cursorDot = cursor.querySelector('.cursor-dot');
    const cursorTrail = cursor.querySelector('.cursor-trail');

    // Only on desktop
    if (window.innerWidth < 768) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;

        cursorX += dx * 0.1;
        cursorY += dy * 0.1;

        cursorTrail.style.left = cursorX + 'px';
        cursorTrail.style.top = cursorY + 'px';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Magnetic effect on buttons
    const buttons = document.querySelectorAll('.btn, .social-link, .model-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            cursorTrail.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });

        btn.addEventListener('mouseleave', () => {
            cursorTrail.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Start initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
