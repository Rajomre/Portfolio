export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  category: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  github: string;
  live: string;
}

export interface Experience {
  id: number;
  date: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'education';
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const skills: Skill[] = [
{ name: 'HTML5', icon: 'CodeBracketSquareIcon', proficiency: 90, category: 'Frontend' },
{ name: 'CSS3', icon: 'SwatchIcon', proficiency: 88, category: 'Frontend' },
{ name: 'JavaScript', icon: 'BoltIcon', proficiency: 85, category: 'Language' },
{ name: 'ReactJS', icon: 'CodeBracketIcon', proficiency: 82, category: 'Frontend' },
{ name: 'C#', icon: 'CommandLineIcon', proficiency: 80, category: 'Language' },
{ name: 'Java', icon: 'ServerIcon', proficiency: 78, category: 'Language' },
{ name: 'ASP.Net Core MVC', icon: 'WindowIcon', proficiency: 80, category: 'Backend' },
{ name: 'SQL', icon: 'CircleStackIcon', proficiency: 82, category: 'Backend' }];


export const projects: Project[] = [
{
  id: 1,
  title: 'Management System',
  description:
  'A comprehensive management system built to streamline operations, track records, and manage data efficiently with a clean and intuitive interface.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12ab8ca84-1772594775760.png",
  imageAlt: 'Management system dashboard interface on dark screen, organized data tables and charts',
  tags: ['ASP.Net Core MVC', 'C#', 'SQL', 'JavaScript'],
  github: '#',
  live: '#'
},
{
  id: 2,
  title: 'Portfolio',
  description:
  'A modern, responsive personal portfolio website showcasing projects, skills, and experience with a sleek red-and-black design system.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16ca14300-1785100740852.png",
  imageAlt: 'Personal portfolio website on dark screen with red accent design, professional layout',
  tags: ['ReactJS', 'HTML5', 'CSS3', 'JavaScript'],
  github: '#',
  live: '#'
}];


export const experiences: Experience[] = [
{
  id: 1,
  date: '2022 — 2024',
  title: 'Compeleted Intermediate',
  organization: 'S.R Inter College Orai',
  description:
  'Completed Intermediate education with strong academic foundation,preparing for further studies in computer science',
  type: 'education'
},
{
  id: 2,
  date: '2024 — 2027',
  title: 'Diploma in Computer Science',
  organization: 'Polytechnic Institute',
  description:
  'Pursing Diploma in Computer Science with focus on programming fundamentals, web development, database management, and software engineering principles.',
  type: 'education'
}];


export const stats: Stat[] = [
{ value: 2, suffix: '+', label: 'Projects Completed' },
{ value: 2, suffix: '+', label: 'Years Experience' },
{ value: 8, suffix: '+', label: 'Technologies Used' }];


export const socialLinks: SocialLink[] = [
{ name: 'GitHub', href: '#', icon: 'github' },
{ name: 'LinkedIn', href: '#', icon: 'linkedin' },
{ name: 'Instagram', href: '#', icon: 'instagram' },
{ name: 'Email', href: 'mailto:raj.omre@email.com', icon: 'email' }];


export const navLinks = [
{ label: 'About', href: '#about' },
{ label: 'Skills', href: '#skills' },
{ label: 'Projects', href: '#projects' },
{ label: 'Experience', href: '#experience' },
{ label: 'Contact', href: '#contact' }];