// Animated Pie Chart Implementation
(function() {

  // Convert polar coordinates to cartesian
  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  // Create SVG path for pie segment
  function createPieSegmentPath(centerX, centerY, radius, startAngle, endAngle) {
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const d = [
      "M", centerX, centerY,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");

    return d;
  }

  // Animate segment growing clockwise
  function animateSegment(path, centerX, centerY, radius, startAngle, endAngle, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const duration = 800;
        const startTime = performance.now();

        function animate(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);

          const currentEndAngle = startAngle + (endAngle - startAngle) * eased;
          const pathData = createPieSegmentPath(centerX, centerY, radius, startAngle, currentEndAngle);
          path.setAttribute('d', pathData);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            resolve();
          }
        }

        requestAnimationFrame(animate);
      }, delay);
    });
  }

  // Create pie chart
  function createPieChart(container, data) {
    const svg = container.querySelector('svg');
    const centerX = 160;
    const centerY = 160;
    const radius = 140;
    let currentAngle = 0;

    const segmentGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    svg.appendChild(segmentGroup);

    const segments = [];

    data.forEach((segment, index) => {
      const startAngle = currentAngle;
      const angleSize = (segment.value / 100) * 360;
      const endAngle = currentAngle + angleSize;

      // Create segment path
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('fill', segment.color);
      path.setAttribute('stroke', '#fff');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('class', 'pie-segment');
      path.setAttribute('d', createPieSegmentPath(centerX, centerY, radius, startAngle, startAngle)); // Start with 0 size

      segmentGroup.appendChild(path);

      // Calculate label position (INSIDE the colored area)
      const labelAngle = startAngle + (angleSize / 2);
      const labelRadius = radius * 0.6; // Position at 60% of radius to be inside
      const labelPos = polarToCartesian(centerX, centerY, labelRadius, labelAngle);

      // Create label text (white color, inside segment)
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', labelPos.x);
      text.setAttribute('y', labelPos.y);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('dominant-baseline', 'middle');
      text.setAttribute('class', 'pie-label');
      text.setAttribute('fill', 'white');
      text.setAttribute('font-size', '24');
      text.setAttribute('font-weight', '600');
      text.setAttribute('opacity', '0');
      text.textContent = segment.value + '%';
      svg.appendChild(text);

      segments.push({
        path,
        text,
        startAngle,
        endAngle,
        centerX,
        centerY,
        radius
      });

      currentAngle = endAngle;
    });

    return segments;
  }

  // Animate chart
  async function animateChart(container, segments) {
    // Animate all segments in parallel (no pause between)
    const animations = segments.map((seg, i) =>
      animateSegment(
        seg.path,
        seg.centerX,
        seg.centerY,
        seg.radius,
        seg.startAngle,
        seg.endAngle,
        0 // No stagger delay
      )
    );

    await Promise.all(animations);

    // Fade in labels after segments complete
    setTimeout(() => {
      segments.forEach(seg => {
        seg.text.setAttribute('opacity', '1');
      });
    }, 100);
  }

  // Initialize charts
  function initPieCharts() {
    const chartContainers = document.querySelectorAll('.pie-chart');
    const chartData = [];

    chartContainers.forEach(container => {
      const dataStr = container.getAttribute('data-values');
      if (!dataStr) return;

      const data = JSON.parse(dataStr);
      const segments = createPieChart(container, data);
      chartData.push({ container, segments });
    });

    // Intersection Observer for scroll trigger
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');

          const chartWrapper = entry.target.closest('.pie-chart-container');
          chartWrapper.classList.add('animate-in');

          // Find and animate this chart
          const chart = entry.target;
          const chartInfo = chartData.find(cd => cd.container === chart);
          if (chartInfo) {
            animateChart(chart, chartInfo.segments);
          }
        }
      });
    }, observerOptions);

    chartContainers.forEach(chart => observer.observe(chart));
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPieCharts);
  } else {
    initPieCharts();
  }
})();
