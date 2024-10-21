"use client";

import { Button } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { LuPresentation } from "react-icons/lu";

export default function DecibelMeter() {
  return (
    <section className="items-center justify-center text-center">
      <h1 className="text-2xl font-bold my-3">
        Bringing ideas to life with DIY IoT
      </h1>
      <p className="my-3 text-lg">Visualizing Noise Pollution</p>
      <p className="my-4">
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
      <Button
        variant="contained"
        size="large"
        style={{ margin: "10px", minWidth: "175px", marginBottom: "20px" }}
        onClick={() => window.open('DIY-IoT.pdf', '_blank')}
      >
        <LuPresentation />
        &nbsp;View the slides
      </Button>
      <Button
        variant="contained"
        size="large"
        style={{ margin: "10px", minWidth: "175px", marginBottom: "20px" }}
        onClick={() =>
          window.open("https://github.com/r-carroll/decibel-meter", "_blank")
        }
      >
        <FaGithub />
        &nbsp;GitHub
      </Button>
      <img
        id="environmental"
        src="images/portfolio/db.png"
        alt="environmental noise dashboard"
        className="pb-3"
      />
    </section>
  );
}
