'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { projects } from '@/data/portfolioData';

export default function ProjectsSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef?.current?.querySelectorAll<HTMLElement>('.project-card');
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cards?.forEach((c) => observer?.observe(c));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
      aria-label="Projects"
    >
      <div
        className="blob-red absolute w-[500px] h-[500px] top-0 right-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className=" mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
             Projects
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="section-heading text-foreground">
              Things I&apos;ve{' '}
              <span className="text-gradient-red">built</span>
            </h2>
            <a
              
                href="https://github.com/Rajomre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:text-accent transition-colors flex items-center gap-1.5"
                aria-label="View all projects on GitHub"
               >
            
              View all on GitHub
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Projects grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects?.map((project, i) => (
            <article
              key={project?.id}
              className="project-card reveal glass rounded-xl overflow-hidden border border-primary/10 card-red-top hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
              aria-label={project?.title}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <AppImage
                  src={project?.image}
                  alt={project?.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="font-bold text-foreground text-base">{project?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project?.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {project?.tags?.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={project?.github}
                    target="_blank"
                      rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${project?.title} GitHub repository`}
                  >
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C8.422 9.567 7.633 9.2 7.633 9.2c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>

                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}