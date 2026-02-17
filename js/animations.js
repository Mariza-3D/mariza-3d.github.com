// Scroll-triggered animations using Intersection Observer

export function initAnimations() {
    const animatedElements = document.querySelectorAll(
        '.animate-fade, .animate-fade-in, .animate-slide'
    );

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
}
