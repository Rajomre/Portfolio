 Raj Omre — Personal Portfolio

A responsive single-page portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. It presents an introduction, skills, projects, experience, and contact information in a structured, accessible interface.



 Features

- Single-page layout with section-based navigation
- Fixed header with smooth scrolling, active-section states, and a mobile navigation menu
- Hero, About, Skills, Projects, Experience, Contact, and Footer sections
- Project cards with technology tags and repository or live links
- Reusable components for images, icons, and branding
- Content maintained through a centralized data module
- Responsive layouts for mobile, tablet, and desktop screens
- Visual enhancements including entry animations, scroll reveals, glass effects, and a canvas particle background

 Technology Stack

| Area | Technologies |
| --- | --- |
| Framework | Next.js 15, React 19, TypeScript |
| Styling | Tailwind CSS 3.4, CSS variables, `@tailwindcss/typography` |
| Icons | `@heroicons/react`, `lucide-react`, custom SVG icons |
| Typography | Plus Jakarta Sans via Google Fonts |

 Project Structure

```text
portfoliox/
├── public/
│   ├── favicon.ico
│   └── assets/images/
│       ├── app_logo.png
│       └── no_image.png
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── AppImage.tsx
│   │   │   ├── AppIcon.tsx
│   │   │   └── AppLogo.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolioData.ts
│   └── styles/
│       ├── tailwind.css
│       └── index.css
├── next.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── .env
```

 Architecture and Content Flow

`src/app/page.tsx` composes the site from the shared header and footer plus the portfolio sections. Portfolio content is maintained in `src/data/portfolioData.ts`, which provides data for navigation, social links, skills, projects, experience, and statistics. The relevant section and shared components render that data.

```text
portfolioData.ts
  ├── Header.tsx          navigation links
  ├── HeroSection.tsx     social links
  ├── AboutSection.tsx    statistics
  ├── SkillsSection.tsx   skills
  ├── ProjectsSection.tsx projects
  ├── ExperienceSection.tsx experience entries
  └── Footer.tsx          navigation and social links
```

 Design and Interaction

The styling system combines Tailwind utilities with global CSS in `src/styles/tailwind.css`. CSS variables define the shared color values, while `tailwind.config.js` extends the theme with those values and the project font.

The interface includes responsive breakpoints, animated content entry, scroll-reveal behavior, progress-bar animations, glass-style surfaces, red glow effects, and a canvas-based particle background in the hero section. The header supports smooth scrolling and changes state as the page scrolls.

```
Open [http://localhost:4028](http://localhost:4028) in your browser.

 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server on port 4028. |
| `npm run build` | Creates a production build. |
| `npm run start` | Starts the production server. |
| `npm run lint` | Runs code-quality checks. |
| `npm run lint:fix` | Applies available lint fixes. |
| `npm run format` | Formats the codebase with Prettier. |
| `npm run type-check` | Checks TypeScript types. |

 Customization

For most content updates, start with `src/data/portfolioData.ts`:

- Update skills, project entries, experience items, social links, and navigation links.
- Update the hero, header, or footer components when changing displayed branding.
- Update `src/styles/tailwind.css` to change CSS variables such as the primary color.
- Add or replace static images in `public/assets/images/`.

Use real project descriptions, working URLs, and verified experience information when updating portfolio content.

 Key Files

| File | Purpose |
| --- | --- |
| `src/app/layout.tsx` | Configures the root layout, font, and metadata. |
| `src/app/page.tsx` | Renders the single-page portfolio composition. |
| `src/data/portfolioData.ts` | Central source for portfolio content and shared data. |
| `src/components/Header.tsx` | Provides fixed navigation and mobile-menu behavior. |
| `src/components/Footer.tsx` | Renders footer navigation and social links. |
| `src/components/ui/AppImage.tsx` | Wraps image rendering with fallback support. |
| `src/styles/tailwind.css` | Defines global styles, theme variables, and custom effects. |

 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Heroicons](https://heroicons.com)

Author
Raj Omre
Computer Science Student | Aspiring Full-Stack Developer
- GitHub: github.com/Rajomre
- LinkedIn: linkedin.com/in/rajomre
License
This project is a personal portfolio website created for learning, development, and professional presentation.
