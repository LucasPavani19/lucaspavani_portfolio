document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os project-cards EXCETO o primeiro
    const projectCards = document.querySelectorAll('.project-card:not(:first-child)');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    projectCards.forEach(card => {
        observer.observe(card);
    });
});
  