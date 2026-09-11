# 🚀 Raj Omre — Personal Portfolio Website

> **Ek modern, responsive portfolio website jo Next.js aur TypeScript se bana hai.**
> Yeh README aapko scratch se samjhayega ki yeh project kaise kaam karta hai, kaise bana hai, aur kaunsi technologies use ki gayi hain.

---

## 📋 Table of Contents

1. [Project Overview](#-project-overview)
2. [Live Demo](#-live-demo)
3. [Technologies Used](#-technologies-used)
4. [Project Structure](#-project-structure)
5. [How It Works — Page by Page](#-how-it-works--page-by-page)
6. [Data Flow — Ek jagah se poora data](#-data-flow--ek-jagah-se-poora-data)
7. [Styling System](#-styling-system)
8. [Animations & Effects](#-animations--effects)
9. [Responsive Design](#-responsive-design)
10. [How to Run Locally](#-how-to-run-locally)
11. [Available Scripts](#-available-scripts)
12. [File-by-File Guide](#-file-by-file-guide)

---

## 🌟 Project Overview

Yeh ek **Single Page Application (SPA)** hai — matlab poori website ek hi page par hai aur sections ke beech scroll karke navigate kiya jaata hai.

```
┌─────────────────────────────────────────┐
│              HEADER (Fixed)             │  ← Hamesha upar rehta hai
├─────────────────────────────────────────┤
│         HERO SECTION (Home)             │  ← Pehla dikhne wala section
├─────────────────────────────────────────┤
│         ABOUT SECTION                   │  ← Apne baare mein
├─────────────────────────────────────────┤
│         SKILLS SECTION                  │  ← Technologies & skills
├─────────────────────────────────────────┤
│         PROJECTS SECTION                │  ← Kaam ke projects
├─────────────────────────────────────────┤
│         EXPERIENCE SECTION              │  ← Work & education history
├─────────────────────────────────────────┤
│         CONTACT SECTION                 │  ← Contact form
├─────────────────────────────────────────┤
│              FOOTER                     │  ← Social links & copyright
└─────────────────────────────────────────┘
```

---

## 🔗 Live Demo

**Website:** [https://portfoliox7007.builtwithrocket.new](https://portfoliox7007.builtwithrocket.new)

---

## 🛠️ Technologies Used

### Core Framework

| Technology | Version | Kaam kya karta hai |
|---|---|---|
| **Next.js** | 15 | React ka framework — routing, SSR, optimization sab handle karta hai |
| **React** | 19 | UI components banane ke liye |
| **TypeScript** | 5+ | JavaScript ka type-safe version — bugs kam hote hain |

### Styling

| Technology | Version | Kaam kya karta hai |
|---|---|---|
| **Tailwind CSS** | 3.4 | Utility classes se fast styling — `className="flex gap-4 text-red-500"` |
| **CSS Variables** | — | Colors aur theme ek jagah define hote hain |
| **@tailwindcss/typography** | 0.5 | Rich text styling ke liye |

### Icons & UI

| Technology | Kaam kya karta hai |
|---|---|
| **@heroicons/react** | Beautiful SVG icons — `<CodeBracketIcon />` |
| **lucide-react** | Extra icon set |
| **Custom SVG** | GitHub, LinkedIn, Instagram, Email icons |

### Fonts

| Font | Kahan se aata hai |
|---|---|
| **Plus Jakarta Sans** | Google Fonts (Next.js automatically load karta hai) |

---

## 📁 Project Structure

```
portfoliox/
│
├── 📁 public/                          # Static files (images, favicon)
│   ├── favicon.ico                     # Browser tab icon
│   └── assets/
│       └── images/
│           ├── app_logo.png            # App logo image
│           └── no_image.png            # Fallback image
│
├── 📁 src/                             # Saara source code yahan hai
│   │
│   ├── 📁 app/                         # Next.js App Router
│   │   ├── layout.tsx                  # Root layout — font, metadata, body wrap
│   │   ├── page.tsx                    # Main page — saare sections yahan import hain
│   │   ├── not-found.tsx               # 404 page
│   │   ├── sitemap.ts                  # SEO sitemap
│   │   ├── robots.ts                   # SEO robots.txt
│   │   │
│   │   └── 📁 components/              # Page-specific components
│   │       ├── HeroSection.tsx         # Pehla section — naam, photo, intro
│   │       ├── AboutSection.tsx        # About me section
│   │       ├── SkillsSection.tsx       # Skills & progress bars
│   │       ├── ProjectsSection.tsx     # Projects cards
│   │       ├── ExperienceSection.tsx   # Timeline — work & education
│   │       └── ContactSection.tsx      # Contact form
│   │
│   ├── 📁 components/                  # Shared/reusable components
│   │   ├── Header.tsx                  # Navigation bar (fixed top)
│   │   ├── Footer.tsx                  # Footer with social links
│   │   └── 📁 ui/
│   │       ├── AppImage.tsx            # Smart image component
│   │       ├── AppIcon.tsx             # Icon component
│   │       └── AppLogo.tsx             # Logo component
│   │
│   ├── 📁 data/
│   │   └── portfolioData.ts            # ⭐ SAARA DATA EK JAGAH — skills, projects, etc.
│   │
│   └── 📁 styles/
│       ├── tailwind.css                # Global CSS + custom animations
│       └── index.css                   # Base CSS (modify mat karo)
│
├── next.config.mjs                     # Next.js configuration
├── tailwind.config.js                  # Tailwind theme configuration
├── tsconfig.json                       # TypeScript configuration
├── package.json                        # Dependencies & scripts
└── .env                                # Environment variables (secret keys)
```

---

## 🔍 How It Works — Page by Page

### 1. 🏠 Entry Point: `src/app/page.tsx`

Yeh poori website ka **main file** hai. Yahan saare sections ek saath import aur render hote hain:

```tsx
// src/app/page.tsx
import Header from '@/components/Header';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
// ... aur baaki sections

export default function HomePage() {
  return (
    <>
      <Header />           {/* ← Fixed navigation bar */}
      <main>
        <HeroSection />    {/* ← Section 1: Intro */}
        <AboutSection />   {/* ← Section 2: About */}
        <SkillsSection />  {/* ← Section 3: Skills */}
        <ProjectsSection />{/* ← Section 4: Projects */}
        <ExperienceSection />{/* ← Section 5: Experience */}
        <ContactSection /> {/* ← Section 6: Contact */}
      </main>
      <Footer />           {/* ← Bottom footer */}
    </>
  );
}
```

> 💡 **Samajhne ki baat:** Yeh ek hi page hai. Koi alag URL nahi hai `/about`, `/skills` etc. Sab ek hi page par scroll hota hai.

---

### 2. 🧭 Header (`src/components/Header.tsx`)

Header **fixed** hai — matlab scroll karne par bhi upar hi rehta hai.

**Kya karta hai:**
- Scroll detect karta hai → background blur effect add karta hai (glassmorphism)
- Active section highlight karta hai (jab About section dikhta hai, "About" nav link highlight hota hai)
- Mobile par hamburger menu dikhata hai
- Smooth scroll — kisi link par click karo, section smoothly scroll hota hai

```
Desktop View:
┌──────────────────────────────────────────────────────┐
│  [Raj Logo]   About  Skills  Projects  Experience  [Hire Me] │
└──────────────────────────────────────────────────────┘

Mobile View:
┌──────────────────────────────────────────────────────┐
│  [Raj Logo]                                    [☰]   │
└──────────────────────────────────────────────────────┘
         ↓ (hamburger click karne par)
┌──────────────────────────────────────────────────────┐
│  About                                               │
│  Skills                                              │
│  Projects                                            │
│  Experience                                          │
│  Contact                                             │
│  [Hire Me]                                           │
└──────────────────────────────────────────────────────┘
```

**Code logic:**
```tsx
// Scroll detect karna
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);  // 40px scroll hone par background change
  };
  window.addEventListener('scroll', handleScroll);
}, []);
```

---

### 3. 🎯 Hero Section (`src/app/components/HeroSection.tsx`)

Yeh **pehla section** hai jo user dekhta hai. Isme hai:

- **Animated particle background** — Canvas API se bane moving dots aur lines
- **Profile photo** — Rotating gradient ring ke saath
- **Name & title** — "Raj Omre — Full-Stack Developer"
- **CTA Buttons** — "View My Work" aur "Download Resume"
- **Social links** — GitHub, LinkedIn, Instagram, Email

**Particle Animation kaise kaam karta hai:**
```tsx
// Canvas par 60 particles banate hain
const particles = Array.from({ length: 60 }, () => ({
  x: Math.random() * width,   // Random position
  y: Math.random() * height,
  vx: (Math.random() - 0.5) * 0.4,  // Random velocity
  vy: (Math.random() - 0.5) * 0.4,
}));

// Har frame mein particles move karte hain
// Agar 2 particles 120px ke andar hain → unke beech line draw karo
```

```
┌─────────────────────────────────────────────────────┐
│  ·  ·    ·                          ╭──────────╮    │
│    ·  ·     Available for work      │  [Photo] │    │
│  ·                                  │          │    │
│         Hi, I'm                     ╰──────────╯    │
│         Raj Omre                                    │
│         ─── Full-Stack Developer                    │
│                                                     │
│         I build modern, responsive web apps...      │
│                                                     │
│         [View My Work →]  [↓ Download Resume]       │
│                                                     │
│         [GitHub] [LinkedIn] [Instagram] [Email]     │
└─────────────────────────────────────────────────────┘
```

---

### 4. 👤 About Section (`src/app/components/AboutSection.tsx`)

Apne baare mein information + animated stats counter.

**Stats Counter kaise kaam karta hai:**
```tsx
// Jab section screen par aata hai, counter animate hota hai
// 0 se target number tak smooth animation
function CountUp({ target, suffix, active }) {
  const [val, setVal] = useState(0);
  
  useEffect(() => {
    if (!active) return;
    // requestAnimationFrame se smooth counting
    const step = (now) => {
      const progress = (now - start) / 1400;  // 1.4 second animation
      setVal(Math.floor(eased * target));
    };
  }, [active, target]);
  
  return <span>{val}{suffix}</span>;  // "2+", "8+" etc.
}
```

```
┌──────────────────────────────────────────────────────┐
│  01 / About                                          │
│  The developer behind the code                       │
│                                                      │
│  ┌─────────────────┐   ┌──────────────────────────┐  │
│  │   [Code Image]  │   │  Who I am                │  │
│  │                 │   │  I'm a web developer...  │  │
│  ├────┬────┬───────┤   │                          │  │
│  │ 2+ │ 2+ │  8+   │   │  Career Highlights       │  │
│  │Proj│Yrs │ Tech  │   │  • Built Management...   │  │
│  └────┴────┴───────┘   │                          │  │
│                        │  Education               │  │
│                        │  Diploma in CS           │  │
│                        └──────────────────────────┘  │
└──────────────────────────────────────────────────────┘
```

---

### 5. 💡 Skills Section (`src/app/components/SkillsSection.tsx`)

Skills ko categories mein dikhata hai with animated progress bars.

**Skills data `portfolioData.ts` se aata hai:**
```ts
{ name: 'HTML5', proficiency: 90, category: 'Frontend' }
{ name: 'ReactJS', proficiency: 82, category: 'Frontend' }
{ name: 'SQL', proficiency: 82, category: 'Backend' }
```

```
┌──────────────────────────────────────────────────────┐
│  HTML5          ████████████████████░░  90%          │
│  CSS3           ███████████████████░░░  88%          │
│  JavaScript     ██████████████████░░░░  85%          │
│  ReactJS        █████████████████░░░░░  82%          │
│  C#             █████████████████░░░░░  80%          │
│  SQL            █████████████████░░░░░  82%          │
└──────────────────────────────────────────────────────┘
```

---

### 6. 🗂️ Projects Section (`src/app/components/ProjectsSection.tsx`)

Project cards with image, description, tech tags, aur links.

```
┌──────────────────────────────────────────────────────┐
│  ┌─────────────────────┐  ┌─────────────────────┐   │
│  │   [Project Image]   │  │   [Project Image]   │   │
│  │                     │  │                     │   │
│  │  Management System  │  │  Portfolio          │   │
│  │  A comprehensive... │  │  A modern...        │   │
│  │                     │  │                     │   │
│  │  [ASP.Net][C#][SQL] │  │  [React][HTML][CSS] │   │
│  │  [GitHub] [Live ↗]  │  │  [GitHub] [Live ↗]  │   │
│  └─────────────────────┘  └─────────────────────┘   │
└──────────────────────────────────────────────────────┘
```

---

### 7. 📅 Experience Section (`src/app/components/ExperienceSection.tsx`)

Timeline format mein work experience aur education dikhata hai.

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  2023 — Present                                      │
│  ●────────────────────────────────────────────────   │
│  │  Web Developer                                   │
│  │  Freelance / Self-Employed                       │
│  │  Building web applications...                    │
│  │                                                  │
│  2021 — 2023                                        │
│  ●────────────────────────────────────────────────   │
│     Diploma in Computer Science                     │
│     Polytechnic Institute                           │
│     Completed Diploma...                            │
│                                                     │
└──────────────────────────────────────────────────────┘
```

---

### 8. 📬 Contact Section (`src/app/components/ContactSection.tsx`)

Contact form with name, email, aur message fields.

---

### 9. 🦶 Footer (`src/components/Footer.tsx`)

- Logo + "Raj" branding
- Navigation links
- Social media icons (GitHub, LinkedIn, Instagram, Email)
- Copyright text
- "Back to top" button

---

## 📊 Data Flow — Ek jagah se poora data

**Sabse important file:** `src/data/portfolioData.ts`

Yahan **saara content** define hota hai. Agar aapko kuch change karna ho (skills, projects, experience), sirf yeh file edit karo:

```ts
// src/data/portfolioData.ts

// ✅ Skills change karne ke liye
export const skills = [
  { name: 'HTML5', icon: 'CodeBracketSquareIcon', proficiency: 90, category: 'Frontend' },
  { name: 'ReactJS', icon: 'CodeBracketIcon', proficiency: 82, category: 'Frontend' },
  // ... aur add karo
];

// ✅ Projects change karne ke liye
export const projects = [
  {
    id: 1,
    title: 'Management System',
    description: 'A comprehensive management system...',
    image: 'https://...',
    tags: ['ASP.Net Core MVC', 'C#', 'SQL'],
    github: '#',
    live: '#'
  },
];

// ✅ Experience change karne ke liye
export const experiences = [
  {
    date: '2023 — Present',
    title: 'Web Developer',
    organization: 'Freelance',
    type: 'work'  // 'work' ya 'education'
  },
];

// ✅ Social links change karne ke liye
export const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yourname', icon: 'github' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourname', icon: 'linkedin' },
];

// ✅ Navigation links
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  // ...
];
```

**Data flow diagram:**
```
portfolioData.ts
      │
      ├──→ Header.tsx (navLinks)
      ├──→ HeroSection.tsx (socialLinks)
      ├──→ AboutSection.tsx (stats)
      ├──→ SkillsSection.tsx (skills)
      ├──→ ProjectsSection.tsx (projects)
      ├──→ ExperienceSection.tsx (experiences)
      └──→ Footer.tsx (socialLinks, navLinks)
```

---

## 🎨 Styling System

### Color Theme (`src/styles/tailwind.css`)

Saare colors **CSS Variables** se define hote hain:

```css
:root {
  --background: #050505;      /* Almost black background */
  --foreground: #ffffff;      /* White text */
  --primary: #ff1e1e;         /* Red accent color */
  --primary-foreground: #fff; /* Text on red buttons */
  --muted-foreground: #a8a8a8;/* Gray text */
  --card: #111111;            /* Card background */
  --border: rgba(255,30,30,0.25); /* Red-tinted borders */
}
```

**Color change karna ho to:**
```css
/* Sirf yeh value change karo */
--primary: #ff1e1e;  /* Red → Blue ke liye: #1e6fff */
```

### Tailwind Config (`tailwind.config.js`)

```js
theme: {
  extend: {
    colors: {
      primary: 'var(--primary)',  // CSS variable se connect
      background: 'var(--background)',
    },
    fontFamily: {
      sans: ['var(--font-plus-jakarta)', 'sans-serif'],
    }
  }
}
```

---

## ✨ Animations & Effects

### 1. Entry Animations (Hero Section)
```css
/* Elements ek ek karke appear hote hain */
.anim-in-1 { animation: animationIn 0.8s ease-out 0.1s both; }  /* 0.1s delay */
.anim-in-2 { animation: animationIn 0.8s ease-out 0.25s both; } /* 0.25s delay */
.anim-in-3 { animation: animationIn 0.8s ease-out 0.45s both; } /* 0.45s delay */

/* Animation: neeche se upar aata hai + blur se clear hota hai */
@keyframes animationIn {
  0%   { opacity: 0; transform: translateY(30px); filter: blur(8px); }
  100% { opacity: 1; transform: translateY(0);    filter: blur(0px); }
}
```

### 2. Scroll Reveal (Baaki sections)
```css
/* Jab section screen par aata hai, tab visible hota hai */
.reveal { opacity: 0; transform: translateY(32px); }
.reveal.visible { opacity: 1; transform: translateY(0); }
```

JavaScript mein `IntersectionObserver` use hota hai:
```tsx
// Jab element screen par 15% visible ho, 'visible' class add karo
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  },
  { threshold: 0.15 }
);
```

### 3. Glassmorphism Effect
```css
/* Frosted glass effect */
.glass {
  background: rgba(17, 17, 17, 0.7);
  backdrop-filter: blur(16px);  /* Background blur */
  border: 1px solid rgba(255, 30, 30, 0.15);
}
```

### 4. Red Glow Effect
```css
.glow-red {
  box-shadow: 0 0 20px rgba(255, 30, 30, 0.4),
              0 0 60px rgba(255, 30, 30, 0.15);
}
```

### 5. Particle Canvas (Hero Background)
- 60 moving dots
- Dots ke beech lines draw hoti hain agar distance < 120px
- `requestAnimationFrame` se smooth 60fps animation

---

## 📱 Responsive Design

Yeh website **mobile-first** design follow karta hai:

| Screen Size | Breakpoint | Layout |
|---|---|---|
| Mobile | `< 768px` | Single column, hamburger menu |
| Tablet | `md: 768px+` | Desktop nav dikhta hai |
| Laptop | `lg: 1024px+` | Two-column layouts |
| Desktop | `xl: 1280px+` | Full wide layout |

**Example — Hero Section:**
```tsx
// Mobile: column layout
// Desktop (lg): row layout
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
  <div className="flex-1">  {/* Text — pehle mobile par */}
  <div className="flex-shrink-0">  {/* Photo — baad mein */}
```

---

## 💻 How to Run Locally

### Prerequisites
- Node.js 18+ installed hona chahiye
- npm ya yarn

### Steps

```bash
# 1. Project clone karo (ya download karo)
git clone <your-repo-url>
cd portfoliox

# 2. Dependencies install karo
npm install

# 3. Development server start karo
npm run dev

# 4. Browser mein open karo
# http://localhost:4028
```

---

## 📦 Available Scripts

```bash
npm run dev        # Development server start karo (port 4028)
npm run build      # Production build banao
npm run start      # Production server start karo
npm run lint       # Code quality check karo
npm run lint:fix   # Auto-fix lint issues
npm run format     # Code format karo (Prettier)
npm run type-check # TypeScript errors check karo
```

---

## 📄 File-by-File Guide

### `src/app/layout.tsx` — Root Layout
- Font load karta hai (Plus Jakarta Sans from Google)
- HTML `<head>` metadata set karta hai (title, description)
- Saare pages ko wrap karta hai

### `src/app/page.tsx` — Main Page
- Saare sections ko import aur render karta hai
- Yeh single page hai

### `src/data/portfolioData.ts` — Data Store
- **Sabse important file** content ke liye
- Skills, projects, experience, social links — sab yahan
- TypeScript interfaces define hain (type safety)

### `src/components/Header.tsx` — Navigation
- Fixed top navigation
- Scroll detection
- Mobile hamburger menu
- Active section highlighting

### `src/components/Footer.tsx` — Footer
- Social media links
- Navigation links
- Copyright
- Back to top button

### `src/components/ui/AppImage.tsx` — Smart Image
- Next.js `<Image>` component wrapper
- Fallback image handle karta hai
- Lazy loading automatic

### `src/components/ui/AppLogo.tsx` — Logo Component
- Icon + text logo
- Header aur Footer mein use hota hai

### `tailwind.config.js` — Tailwind Config
- Custom colors (CSS variables se)
- Custom fonts
- Border radius
- Plugins

### `src/styles/tailwind.css` — Global Styles
- CSS Variables (colors, spacing)
- Custom animations
- Glassmorphism classes
- Glow effects
- Progress bar styles
- Particle canvas styles

---

## 🔧 Common Customizations

### Apna naam change karna
```tsx
// src/app/components/HeroSection.tsx
<h1>Raj <span>Omre</span></h1>

// src/components/Header.tsx
<span>Raj</span>

// src/components/Footer.tsx
<span>Raj</span>
```

### Skill add karna
```ts
// src/data/portfolioData.ts
export const skills = [
  // ... existing skills
  { name: 'Python', icon: 'CodeBracketIcon', proficiency: 75, category: 'Language' },
];
```

### Project add karna
```ts
// src/data/portfolioData.ts
export const projects = [
  // ... existing projects
  {
    id: 3,
    title: 'My New Project',
    description: 'Project description here...',
    image: 'https://your-image-url.com/image.jpg',
    imageAlt: 'Project screenshot description',
    tags: ['React', 'Node.js'],
    github: 'https://github.com/yourname/project',
    live: 'https://your-project.com'
  },
];
```

### Primary color change karna
```css
/* src/styles/tailwind.css */
:root {
  --primary: #ff1e1e;  /* Yahan naya color dalo */
}
```

---

## 🏗️ Architecture Summary

```
User Browser
     │
     ▼
Next.js Server (SSR/SSG)
     │
     ▼
src/app/page.tsx  ←── Main entry point
     │
     ├── Header.tsx          (navLinks from portfolioData)
     │
     ├── HeroSection.tsx     (socialLinks from portfolioData)
     │       └── Canvas API (particle animation)
     │
     ├── AboutSection.tsx    (stats from portfolioData)
     │       └── IntersectionObserver (scroll reveal)
     │       └── requestAnimationFrame (counter animation)
     │
     ├── SkillsSection.tsx   (skills from portfolioData)
     │       └── Progress bar animations
     │
     ├── ProjectsSection.tsx (projects from portfolioData)
     │
     ├── ExperienceSection.tsx (experiences from portfolioData)
     │       └── Timeline layout
     │
     ├── ContactSection.tsx
     │       └── Form handling
     │
     └── Footer.tsx          (socialLinks, navLinks from portfolioData)
```

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Heroicons](https://heroicons.com)

---

Built with ❤️ on [Rocket.new](https://rocket.new)