# Chandan Thapa Portfolio

A premium portfolio website built with Next.js, React, and TypeScript.

## Project Overview

This is the personal portfolio of Chandan Thapa, a full-stack developer and creative technologist. The website showcases projects, skills, experience, and provides a platform for visitors to connect and collaborate.

## Technology Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **3D Graphics**: Three.js (for visual effects)

## Features

### Premium Design
- Modern, clean aesthetic
- Responsive design for all devices
- Smooth animations and transitions
- Interactive UI components

### Portfolio Features
- Project showcase with filtering
- Skill visualization
- Experience timeline
- Community links
- Contact form
- Mobile-responsive navigation

### Performance
- Optimized for Core Web Vitals
- Lazy loading of images
- Code splitting
- Built-in ESLint and TypeScript support

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

This starts the Next.js development server on http://localhost:3000

## Building

```bash
npm run build
```

Builds the application for production.

## Running

```bash
npm start
```

Runs the built application.

## Folder Structure

```
.
├── public/
│   ├── images/           # Profile images and project photos
│   ├── icons/            # Icons and favicons
│   └── fonts/            # Custom fonts
├── src/
│   ├── app/              # Next.js pages and layouts
│   ├── components/       # React components
│   │   ├── navigation/   # Navigation components
│   │   ├── hero/         # Hero section components
│   │   ├── about/        # About section
│   │   ├── skills/        # Skills display
│   │   ├── projects/     # Project showcase
│   │   ├── services/     # Services section
│   │   ├── experience/   # Experience timeline
│   │   ├── community/    # Social links
│   │   ├── now/          # Currently building
│   │   ├── contact/      # Contact section
│   │   ├── footer/       # Footer
│   │   └── ui/           # UI components
│   ├── data/             # Data files
│   ├── lib/              # Utility functions
│   └── hooks/            # Custom hooks
├── .gitignore           # Git ignore file
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies
├── postcss.config.mjs   # PostCSS configuration
├── README.md            # This file
├── tsconfig.json        # TypeScript configuration
└── ...
```

## Adding Projects

To add a new project, edit `src/data/projects.ts` and add a new object to the `projects` array:

```typescript
{
  id: '4', // Unique ID
  title: 'New Project',
  category: 'Web', // Options: Web, Full Stack, UI/UX, Design, Experiments
  description: 'Brief description of the project',
  image: '/images/projects/new-project.png',
  technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/yourusername/new-project',
  featured: false, // Set to true for featured projects
}
```

## Adding Skills

To add a new skill, edit `src/data/skills.ts` and add a new object to the `skills` array:

```typescript
{ id: '21', name: 'New Skill', level: 'intermediate', category: 'frontend' }
```

Categories: frontend, backend, database, design, tools

Levels: beginner, intermediate, advanced, expert

## Theme Customization

The portfolio uses CSS variables for theming. You can customize the colors in `src/app/globals.css`:

```css
:root {
  --background: #08090b;
  --surface: #101216;
  --surface-elevated: #15171c;
  --foreground: #f5f7fa;
  --muted: #9ba1aa;
  --accent-primary: #22d3ee;
  --accent-secondary: #ec4899;
  --border: rgba(255,255,255,0.1);
}
```

## Development Tips

- Use `npm run lint` to check for linting errors
- The project uses TypeScript for type safety
- All components are optimized for performance
- The design is mobile-first and responsive

## Contributing

While this is a portfolio project, contributions are welcome for:
- Bug fixes
- Feature improvements
- Code optimizations
- Documentation updates

Please follow the existing code style and conventions.

## License

This portfolio project is for demonstration purposes. All rights reserved.
