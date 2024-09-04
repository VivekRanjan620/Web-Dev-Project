document.addEventListener('DOMContentLoaded', () => {
    // GSAP animations for header
    gsap.from('header', { duration: 1, y: -100, opacity: 0, ease: 'bounce' });

    // GSAP animations for hero content
    gsap.from('.hero-content h1', { duration: 1.5, x: -100, opacity: 0, ease: 'power2.inOut' });
    gsap.from('.hero-content p', { duration: 1.5, x: 100, opacity: 0, ease: 'power2.inOut', delay: 0.3 });
    gsap.from('.hero-content .btn', { duration: 1.5, scale: 0.5, opacity: 0, ease: 'back', delay: 0.6 });

    // GSAP animations for sections
    gsap.from('.about h2, .services h2, .contact h2', {
        scrollTrigger: {
            trigger: '.about, .services, .contact',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
        },
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power2.out',
    });

    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.services',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
        },
        duration: 1,
        scale: 0.8,
        opacity: 0,
        stagger: 0.3,
        ease: 'elastic.out(1, 0.3)',
    });
});
