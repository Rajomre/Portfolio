'use client';

import React, { useEffect, useRef } from 'react';
import { experiences } from '@/data/portfolioData';

export default function ExperienceSection() {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const items = listRef?.current?.querySelectorAll<HTMLElement>('.timeline-item');
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    items?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="py-24 bg-card/20 relative overflow-hidden"
      aria-label="Experience and Education"
    >
      <div
        className="blob-red absolute w-[400px] h-[400px] top-1/2 left-0 -translate-y-1/2 opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className=" mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            Experience
          </p>
          <h2 className="section-heading text-foreground">
            My{' '}
            <span className="text-gradient-red">journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <ol ref={listRef} className="relative" aria-label="Career and education timeline">
          {/* Connecting line */}
          <div
            className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent"
            aria-hidden="true"
          />

          {experiences?.map((exp, i) => (
            <li
              key={exp?.id}
              className="timeline-item reveal relative flex gap-6 pb-12 last:pb-0"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Dot */}
              <div className="relative z-10 flex-shrink-0 mt-1">
                <div className="timeline-dot" aria-hidden="true" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="glass rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:glow-red-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        exp?.type === 'work' ? 'bg-primary/10 text-primary' :'bg-muted text-muted-foreground'
                      }`}
                    >
                      { exp?.type === 'work' ? (
                        <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20 7h-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zm-6-2v2h-4V5h4z" />
                        </svg>
                      ) : (
                        <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      )}
                      {exp?.type === 'work' ? 'Intership' : 'Education'}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">{exp?.date}</span>
                  </div>

                  <h3 className="font-bold text-foreground text-base mb-1">{exp?.title}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{exp?.organization}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp?.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}