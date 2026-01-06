"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  {
    title: "TRAVEL BINGO",
    category: "Mobile App",
    image: "images/portfolio/bingo-ad.jpeg",
    link: "https://apps.apple.com/us/app/travel-bingo-road-trip-bingo/id6479892388"
  },
  {
    title: "READING ANALYTICS",
    category: "Data Visualization",
    image: "images/portfolio/dash.png",
    link: "https://smallgroup.carrollmedia.dev/reading-tracker/"
  },
  {
    title: "NOISE DASHBOARD",
    category: "IoT Environment",
    image: "images/portfolio/db.png",
    link: "/decibel-meter" // Internal link
  },
  {
    title: "EUBANKS ELECTRIC",
    category: "Business Site",
    image: "images/portfolio/eubanks.JPG",
    link: "https://eubankselectric.com/"
  }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section
      id='projects'
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen py-32 px-4 relative flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <h2 className="text-[var(--accent-primary)] text-sm tracking-[0.2em] uppercase font-bold mb-16 text-center">Selected Works</h2>

        <div className="flex flex-col">
          {PROJECTS.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target={project.link.startsWith('/') ? undefined : "_blank"}
              className="group relative border-t border-[var(--glass-border)] py-12 flex items-center justify-between transition-colors hover:bg-white/5 px-6"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex flex-col">
                <h3 className="text-4xl md:text-7xl font-bold font-[family-name:var(--font-syne)] text-[var(--text-primary)] group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_white] transition-all duration-300">
                  {project.title}
                </h3>
                <span className="text-[var(--text-secondary)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {project.category}
                </span>
              </div>

              <span className="hidden md:inline-block text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors text-xl">
                →
              </span>
            </a>
          ))}
          <div className="border-t border-[var(--glass-border)]" />
        </div>
      </div>

      {/* Floating Image Reveal */}
      <AnimatePresence>
        {hoveredProject !== null && (
          <motion.div
            className="fixed pointer-events-none z-20 hidden md:block w-[400px] h-[250px] rounded-xl overflow-hidden shadow-2xl border border-[var(--glass-border)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePosition.x + 20, // Offset from cursor
              y: mousePosition.y - 125, // Center vertically on cursor
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            style={{
              position: 'absolute', // Position absolute relative to the section
              top: 0,
              left: 0
            }}
          >
            <img
              src={PROJECTS[hoveredProject].image}
              alt={PROJECTS[hoveredProject].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
