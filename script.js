// Scroll-triggered animations for project cards
document.addEventListener('DOMContentLoaded', function() {
  console.log('Script loaded');

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '-50px', // Trigger when 50px from viewport
    threshold: 0.2
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      console.log('Card intersecting:', entry.isIntersecting, entry.target);
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        // Remove class when scrolling back up to re-trigger animation
        entry.target.classList.remove('is-visible');
      }
    });
  }, observerOptions);

  // Observe all project cards
  const projectCards = document.querySelectorAll('.project-card');
  console.log('Found cards:', projectCards.length);

  projectCards.forEach((card, index) => {
    console.log('Observing card', index);
    observer.observe(card);
  });

});
