# Project Structure

```
portfolio/
├── public/                      # Static assets
│   └── vite.svg
├── src/
│   ├── animations/              # Animation configurations
│   │   └── variants.ts          # Framer Motion animation variants
│   ├── components/              # Reusable components
│   │   ├── Loading.tsx          # Loading screen component
│   │   ├── Navbar.tsx           # Navigation bar with smooth scroll
│   │   ├── ParticlesBackground.tsx  # Animated particle background
│   │   ├── ScrollProgress.tsx   # Scroll progress indicator
│   │   ├── SectionTitle.tsx     # Reusable section title component
│   │   └── TechBadge.tsx        # Technology badge component
│   ├── data/                    # Data and content
│   │   └── portfolio.ts         # All portfolio data (personal info, projects, skills, etc.)
│   ├── hooks/                   # Custom React hooks
│   │   ├── useActiveSection.ts  # Track active section on scroll
│   │   └── useScrollProgress.ts # Track scroll progress
│   ├── pages/                   # Page components
│   │   └── Home.tsx             # Main home page
│   ├── sections/                # Section components
│   │   ├── About.tsx            # About section
│   │   ├── Contact.tsx          # Contact section with form
│   │   ├── DSA.tsx              # LeetCode/DSA section
│   │   ├── Experience.tsx       # Experience timeline
│   │   ├── Footer.tsx           # Footer section
│   │   ├── GitHub.tsx           # GitHub activity section
│   │   ├── Hero.tsx             # Hero/landing section
│   │   ├── Projects.tsx         # Featured projects section
│   │   ├── Skills.tsx           # Skills section
│   │   └── SystemDesign.tsx     # System design concepts section
│   ├── styles/                  # Styles
│   │   └── index.css            # Global styles and Tailwind imports
│   ├── utils/                   # Utility functions
│   │   └── scrollTo.ts          # Smooth scroll utility
│   ├── App.tsx                  # Main App component
│   ├── main.tsx                 # Entry point
│   └── vite-env.d.ts            # Vite type definitions
├── .gitignore                   # Git ignore file
├── DEPLOYMENT.md                # Deployment guide
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML entry point
├── package.json                 # Dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── PROJECT_STRUCTURE.md         # This file
├── README.md                    # Project documentation
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.app.json            # TypeScript config for app
├── tsconfig.json                # TypeScript base config
├── tsconfig.node.json           # TypeScript config for Node
└── vite.config.ts               # Vite configuration
```

## Key Directories

### `/src/animations`
Contains Framer Motion animation variants and configurations for consistent animations across the site.

### `/src/components`
Reusable UI components that can be used across different sections:
- **Navbar**: Sticky navigation with active section highlighting
- **ScrollProgress**: Visual scroll progress indicator
- **ParticlesBackground**: Animated particle effect background
- **TechBadge**: Styled technology badges
- **SectionTitle**: Consistent section headers

### `/src/data`
Centralized data management:
- **portfolio.ts**: Single source of truth for all content (personal info, projects, skills, experience, etc.)

### `/src/hooks`
Custom React hooks for common functionality:
- **useActiveSection**: Detects which section is currently in viewport
- **useScrollProgress**: Calculates scroll progress percentage

### `/src/pages`
Page-level components:
- **Home**: Main landing page that composes all sections

### `/src/sections`
Major sections of the portfolio:
- **Hero**: Landing section with introduction
- **About**: Professional background
- **Skills**: Technical skills showcase
- **Projects**: Featured projects with details
- **SystemDesign**: Distributed systems concepts
- **Experience**: Professional timeline
- **GitHub**: GitHub activity and repositories
- **DSA**: LeetCode statistics
- **Contact**: Contact form and information
- **Footer**: Site footer

### `/src/styles`
Global styles and Tailwind configuration

### `/src/utils`
Utility functions for common operations

## Component Architecture

### Atomic Design Principles
- **Atoms**: Basic components (TechBadge, Loading)
- **Molecules**: Component combinations (SectionTitle)
- **Organisms**: Complex components (Navbar, sections)
- **Pages**: Full page compositions (Home)

### State Management
- Local component state with React hooks
- No global state management needed (simple portfolio)
- Data centralized in `/src/data/portfolio.ts`

### Styling Strategy
- Tailwind CSS utility classes
- Custom CSS for complex animations
- Glassmorphism effects
- Neon/glow accents
- Responsive design with mobile-first approach

## Data Flow

1. **Data Source**: `src/data/portfolio.ts`
2. **Components**: Import and display data
3. **Animations**: Framer Motion for smooth transitions
4. **Routing**: React Router for navigation (future expansion)

## Performance Optimizations

- Lazy loading for sections
- Optimized animations with Framer Motion
- Efficient re-renders with React hooks
- Code splitting with Vite
- Tailwind CSS purging in production

## Customization Guide

### Update Personal Information
Edit `src/data/portfolio.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  // ... other fields
};
```

### Add New Section
1. Create component in `src/sections/NewSection.tsx`
2. Import in `src/pages/Home.tsx`
3. Add navigation link in `src/components/Navbar.tsx`
4. Add data in `src/data/portfolio.ts` if needed

### Modify Styling
- Global styles: `src/styles/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific: Inline Tailwind classes

### Add New Animation
1. Define variant in `src/animations/variants.ts`
2. Use in component with Framer Motion

## Build and Deploy

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

See `DEPLOYMENT.md` for detailed deployment instructions.
