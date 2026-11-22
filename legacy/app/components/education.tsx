"use client";

import { motion } from "framer-motion";
import BilingualHeader from './bilingual_header';

const DEGREE = {
  school: "Western Governors University",
  credential: "M.S. Computer Science",
  focus: "Artificial Intelligence & Machine Learning",
  period: "2026"
};

const CERTIFICATIONS = [
  "AWS Certified Machine Learning – Specialty",
  "AWS Certified Cloud Practitioner",
  "Microsoft Certified: Azure Data Fundamentals",
  "Microsoft Certified: Azure AI Fundamentals",
  "CompTIA A+",
  "CompTIA Network+"
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-20">
        <BilingualHeader
          en="Education & Certifications"
          ja="学歴・資格"
          className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-syne)] text-[var(--text-primary)]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-8 md:p-12 rounded-3xl border border-[var(--glass-border)] hover:bg-white/5 transition-colors relative overflow-hidden group mb-8 md:mb-12"
      >
        {/* Accent colored glow effect on hover */}
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent blur-3xl rounded-full translate-x-32 -translate-y-32 group-hover:from-[var(--accent-primary)]/20 transition-colors duration-500"
        />

        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 relative z-10">
          <h3 className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-syne)] mb-2 md:mb-0 text-[var(--accent-primary)]">
            {DEGREE.school}
          </h3>
          <span className="text-sm md:text-lg font-mono text-[var(--text-secondary)] opacity-60">
            {DEGREE.period}
          </span>
        </div>

        <h4 className="text-xl md:text-2xl font-bold mb-2 text-[var(--text-primary)] relative z-10">
          {DEGREE.credential}
        </h4>
        <p className="text-lg text-[var(--text-secondary)] relative z-10">
          {DEGREE.focus}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-panel p-8 md:p-12 rounded-3xl border border-[var(--glass-border)]"
      >
        <span className="font-bold uppercase tracking-widest text-sm text-[var(--text-secondary)] opacity-50">
          Certifications
        </span>
        <ul className="list-none flex flex-wrap gap-3 mt-6">
          {CERTIFICATIONS.map((cert, i) => (
            <li
              key={i}
              className="px-5 py-3 rounded-full border border-[var(--glass-border)] text-[var(--text-secondary)] text-sm md:text-base hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)] transition-colors duration-300"
            >
              {cert}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
