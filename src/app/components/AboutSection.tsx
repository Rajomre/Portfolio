'use client';

import React, { useEffect, useRef, useState } from 'react';
import { stats } from '@/data/portfolioData';
import AppImage from '@/components/ui/AppImage';

function CountUp({ target, suffix, active }: {target: number;suffix: string;active: boolean;}) {
  const [val, setVal] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target]);

  return (
    <span>
      {val}
      {suffix}
    </span>);

}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const els: NodeListOf<HTMLElement> = document.querySelectorAll('.reveal, .reveal-stagger');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));

    // Stats counter trigger
    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true);
          statsObserver.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) statsObserver.observe(statsRef.current);

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      aria-label="About">
      
      {/* Background accent */}
      <div
        className="blob-red absolute w-[500px] h-[500px] top-0 right-0 opacity-30 pointer-events-none"
        aria-hidden="true" />
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="reveal mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            01 / About
          </p>
          <h2 className="section-heading text-foreground">
            The developer behind the{' '}
            <span className="text-gradient-red">code</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Bio + image */}
          <div className="reveal flex flex-col gap-8">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_178ed799d-1785088751486.png"
                alt="Code editor on screen with dark background, deep shadows, atmospheric developer workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 glass rounded-lg px-4 py-2 border border-primary/20">
                <span className="text-xs font-semibold text-foreground">San Francisco, CA</span>
              </div>
            </div>

            {/* Stat cards */}
            <div
              ref={statsRef}
              className="reveal-stagger grid grid-cols-3 gap-3"
              aria-label="Career statistics">
              
              {stats.map((s) =>
              <div
                key={s.label}
                className="glass rounded-xl p-4 text-center border border-primary/15 hover:border-primary/40 transition-all duration-300 hover:glow-red-sm">
                
                  <p className="text-2xl font-extrabold text-primary leading-none mb-1">
                    <CountUp target={s.value} suffix={s.suffix} active={statsActive} />
                  </p>
                  <p className="text-xs text-muted-foreground leading-tight">{s.label}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Bio text + career + education */}
          <div className="reveal-stagger flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Who I am</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I&apos;m a web developer with a{' '}
                <span className="text-foreground font-medium">Diploma in Computer Science</span>,
                passionate about building modern, responsive web applications. My work spans
                both frontend and backend development with a focus on{' '}
                <span className="text-primary font-medium">clean code</span> and{' '}
                <span className="text-foreground font-medium">practical solutions</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I work with technologies like ReactJS, ASP.Net Core MVC, C#, Java, and SQL to
                build full-stack applications. I enjoy turning complex problems into simple,
                elegant solutions that users love to interact with.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-primary" aria-hidden="true" />
                Career Highlights
              </h3>
              <ul className="space-y-3">
                {[
                'Built a Management System with ASP.Net Core MVC and SQL',
                'Developed a personal Portfolio using ReactJS and modern web technologies',
                'Proficient in both frontend (HTML, CSS3, JS, ReactJS) and backend (C#, Java, ASP.Net)',
                'Strong foundation in database design and SQL query optimization'].
                map((item) =>
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-primary" aria-hidden="true" />
                Education
              </h3>
              <div className="glass rounded-xl p-5 border border-primary/15">
                <p className="font-semibold text-foreground text-sm">Diploma in Computer Science</p>
                <p className="text-primary text-xs font-medium mt-0.5">Polytechnic Institute</p>
                <p className="text-muted-foreground text-xs mt-1">2021 – 2023 · Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}