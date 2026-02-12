// Scroll hijacking for image containers
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    const scrollContainer = document.getElementById('visual-design-scroll');

    if (!scrollContainer) return;

    let isScrollingContainer = false;

    function handleWheel(e) {
      const container = scrollContainer;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      // Check if container is centered in viewport
      const rect = container.getBoundingClientRect();
      const containerCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const centerThreshold = window.innerHeight * 0.3; // Within 30% of center
      const inViewport = Math.abs(containerCenter - viewportCenter) < centerThreshold;

      if (inViewport) {
        const delta = e.deltaY;
        const scrollSpeed = 10; // Significantly increase scroll speed to match page scrolling

        // Scrolling down
        if (delta > 0) {
          if (!atBottom) {
            e.preventDefault();
            container.scrollTop += delta * scrollSpeed;
            isScrollingContainer = true;
          } else {
            isScrollingContainer = false;
          }
        }
        // Scrolling up
        else if (delta < 0) {
          if (!atTop) {
            e.preventDefault();
            container.scrollTop += delta * scrollSpeed;
            isScrollingContainer = true;
          } else {
            isScrollingContainer = false;
          }
        }
      }
    }

    // Add wheel event listener to window
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Add custom scrollbar styling - hide scrollbar
    const style = document.createElement('style');
    style.textContent = `
      #visual-design-scroll::-webkit-scrollbar {
        display: none;
      }

      #visual-design-scroll {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);
  }
})();
