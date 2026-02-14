# Roadmap
## Navbar (/components/FloatingNav.tsx)
- [x] Rename "Hero" into "Home"

## Hero Section (/components/Hero.tsx)
### Taglines
- [x] Include your full name prominently in or right above the main tagline
  - "Mikhail Joseph Agudo" as a big text or part of the headline.
- [x] Replace current tagline ("Optimizing the Future with AI and the Web") with something more specific and benefit-focused
  - Replace with "AI-Powered Automation for Tomorrow's Businesses"
- [x] Keep the subtitle descriptive but make it punchier (replace "AI Automation Engineer specializing in Oracle HCM Cloud, integrations, and workflow optimization with LLMs")
  - Replace with "Freelance AI Automation Engineer | LLM-Driven Integration Specialist | Oracle Integrations & Analytics Expert"
- [x] Add a short 1–2 sentence personal value statement right below the subtitle
  Example:  
  "With 4+ years optimizing enterprise systems, I now help businesses automate repetitive labor and decision-making to streamline operations, and build websites to showcase their products and services."

### Buttons & Calls-to-Action (CTAs)
- [x] Keep "Get in Touch" button (showing email) — it's good
- [x] Rename "View My Work" to "See My Experience"  
- [x] Add a "View Portfolio" button next to "See My Experience"

### Profile Photo
- [x] Restructure the hero into a 2-column grid (60/40 split). Use a Glassmorphism container for the profile photo placeholder with a subtle pulse animation.
    - For now, I don't have a professional photo of me, so I'll use a placeholder
- [x] Create a folder where I can put in pictures for use

## New Services Section (new file /components/Services.tsx)
- [ ] On the navbar (/components/FloatingNav.tsx) add "Services" right after "Experience"
- [ ] Add the services section to the page after the "Experience" section.
- [ ] Use a bento box layout (like /components/BentoGrid.tsx)
- [ ] The bento box only has two cards: "Workflow Automation" and "Web Development".
    - For now, the boxes should be empty. I'll fill them in later.
- [ ] Give the 'Workflow Automation' card a 2/3 width and 'Web Development' a 1/3 width on desktop to maintain the asymmetrical Bento aesthetic.

## Portfolio / "Skills" Section (/components/Skills.tsx)
- [ ] Keep the cards style. Each card represents one project.
- [ ] Replace generic Lucide icons with small, high-quality Tech Stack badges (e.g., Next.js, Oracle, Python) at the bottom or top-right of the card.
- [ ] Change the cards so that they also contain a creation date of the project (February 2021) below the title in smaller font, description of the project below both the title & date, and a project photo below that fits onto the card.
- [ ] Make each card clickable that leads to a detailed page or demo of the project.

## NEW: Polish & Aesthetics (Expert Suggestions)
- [ ] Add a "Spotlight" hover effect to all Bento and Portfolio cards (a subtle radial gradient following the mouse).
- [ ] Ensure mobile responsiveness: Hero section should stack (Photo on top) and Services should stack vertically.
- [ ] Implement Framer Motion `AnimatePresence` for smooth section transitions.
- [ ] Add "Open Graph" (OG) meta tags in `layout.tsx` for professional link previews on LinkedIn.

## SEO & Discoverability Basics
- [ ] Include target keywords in page title, headings, and meta description  
  Examples: "AI Automation Engineer Philippines", "Oracle HCM Cloud Freelancer", "AI Workflow Optimization"
- [ ] Use clean, readable URLs (e.g., /services/ai-automation instead of random strings)
- [ ] Ensure fast loading (compress images, use modern hosting)

## Work Experience
This section is for me. Do not do the items here.
- [ ] Revise and rewrite the cards in "Work Experience" section
