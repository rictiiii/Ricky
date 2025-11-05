// Scroll-triggered animations for project cards
document.addEventListener('DOMContentLoaded', function() {

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  // Observe all project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    observer.observe(card);
  });

  // Add smooth parallax effect on scroll
  let ticking = false;

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        const scrolled = window.pageYOffset;

        projectCards.forEach((card, index) => {
          const cardTop = card.getBoundingClientRect().top + window.pageYOffset;
          const cardOffset = (scrolled - cardTop + window.innerHeight) * 0.05;

          if (scrolled > cardTop - window.innerHeight && scrolled < cardTop + card.offsetHeight) {
            card.style.transform = `translateY(${cardOffset}px)`;
          }
        });

        ticking = false;
      });

      ticking = true;
    }
  });

});
