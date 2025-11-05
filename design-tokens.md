# Design Tokens

Design tokens for the williamle.design design system

## Color Palette

### Base Colors
```css
--color-background-primary: #101010;
--color-background-secondary: rgb(20, 20, 23);
--color-text-primary: #ffffff;
--color-text-secondary: rgba(255, 255, 255, 0.7);
--color-text-tertiary: rgba(255, 255, 255, 0.5);
```

### Functional Colors
```css
--color-surface: rgba(255, 255, 255, 0.05);
--color-border: rgba(255, 255, 255, 0.1);
--color-hover: rgba(255, 255, 255, 0.08);
```

## Typography

### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text',
                'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Inter Display', var(--font-primary);
--font-decorative: 'Caveat', 'Shadows Into Light Two', cursive;
```

### Font Weights
```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
```

### Font Sizes
```css
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */
--font-size-4xl: 2.25rem;   /* 36px */
--font-size-5xl: 3rem;      /* 48px */
--font-size-6xl: 3.75rem;   /* 60px */
```

### Line Heights
```css
--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
```

## Spacing System

### Base Spacing Scale
```css
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.25rem;   /* 20px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
--spacing-20: 5rem;     /* 80px */
--spacing-24: 6rem;     /* 96px */
```

### Common Gaps
```css
--gap-xs: var(--spacing-2);   /* 8px */
--gap-sm: var(--spacing-3);   /* 12px */
--gap-md: var(--spacing-4);   /* 16px */
--gap-lg: var(--spacing-6);   /* 24px */
--gap-xl: var(--spacing-8);   /* 32px */
```

## Layout

### Breakpoints
```css
--breakpoint-mobile: 1014px;
--breakpoint-desktop: 1015px;
```

### Container Widths
```css
--container-max-width: 1200px;
--container-padding: var(--spacing-6);
```

### Z-Index Scale
```css
--z-index-base: 1;
--z-index-dropdown: 100;
--z-index-sticky: 200;
--z-index-fixed: 300;
--z-index-modal-backdrop: 400;
--z-index-modal: 500;
--z-index-navigation: 10;
```

## Effects

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6);
```

### Border Radius
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### Transitions
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
```

## Usage Example

```css
/* Apply tokens in your CSS */
.card {
  background-color: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  gap: var(--gap-md);
  transition: all var(--transition-base);
}

.card:hover {
  background-color: var(--color-hover);
}

.heading {
  font-family: var(--font-display);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  line-height: var(--line-height-tight);
}
```
