# Radhika Scans & Diagnostics - Landing Page

A modern, fully-featured landing page for Radhika Scans & Diagnostics built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **Interactive Animations**: Smooth animations using Framer Motion
- **Health Packages**: Four comprehensive packages with pricing and details
- **Booking System**: Modal-based booking form with validation and localStorage persistence
- **Form Validation**: React Hook Form + Zod for robust client-side validation
- **Testimonials Carousel**: Auto-advancing testimonial slider with manual controls
- **Animated Stats**: Counter animations in About section
- **Contact Form**: Full-featured contact form with validation
- **Accessible**: Keyboard navigation, ARIA labels, semantic HTML
- **Debug Panel**: Toggle recent bookings view in footer (dev feature)

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation & Running

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run typecheck

# Lint code
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── NavBar.tsx          - Sticky navigation with mobile menu
│   ├── Hero.tsx            - Hero section with CTA buttons and offer card
│   ├── PackageCard.tsx     - Individual package card component
│   ├── PackagesGrid.tsx    - Grid layout for all packages
│   ├── ModalBooking.tsx    - Booking modal with form validation
│   ├── Services.tsx        - Service features section
│   ├── About.tsx           - About section with animated counters
│   ├── Testimonials.tsx    - Auto-advancing testimonial carousel
│   ├── Contact.tsx         - Contact section with map
│   ├── ContactForm.tsx     - Contact form component
│   └── Footer.tsx          - Footer with links and debug panel
├── data/
│   └── packages.ts         - Package data and testimonials (CHANGE DATA HERE)
├── utils/
│   └── api.ts              - Mock booking API (HOOK REAL BACKEND HERE)
├── App.tsx                 - Main app component
├── main.tsx                - App entry point
└── index.css               - Tailwind directives (CHANGE BRAND COLORS HERE)
```

## Customization Guide

### 1. Change Brand Colors
Edit `src/index.css` and `tailwind.config.js`:
```css
/* Add custom colors in tailwind.config.js theme.extend.colors */
/* Use Tailwind color utilities throughout components */
```

### 2. Update Package Data
Edit `src/data/packages.ts`:
```typescript
export const packages: Package[] = [
  // Modify package details, pricing, bullets here
];
```

### 3. Connect Real Backend API
Edit `src/utils/api.ts`:
```typescript
export const submitBooking = async (data: BookingData): Promise<BookingResponse> => {
  // Replace mock implementation with real API call
  const response = await fetch('/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
};
```

## Testing the Booking Flow

1. Click "Book Appointment" or "Book Now" on any package
2. Fill out the form with:
   - Name (min 2 chars)
   - Phone (10-digit Indian mobile)
   - Email (valid format)
   - Preferred date (today or future)
   - Preferred time (dropdown)
   - Optional notes
3. Submit and observe:
   - Loading state (1.2s simulated delay)
   - Success message (95% success rate)
   - Error handling (5% random failure for testing)
   - localStorage persistence
4. View recent bookings by clicking "Show Recent Bookings" in footer

## Deployment

### Netlify
```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy the 'dist' folder to Vercel
```

### Build Output
The production build is created in the `dist/` directory.

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard-accessible modal
- Focus management
- Color contrast compliance
- Alt text for images
- Screen reader-friendly forms

## Performance Optimizations

- Lazy loading images
- Optimized animations
- Code splitting
- Minified production builds
- Modern ES modules

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Radhika Scans & Diagnostics. All rights reserved.
