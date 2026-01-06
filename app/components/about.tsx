"use client";

import { useRef } from 'react';
import { ReactTyped } from "react-typed";
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

function Word({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative inline-block mr-2">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

function Paragraph({ value }: { value: string }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"]
  });

  const words = value.split(" ");

  return (
    <p
      ref={element}
      className="text-lg md:text-3xl leading-relaxed font-bold flex flex-wrap max-w-4xl"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
      })}
    </p>
  );
}

export default function About() {
  const introText = "I'm so glad you've taken the time to pay me a visit. I love putting software and technology to work solving fun and interesting problems both at work and in my personal life. I believe that tackling problems with technology can be a fun and rewarding experience. I have been a full-stack software engineer for over 8 years working primarily with APIs and web stacks. When I'm not coding, you can find me enjoying the peace and grounding of the great outdoors hiking, camping, and kayaking.";

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-32 px-4 relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Background blobs for artsy feel */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--accent-glow)] blur-[120px] rounded-full opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-500 blur-[100px] rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        <div className="lg:col-span-4 relative order-first lg:order-last lg:sticky lg:top-32">
          <div className="relative z-10 p-2 glass-panel rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="images/me.jpg"
              alt="Ryan Carroll"
              className="w-full h-auto object-cover rounded-xl grayscale-[50%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <div className="lg:col-span-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 font-[family-name:var(--font-syne)] leading-tight text-[var(--text-primary)]">
            My name is Ryan, <br /> I'm {" "}
            <span className="text-[var(--accent-primary)]">
              <ReactTyped
                strings={[
                  "an adventurer",
                  "a tea-enthusiast",
                  "a backpacker",
                  "a backpacker",
                  "ソフトウェアエンジニア",
                  "a traveler",
                  "a problem solver",
                  "ソフトウェアエンジニア",
                  "a software engineer",
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
              />
            </span>
          </h2>

          <Paragraph value={introText} />
        </div>
      </div>
    </section>
  );
}
