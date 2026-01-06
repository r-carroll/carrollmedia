"use client";

import { motion } from "framer-motion";

const JOBS = [
  {
    company: "CoverMyMeds",
    role: "Senior Software Engineer",
    period: "2022 - present",
    color: "#e70865",
    details: [
      "Delivered research document and schema/data pipeline PoC for migrating on-prem data pipeline to Databricks with plan to increase data throughput by 50%",
      "Designed and built key product features improving customer stickiness 20%",
      "Rearchitected and rewrote a Vue application into React increasing performance benchmark by 30%",
      "Championed security, led efforts to bring application from acceptable to excellent security posture",
      "Migrated test environment to Azure-based ephemeral environment increasing local build performance by 30%",
      "Worked with data and analytics partners on cross-functional team to bring new data insights to customers"
    ]
  },
  {
    company: "Nationwide Insurance",
    role: "Innovation Software Engineer",
    period: "2021 - 2022",
    color: "#4c97f8",
    details: [
      "Researched and implemented prototype blockchain solution using AWS Managed Blockchain and Hyperledger Fabric",
      "Architected and built new web application using AWS-native services (S3, CloudFront, CodePipeline, Dynamo, API Gateway)",
      "Coordinated development effort across companies for chatbot effort"
    ]
  },
  {
    company: "Nationwide Insurance",
    role: "Software Engineer, Tech Lead",
    period: "2019 - 2021",
    color: "#4c97f8",
    details: [
      "Led development effort to migrate 13 microservices from PCF to AWS hosted Kubernetes with cost savings of 35%",
      "Maintained identity and authorization APIs (JTW and Oauth) handling over 500 requests per second",
      "Coached and mentored other teams on how to build, scale use APIs"
    ]
  },
  {
    company: "Nationwide Insurance",
    role: "Senior Software Engineer",
    period: "2017 - 2019",
    color: "#4c97f8",
    details: [
      "Built suite of 13 Greenfield highly available Java/Spring Boot REST APIs",
      "Developed new responsive customer-facing websites using Angular"
    ]
  },
  {
    company: "Nationwide Insurance",
    role: "Software Engineer",
    period: "2016 - 2017",
    color: "#4c97f8",
    details: [
      "Re-wrote outdated junits in Spock with mocked data",
      "Implemented new features and maintained large tier-1 spring boot application"
    ]
  }
];

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-4 max-w-5xl mx-auto relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center font-[family-name:var(--font-syne)] text-[var(--text-primary)]">
        Professional Experience
      </h2>

      <div className="flex flex-col gap-8 md:gap-12">
        {JOBS.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-panel p-8 md:p-12 rounded-3xl border border-[var(--glass-border)] hover:bg-white/5 transition-colors relative overflow-hidden group"
          >
            {/* Accent colored glow effect on hover */}
            <div
              className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent blur-3xl rounded-full translate-x-32 -translate-y-32 group-hover:from-[var(--accent-primary)]/20 transition-colors duration-500"
            />

            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 relative z-10">
              <h3
                className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-syne)] mb-2 md:mb-0"
                style={{ color: job.color === "#e70865" ? "var(--accent-primary)" : "var(--text-primary)" }}
              >
                {job.company}
              </h3>
              <span className="text-sm md:text-lg font-mono text-[var(--text-secondary)] opacity-60">
                {job.period}
              </span>
            </div>

            <h4 className="text-xl md:text-2xl font-bold mb-8 text-[var(--text-primary)] relative z-10">
              {job.role}
            </h4>

            <ul className="list-none space-y-4 text-[var(--text-secondary)] relative z-10">
              {job.details.map((detail, i) => (
                <li key={i} className="flex items-start text-lg leading-relaxed">
                  <span className="mr-4 mt-1.5 w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Top gradient to smooth entry from black background */}
      <div className="absolute -top-32 left-0 w-full h-64 bg-gradient-to-t from-transparent to-[var(--bg-primary)] pointer-events-none opacity-100 -z-10" />
    </section>
  );
}