"use client";

import { FaGithub } from "react-icons/fa";
import { LuPresentation } from "react-icons/lu";

export default function DecibelMeter() {
  const Button = ({ onClick, children }: { onClick: () => void, children: React.ReactNode }) => (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center px-6 py-3 m-2 min-w-[175px] bg-[var(--accent-primary)] hover:bg-[var(--accent-glow)] text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
    >
      {children}
    </button>
  );

  return (
    <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
      <div className="glass-panel p-8 rounded-3xl border border-[var(--glass-border)]">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-syne)] text-gradient">
          Bringing ideas to life with DIY IoT
        </h1>
        <p className="mb-6 text-xl text-[var(--text-secondary)]">Visualizing Noise Pollution</p>
        <p className="mb-8 text-[var(--text-secondary)] leading-relaxed text-left">
          Discover how to harness the power of IoT to tackle real-world problems
          using affordable and accessible technology. In this talk, you'll learn
          how to build an IoT system from off-the-shelf components, collect data
          from sensors, and visualize the data to tell compelling stories. In this
          talk I'll showcase a project where I used a Raspberry Pi, environmental
          sensor, and Python to measure and monitor noise levels. This project
          demonstrates how to design and implement an IoT solution from concept to
          deployment, including using InfluxDB and Grafana for real-time data
          visualization, all running in Docker. By the end of this talk, you'll
          have the skills to bring various pieces of technology together to solve
          real-world problems. Whether you're an enthusiast, developer, or
          researcher, this session will inspire you to apply open-source tools and
          inexpensive hardware in innovative ways to address the challenges in
          your every day life.
        </p>

        <div className="flex flex-wrap justify-center mb-8">
          <Button onClick={() => window.open('DIY-IoT.pdf', '_blank')}>
            <LuPresentation className="mr-2 text-xl" />
            View the slides
          </Button>
          <Button onClick={() => window.open("https://github.com/r-carroll/decibel-meter", "_blank")}>
            <FaGithub className="mr-2 text-xl" />
            GitHub
          </Button>
        </div>

        <img
          id="environmental"
          src="images/portfolio/db.png"
          alt="environmental noise dashboard"
          className="w-full h-auto rounded-xl shadow-2xl"
        />
      </div>
    </section>
  );
}
