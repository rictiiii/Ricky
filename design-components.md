# Design Components Library

Component specifications based on williamle.design

## Navigation Components

### Fixed Navigation Bar
A sticky navigation component that remains at the top of the viewport.

**Specifications:**
- Position: `fixed` with `z-index: 10`
- Background: `var(--color-background-primary)`
- Layout: Flexbox with space-between alignment
- Padding: `var(--spacing-6)`
- Gap: `var(--gap-md)`

**HTML Structure:**
```html
<nav class="navigation">
  <div class="nav-container">
    <div class="nav-logo">Logo</div>
    <div class="nav-links">
      <a href="#" class="nav-link">Link 1</a>
      <a href="#" class="nav-link">Link 2</a>
    </div>
  </div>
</nav>
```

**CSS:**
```css
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-index-navigation);
  background: var(--color-background-primary);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-6);
  gap: var(--gap-md);
}

.nav-links {
  display: flex;
  gap: var(--gap-lg);
}

.nav-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-base);
}

.nav-link:hover {
  color: var(--color-text-primary);
}
```

## Layout Components

### Stack Container
A flexible vertical or horizontal stacking layout with customizable gap.

**Specifications:**
- Display: `flex`
- Direction: Configurable (row/column)
- Gap: `10px` default, customizable
- Width: 100% default

**HTML Structure:**
```html
<div class="stack" data-direction="column" data-gap="10">
  <!-- Content -->
</div>
```

**CSS:**
```css
.stack {
  display: flex;
  width: 100%;
}

.stack[data-direction="column"] {
  flex-direction: column;
}

.stack[data-direction="row"] {
  flex-direction: row;
}

.stack[data-gap="10"] {
  gap: 10px;
}

.stack[data-gap="20"] {
  gap: 20px;
}
```

### Aspect Ratio Container
A container that maintains specific aspect ratios for media content.

**HTML Structure:**
```html
<div class="aspect-ratio" data-ratio="16/9">
  <img src="image.jpg" alt="Description">
</div>
```

**CSS:**
```css
.aspect-ratio {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.aspect-ratio[data-ratio="16/9"] {
  aspect-ratio: 16 / 9;
}

.aspect-ratio[data-ratio="4/3"] {
  aspect-ratio: 4 / 3;
}

.aspect-ratio[data-ratio="1/1"] {
  aspect-ratio: 1 / 1;
}

.aspect-ratio img,
.aspect-ratio video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## Card Components

### Content Card
A versatile card component for displaying content with hover effects.

**Specifications:**
- Display: block or flex
- Overflow: hidden
- Text decoration: none (for links)
- Background: `var(--color-background-secondary)`
- Border: `1px solid var(--color-border)`
- Cursor: pointer on hover

**HTML Structure:**
```html
<a href="#" class="card">
  <div class="card-image">
    <img src="image.jpg" alt="Card image">
  </div>
  <div class="card-content">
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">Card description text</p>
  </div>
</a>
```

**CSS:**
```css
.card {
  display: block;
  background: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-base);
  will-change: transform;
}

.card:hover {
  background: var(--color-hover);
  cursor: pointer;
  transform: translateY(-2px);
}

.card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: var(--spacing-6);
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
}

.card-title {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  margin: 0;
}

.card-description {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin: 0;
}
```

## Typography Components

### Heading with Decorative Background
Display headings with optional decorative backgrounds or accents.

**HTML Structure:**
```html
<div class="heading-wrapper">
  <h1 class="heading-decorative">
    <span class="heading-text">Main Heading</span>
    <span class="heading-accent">Accent Text</span>
  </h1>
</div>
```

**CSS:**
```css
.heading-decorative {
  font-family: var(--font-display);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  margin: 0;
  display: inline-flex;
  flex-direction: column;
  gap: var(--gap-sm);
}

.heading-accent {
  font-family: var(--font-decorative);
  color: var(--color-text-secondary);
  font-size: 0.6em;
}
```

### Text Component with Border
Text elements with decorative borders and backgrounds.

**HTML Structure:**
```html
<div class="text-bordered">
  <p>Bordered text content</p>
</div>
```

**CSS:**
```css
.text-bordered {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-4);
  background: var(--color-surface);
}
```

## Interactive Components

### Button
Primary button component with hover states.

**HTML Structure:**
```html
<button class="btn btn-primary">Click Me</button>
<button class="btn btn-secondary">Secondary</button>
```

**CSS:**
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-md);
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  will-change: transform;
}

.btn-primary {
  background: var(--color-text-primary);
  color: var(--color-background-primary);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: var(--color-surface);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.btn-secondary:hover {
  background: var(--color-hover);
}
```

## Responsive Behavior

### Mobile Breakpoint (max-width: 1014px)
Components adapt for mobile viewports:

```css
@media (max-width: 1014px) {
  .navigation {
    padding: var(--spacing-4);
  }

  .nav-links {
    flex-direction: column;
    gap: var(--gap-sm);
  }

  .card-content {
    padding: var(--spacing-4);
  }

  .stack[data-responsive="true"] {
    flex-direction: column;
  }
}
```

## Performance Optimizations

All interactive components use performance-enhancing properties:

```css
.optimized-component {
  will-change: transform;
  -webkit-overflow-scrolling: touch;
}
```

## Accessibility

All components maintain high contrast ratios:
- Text on dark background: minimum 7:1 contrast ratio
- Interactive elements have clear focus states
- Semantic HTML elements used throughout
