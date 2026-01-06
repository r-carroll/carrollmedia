"use client";

import { motion } from 'framer-motion';
import BilingualHeader from './bilingual_header';
import { AiOutlineRuby } from "react-icons/ai";
import { FaAngular, FaAws, FaChartArea, FaDocker, FaGithub, FaJava, FaJenkins, FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { SiConcourse, SiDatabricks, SiDatadog, SiExpo, SiGrafana, SiKubernetes, SiNewrelic, SiNumpy, SiOracle, SiSplunk } from "react-icons/si";
import { DiPostgresql, DiSpark, DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

const SKILL_ROWS = [
  [
    { name: "React", icon: FaReact },
    { name: "Vue", icon: FaVuejs },
    { name: "Angular", icon: FaAngular },
    { name: "React Native", icon: FaReact },
    { name: "Expo", icon: SiExpo },
    { name: "Chart.js", icon: FaChartArea },
  ],
  [
    { name: "Python", icon: FaPython },
    { name: "Java", icon: FaJava },
    { name: "Ruby", icon: AiOutlineRuby },
    { name: "Postgres", icon: DiPostgresql },
    { name: "SQL Server", icon: DiMsqlServer },
    { name: "Oracle", icon: SiOracle },
    { name: "Spark", icon: DiSpark },
  ],
  [
    { name: "AWS", icon: FaAws },
    { name: "Azure", icon: VscAzure },
    { name: "Docker", icon: FaDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Jenkins", icon: FaJenkins },
    { name: "Datadog", icon: SiDatadog },
    { name: "Splunk", icon: SiSplunk },
  ]
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden flex flex-col justify-center min-h-[80vh]">
      <div className="absolute inset-0 bg-[var(--bg-primary)] z-0" />

      <div className="relative z-10 flex flex-col gap-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <BilingualHeader
            en="TECHNICAL ARSENAL"
            ja="技術"
            className="text-[var(--accent-primary)] text-sm tracking-[0.2em] uppercase font-bold"
          />
        </div>

        {SKILL_ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="flex relative overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: rowIndex % 2 === 0 ? [0, -1000] : [-1000, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20 + rowIndex * 5, // varied speeds
                  ease: "linear",
                },
              }}
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex">
                  {row.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group flex items-center mx-8 cursor-default"
                    >
                      <span className="text-6xl md:text-8xl font-[family-name:var(--font-syne)] font-bold uppercase transition-all duration-300 text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:1px_var(--accent-primary)] group-hover:text-[var(--accent-primary)] group-hover:blur-[0px] hover:scale-110">
                        {skill.name}
                      </span>
                      <skill.icon className="ml-6 text-4xl text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-[var(--accent-primary)]" />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Gradient fade to smooth transition into Resume video background */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-[var(--bg-primary)] to-transparent pointer-events-none z-20" />
    </section>
  );
}
