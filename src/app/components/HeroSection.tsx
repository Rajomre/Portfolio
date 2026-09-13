'use client';
import  { useState } from 'react';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { socialLinks } from '@/data/portfolioData';
 import {  } from 'react';


const SocialIcon = ({ icon, name }: {icon: string;name: string;}) => {
  const icons: Record<string, React.ReactNode> = {
    github:
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>,

    linkedin:
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>,

    instagram:
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>,

    email:
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>

  };
  return <span aria-label={name}>{icons[icon]}</span>;
};

export default function HeroSection() {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particle grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    interface Particle {
      x: number;y: number;
      vx: number;vy: number;
      r: number;alpha: number;
    }

    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * (w || 1200),
      y: Math.random() * (h || 800),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,30,30,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,30,30,${p.alpha})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
      aria-label="Hero">
      
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="particle-canvas"
        aria-hidden="true" />
      

      {/* Ambient blobs */}
      <div
        className="blob-red absolute w-[600px] h-[600px] -top-32 -left-32 opacity-60"
        aria-hidden="true" />
      
      <div
        className="blob-red absolute w-[400px] h-[400px] bottom-0 right-0 opacity-40"
        aria-hidden="true" />
      

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80"
        aria-hidden="true" />
      

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-24 pt-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left: Text content */}
          <div className="flex-1 flex flex-col items-start gap-6 text-left">
            {/* Greeting tag */}
            <div className="anim-in-1 flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Available for work
              </span>
            </div>

            {/* Name + role */}
            <div className="anim-in-2">
              <p className="text-base font-medium text-muted-foreground mb-2">
                Hi, I&apos;m
              </p>
              <h1 className="hero-name font-extrabold text-foreground tracking-tight">
                Raj{' '}
                <span className="text-gradient-red">Omre</span>
              </h1>
              <div className="mt-3 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" aria-hidden="true" />
                <p className="text-lg font-semibold text-muted-foreground tracking-wide">
                  Full-Stack Developer &amp; UI Engineer
                </p>
              </div>
            </div>

            {/* Bio */}
            <p className="anim-in-3 text-base text-muted-foreground leading-relaxed max-w-lg">
              I build{' '}
              <span className="text-foreground font-semibold">modern, responsive</span>{' '}
              web applications using{' '}
              <span className="text-primary font-semibold">ReactJS, ASP.Net Core MVC</span>{' '}
              and{' '}
              <span className="text-foreground font-semibold">SQL</span>.
              Diploma in Computer Science with hands-on experience in full-stack development.
            </p>

            {/* CTA Buttons */}
            <div className="anim-in-4 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-accent transition-all duration-200 glow-red-sm hover:glow-red flex items-center gap-2 text-sm"
                aria-label="View my work">
                
                View My Work
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="/assets/RAJ.pdf"
                download
                className="px-7 py-3 border border-primary/50 text-primary font-semibold rounded-md hover:bg-primary/10 transition-all duration-200 text-sm flex items-center gap-2"
                aria-label="Download resume">
                
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Social icons */}
            <div className="anim-in-5 flex items-center gap-3">
              {socialLinks.map((s) =>
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-200">
                
                  <SocialIcon icon={s.icon} name={s.name} />
                </a>
              )}
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto mx-auto">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="profile-ring"
                style={{ width: 260, height: 260 }}
                aria-hidden="true">
                
                <div
                  className="w-full h-full rounded-full overflow-hidden"
                  style={{ padding: 4 }}>
                  
                  <div className="w-full h-full rounded-full overflow-hidden bg-card">
                    <div
                      onMouseEnter={() => setIsImageHovered(true)}
                      onMouseLeave={() => setIsImageHovered(false)}
                      className="relative">
                      <AppImage
                        src="/assets/images/profile pic.jpeg"
                        alt="Raj Omre — web developer portrait, professional headshot"
                        width={252}
                        height={252}
                        priority
                        className={`w-full h-full object-cover rounded-full transition-all duration-300 ${
                          isImageHovered ? 'scale-125 shadow-2xl' : ''
                        }`}
                      />
                      
                      
                    </div>
    </div>
                </div>
              </div>

              {/* Glow effect behind ring */}
              <div
                className="absolute inset-0 rounded-full glow-red opacity-50 pointer-events-none"
                aria-hidden="true" />
              

              {/* Floating badge */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-1.5 border border-primary/30 whitespace-nowrap"
                aria-hidden="true">
                
                <span className="text-xs font-semibold text-foreground">
                  Full Stack Developer
                </span>
              </div>
            </div>
          </div>
        </div>

         {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <svg
            width="10"
            height="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="text-primary"
            aria-hidden="true">
            
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}