"use client";

import { Accordion, AccordionSummary, Typography, AccordionDetails, ThemeProvider, createTheme } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";

export default function Resume() {

  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
    <h2 id="resume" className="text-2xl font-bold mt-6 mb-6 text-center">Places I've built amazing things</h2><div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backgroundColor: "black", color: "white", border: "2px", borderColor: "grey" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: "bold" }}>
            Senior Software Engineer
          </Typography>
          <Typography sx={{color: "#e70865"}}>@ CoverMyMeds</Typography>
          <Typography style={{ marginLeft: "10px" }}>2022 - present</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul className="list-disc px-5">
          <li className="py-3">Delivered research document and schema/data pipeline PoC for migrating on-prem data pipeline to Databricks with plan to increase data throughput by 50%</li>
          <li>Designed and built key product features improving customer stickiness 20%</li>
          <li>Rearchitected and rewrote a Vue application into React increasing performance benchmark by 30%</li>
          <li>Championed security, led efforts to bring application from acceptable to excellent security posture</li>
          <li>Migrated test environment to Azure-based ephemeral environment increasing local build performance by 30%</li>
          <li>Worked with data and analytics partners on cross-functional team to bring new data insights to customers </li>
        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ backgroundColor: "black", color: "white", border: "2px", borderColor: "grey" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: "bold" }}>
            Innovation Software Engineer
          </Typography>
          <Typography sx={{color: "#69a2ff"}}>@ Nationwide Insurance</Typography>
          <Typography style={{ marginLeft: "10px" }}>2021 - 2022</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul className="list-disc px-5">
          <li className="py-3">Researched and implemented prototype blockchain solution using AWS Managed Blockchain and Hyperledger Fabric</li>
          <li>Architected and built new web application using AWS-native services (S3, CloudFront, CodePipeline, Dynamo, API Gateway)</li>
          <li>Coordinated development effort across companies for chatbot effort</li>
        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ backgroundColor: "black", color: "white", border: "2px", borderColor: "grey" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: "bold" }}>
            Software Engineer, Tech Lead
          </Typography>
          <Typography sx={{color: "#69a2ff"}}>@ Nationwide Insurance</Typography>
          <Typography style={{ marginLeft: "10px" }}>2019 - 2021</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul className="list-disc px-5">
          <li className="py-3">Led development effort to migrate 13 microservices from PCF to AWS hosted Kubernetes with cost savings of 35%</li>
          <li>Maintained identity and authorization APIs (JTW and Oauth) handling over 500 requests per second</li>
          <li>Coached and mentored other teams on how to build, scale use APIs</li>
        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ backgroundColor: "black", color: "white", border: "2px", borderColor: "grey" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: "bold" }}>
            Senior Software Engineer
          </Typography>
          <Typography sx={{color: "#69a2ff"}}>@ Nationwide Insurance</Typography>
          <Typography style={{ marginLeft: "10px" }}>2017 - 2019</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul className="list-disc px-5">
          <li className="py-3">Built suite of 13 Greenfield highly available Java/Spring Boot REST APIs</li>
          <li>Developed new responsive customer-facing websites using Angular</li>
        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{ backgroundColor: "black", color: "white", border: "2px", borderColor: "grey" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: "bold" }}>
            Software Engineer
          </Typography>
          <Typography sx={{color: "#69a2ff"}}>@ Nationwide Insurance</Typography>
          <Typography style={{ marginLeft: "10px" }}>2016 - 2017</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul className="list-disc px-5">
          <li className="py-3">Re-wrote outdated junits in Spock with mocked data</li>
          <li>Implemented new features and maintained large tier-1 spring boot application</li>
        </ul>
        </AccordionDetails>
      </Accordion>

    </div></>
  )
}