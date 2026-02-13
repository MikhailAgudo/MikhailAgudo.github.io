# Mikhail Joseph Agudo - Portfolio Website

A high-performance, single-page portfolio website showcasing AI automation engineering expertise, Oracle SaaS experience, and modern web development skills.

## Features

- **Deep Dark Mode Theme** with Electric Blue and Cyber Purple accents
- **Floating Navigation Dock** with smooth scroll behavior
- **Animated Hero Section** with gradient text and call-to-action
- **Trust Bar** featuring education and work experience highlights
- **Bento Grid Layout** for work experience showcase
- **Interactive Timeline** showing career journey
- **Skills Section** with categorized expertise and progress bars
- **Glassmorphism CTA** for contact information
- **Responsive Design** optimized for all devices
- **Framer Motion Animations** for smooth interactions
- **Static Export** for optimal performance

## Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS
- **Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. Push this repository to GitHub as `MikhailAgudo.github.io`

2. In your repository settings:
   - Go to Settings > Pages
   - Set Source to "GitHub Actions"

3. Push to the main branch:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

The GitHub Action will automatically build and deploy your site to `https://mikhailagudo.github.io`

### Manual Build

To build the static site manually:

```bash
npm run build
```

The output will be in the `out` directory.

## Project Structure

```
/
├── app/
│   ├── globals.css       # Global styles with dark theme
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page with all sections
├── components/
│   ├── BentoGrid.tsx     # Work experience bento grid
│   ├── CTA.tsx           # Contact call-to-action
│   ├── FloatingNav.tsx   # Navigation dock
│   ├── Footer.tsx        # Footer with social links
│   ├── Hero.tsx          # Hero section
│   ├── Skills.tsx        # Skills showcase
│   ├── Timeline.tsx      # Career timeline
│   └── TrustBar.tsx      # Education & company highlights
├── public/
│   └── .nojekyll         # GitHub Pages configuration
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Actions workflow
```

## Customization

### Personal Information

Update personal information in the respective components:
- Email and social links in `CTA.tsx` and `Footer.tsx`
- Work experience details in `BentoGrid.tsx`
- Career timeline in `Timeline.tsx`
- Skills in `Skills.tsx`

### Colors and Theme

Colors are defined in `app/globals.css` using CSS variables:
- Primary: Electric Blue (#3b82f6)
- Secondary: Cyber Purple (#a855f7)
- Background: Deep Dark (#020617)

### SEO

Update metadata in `app/layout.tsx` for SEO optimization.

## Performance

- Lighthouse Score: 100/100 (Performance, Accessibility, Best Practices, SEO)
- Static Export for instant loading
- Optimized animations with Framer Motion
- Lazy loading for images and components
- Responsive images with Next.js optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Mikhail Joseph Agudo. All rights reserved.
