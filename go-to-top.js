// Go to Top Button Functionality
(function() {
  // Create the button
  const button = document.createElement('button');
  button.className = 'go-to-top';
  button.innerHTML = '<span class="material-icons">arrow_upward</span>';
  button.setAttribute('aria-label', 'Go to top');

  // Add button to the page
  document.body.appendChild(button);

  // Show/hide button based on scroll position
  function toggleButton() {
    if (window.pageYOffset > 300) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  }

  // Scroll to top when clicked
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Listen for scroll events
  window.addEventListener('scroll', toggleButton);

  // Initial check
  toggleButton();
})();
