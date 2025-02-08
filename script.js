
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Se 30% ou mais do elemento estiver visível:
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
  
    // Observa cada cartão de projeto para disparar a animação
    document.querySelectorAll(".project-card").forEach(card => {
      observer.observe(card);
    });
  });
  