"use client";

import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Resume() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const AccordionItem = ({ id, title, company, period, color, children }: { id: string, title: string, company: string, period: string, color: string, children: React.ReactNode }) => {
    const isExpanded = expanded === id;

    return (
      <div className="mb-4 glass-panel rounded-xl overflow-hidden border border-[var(--glass-border)] transition-all duration-300">
        <button
          onClick={() => setExpanded(isExpanded ? false : id)}
          className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 flex-grow">
            <span className="font-bold text-lg">{title}</span>
            <span className="text-[var(--text-secondary)] hidden md:inline">•</span>
            <span style={{ color }} className="font-semibold">{company}</span>
            <span className="text-[var(--text-secondary)] text-sm md:ml-auto">{period}</span>
          </div>
          <FaChevronDown
            className={`text-[var(--text-secondary)] transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="p-6 pt-0 text-[var(--text-secondary)]">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="resume" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center font-[family-name:var(--font-syne)]">
        Places I've built amazing things
      </h2>
      <div className="space-y-4">

        <AccordionItem
          id="panel1"
          title="Senior Software Engineer"
          company="@ CoverMyMeds"
          period="2022 - present"
          color="#e70865"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>Delivered research document and schema/data pipeline PoC for migrating on-prem data pipeline to Databricks with plan to increase data throughput by 50%</li>
            <li>Designed and built key product features improving customer stickiness 20%</li>
            <li>Rearchitected and rewrote a Vue application into React increasing performance benchmark by 30%</li>
            <li>Championed security, led efforts to bring application from acceptable to excellent security posture</li>
            <li>Migrated test environment to Azure-based ephemeral environment increasing local build performance by 30%</li>
            <li>Worked with data and analytics partners on cross-functional team to bring new data insights to customers</li>
          </ul>
        </AccordionItem>

        <AccordionItem
          id="panel2"
          title="Innovation Software Engineer"
          company="@ Nationwide Insurance"
          period="2021 - 2022"
          color="#4c97f8"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>Researched and implemented prototype blockchain solution using AWS Managed Blockchain and Hyperledger Fabric</li>
            <li>Architected and built new web application using AWS-native services (S3, CloudFront, CodePipeline, Dynamo, API Gateway)</li>
            <li>Coordinated development effort across companies for chatbot effort</li>
          </ul>
        </AccordionItem>

        <AccordionItem
          id="panel3"
          title="Software Engineer, Tech Lead"
          company="@ Nationwide Insurance"
          period="2019 - 2021"
          color="#4c97f8"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>Led development effort to migrate 13 microservices from PCF to AWS hosted Kubernetes with cost savings of 35%</li>
            <li>Maintained identity and authorization APIs (JTW and Oauth) handling over 500 requests per second</li>
            <li>Coached and mentored other teams on how to build, scale use APIs</li>
          </ul>
        </AccordionItem>

        <AccordionItem
          id="panel4"
          title="Senior Software Engineer"
          company="@ Nationwide Insurance"
          period="2017 - 2019"
          color="#4c97f8"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>Built suite of 13 Greenfield highly available Java/Spring Boot REST APIs</li>
            <li>Developed new responsive customer-facing websites using Angular</li>
          </ul>
        </AccordionItem>

        <AccordionItem
          id="panel5"
          title="Software Engineer"
          company="@ Nationwide Insurance"
          period="2016 - 2017"
          color="#4c97f8"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>Re-wrote outdated junits in Spock with mocked data</li>
            <li>Implemented new features and maintained large tier-1 spring boot application</li>
          </ul>
        </AccordionItem>

      </div>

      {/* Top gradient to smooth entry from black background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-[var(--bg-primary)] pointer-events-none opacity-80" />
    </section>
  )
}