"use client";

import { ReactTyped } from "react-typed";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background blobs for artsy feel */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--accent-glow)] blur-[120px] rounded-full opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-500 blur-[100px] rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <div className="lg:col-span-4 relative order-first lg:order-last">
          <div className="relative z-10 p-2 glass-panel rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="images/me.jpg"
              alt="Ryan Carroll"
              className="w-full h-auto object-cover rounded-xl grayscale-[50%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <div className="lg:col-span-8 glass-panel p-8 md:p-12 rounded-3xl relative z-10 backdrop-blur-3xl border-opacity-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-[family-name:var(--font-syne)] leading-tight">
            My name is Ryan, <br /> I'm {" "}
            <span className="text-[var(--accent-primary)] border-b-2 border-[var(--accent-primary)]">
              <ReactTyped
                strings={[
                  "an adventurer",
                  "a tea-enthusiast",
                  "a backpacker",
                  "プログラマ",
                  "a traveler",
                  "a problem solver",
                  "プログラマ",
                  "a software engineer",
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
              />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-light">
            I'm so glad you've taken the time to pay me a visit. I love putting
            software and technology to work solving fun and interesting problems
            both at work and in my personal life. I believe that tackling problems
            with technology can be a fun and rewarding experience. I have been a
            full-stack software engineer for over 8 years working primarily with
            APIs and web stacks. When I'm not coding, you can find me enjoying the
            peace and grounding of the great outdoors hiking, camping, and
            kayaking.
          </p>
        </div>
      </div>
    </section>
  );
}
