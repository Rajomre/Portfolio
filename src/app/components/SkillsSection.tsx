'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import { skills } from '@/data/portfolioData';
import type { Skill } from '@/data/portfolioData';

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          if (fillRef.current) {
            setTimeout(() => {
              if (fillRef.current) {
                fillRef.current.style.width = `${skill.proficiency}%`;
              }
            }, index * 80);
          }
        }
      },
      { threshold: 0.4 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [skill.proficiency, index]);

  return (
    <div
      ref={cardRef}
      className="glass rounded-xl p-5 border border-primary/10 hover:border-primary/50 transition-all duration-300 hover:glow-red-sm hover:-translate-y-1 group"
      role="article"
      aria-label={`${skill.name} — ${skill.proficiency}% proficiency`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon
            name={skill.icon as Parameters<typeof Icon>[0]['name']}
            size={20}
            className="text-primary"
          />
        </div>
        <span className="text-xs font-semibold text-muted-foreground bg-muted rounded-full px-2 py-0.5">
          {skill.category}
        </span>
      </div>

      <p className="font-semibold text-foreground text-sm mb-1">{skill.name}</p>
      <p className="text-xs text-muted-foreground mb-3">{skill.proficiency}% proficiency</p>

      <div className="progress-bar" role="progressbar" aria-valuenow={skill.proficiency} aria-valuemin={0} aria-valuemax={100}>
        <div
          ref={fillRef}
          className="progress-fill"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-24 bg-card/30 relative overflow-hidden"
      aria-label="Skills"
    >
      <div
        className="blob-red absolute w-[400px] h-[400px] bottom-0 left-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={sectionRef} className="reveal mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
             Skills
          </p>
          <h2 className="section-heading text-foreground">
            Technologies I{' '}
            <span className="text-gradient-red">work with</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            A curated set of tools and technologies I reach for when building products that scale.
          </p>
        </div>

        {/* Skills grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          aria-label="Skills grid"
        >
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}