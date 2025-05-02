import { AiOutlineRuby } from "react-icons/ai";
import { FaAngular, FaAws, FaChartArea, FaDocker, FaGithub, FaJava, FaJenkins, FaPython, FaReact, FaRocket, FaVuejs } from "react-icons/fa";
import { SiConcourse, SiDatabricks, SiDatadog, SiExpo, SiGrafana, SiKubernetes, SiNewrelic, SiNumpy, SiOracle, SiSplunk } from "react-icons/si";
import { DiPostgresql, DiSpark } from "react-icons/di";
import { SlBookOpen } from "react-icons/sl";
import { VscAzure } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";

export default function Skills() {
  return (
    <section id="skills" className="items-center justify-center mt-7 text-center">
      <br />
      <br />
      <h1 className="text-2xl font-bold">
        The skills & tech I use to build fun things
      </h1>
      <p>(a little bit of everything. we're talking full-stack after all)</p>

      <div className="text-sm">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-3">
          <div className="col-span-1 order-last md:order-first lg:order-first xl:order-first p-4 rounded-lg shadow-md flex justify-center">
            <div>
              <h2 className="text-xl pb-2">Backend</h2>
              <div className="flex items-center py-1">
                <FaJava size={32} />&nbsp;Java
              </div>
              <div className="flex items-center py-1">
                <AiOutlineRuby size={32} />&nbsp;Ruby/Rails
              </div>
              <div className="flex items-center py-1">
                <FaPython size={32} />&nbsp;Python
              </div>
            </div>
          </div>
          <div className="col-span-1 order-last md:order-first lg:order-first xl:order-first p-4 rounded-lg shadow-md flex justify-center">
            <div>
              <h2 className="text-xl pb-2">Data</h2>
              <div className="flex items-center py-1">
                <SiDatabricks size={32} />&nbsp;Databricks
              </div>
              <div className="flex items-center py-1">
                <SiNumpy size={32} />&nbsp;Numpy
              </div>
              <div className="flex items-center py-1">
                <DiSpark size={32} />&nbsp;Spark
              </div>
              <div className="flex items-center py-1">
                <DiPostgresql size={32} />&nbsp;Postgres
              </div>
              <div className="flex items-center py-1">
                <SiGrafana size={32} />&nbsp;Grafana
              </div>
              <div className="flex items-center py-1">
                <SiOracle size={32} />&nbsp;Oracle
              </div>
              <div className="flex items-center py-1">
                <DiMsqlServer size={32} />&nbsp;SQL Server
              </div>
            </div>
          </div>
          <div className="col-span-1 order-last md:order-first lg:order-first xl:order-first p-4 rounded-lg shadow-md flex justify-center">
            <div>
              <h2 className="text-xl pb-2">Front End</h2>
              <div className="flex items-center py-1">
                <FaReact size={32} />&nbsp;React
              </div>
              <div className="flex items-center py-1">
                <FaAngular size={32} />&nbsp;Angular
              </div>
              <div className="flex items-center py-1">
                <FaVuejs size={32} />&nbsp;Vue
              </div>
              <div className="flex items-center py-1">
                <FaChartArea size={32} />&nbsp;Chart.js
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <div className="col-span-1 order-last md:order-first lg:order-first xl:order-first p-4 rounded-lg shadow-md flex justify-center">
            <div>
              <h2 className="text-xl pb-2">Mobile</h2>
              <div className="flex items-center py-1">
                <FaReact size={32} />&nbsp;React Native
              </div>
              <div className="flex items-center py-1">
                <SiExpo size={32} />&nbsp;Expo
              </div>
            </div>
          </div>
          <div className="col-span-1 order-last md:order-first lg:order-first xl:order-first p-4 rounded-lg shadow-md flex justify-center">
            <div>
              <h2 className="text-xl pb-2">Pipeline</h2>
              <div className="flex items-center py-1">
                <SiConcourse size={32} />&nbsp;Concourse
              </div>
              <div className="flex items-center py-1">
                <FaJenkins size={32} />&nbsp;Jenkins
              </div>
              <div className="flex items-center py-1">
                <FaGithub size={32} />&nbsp;GitHub Actions
              </div>
            </div>
          </div>
          <div className="col-span-1 order-last md:order-first lg:order-first xl:order-first p-4 rounded-lg shadow-md flex justify-center">
            <div>
              <h2 className="text-xl pb-2">CNP</h2>
              <div className="flex items-center py-1">
                <FaDocker size={32} />&nbsp;Docker
              </div>
              <div className="flex items-center py-1">
                <SiKubernetes size={32} />&nbsp;Kubernetes
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <div className="col-span-1 order-last md:order-first lg:order-first xl:order-first p-4 rounded-lg shadow-md flex justify-center">
            <div>
              <h2 className="text-xl pb-2">Cloud</h2>
              <div className="flex items-center py-1">
                <FaAws size={32} />&nbsp;AWS
              </div>
              <div className="flex items-center py-1">
                <VscAzure size={32} />&nbsp;Azure
              </div>
            </div>
          </div>
          <div className="col-span-1 order-last md:order-first lg:order-first xl:order-first p-4 rounded-lg shadow-md flex justify-center">
            <div>
              <h2 className="text-xl pb-2">Monitoring</h2>
              <div className="flex items-center py-1">
                <SiNewrelic size={32} />&nbsp;New Relic
              </div>
              <div className="flex items-center py-1">
                <SiDatadog size={32} />&nbsp;Datadog
              </div>
              <div className="flex items-center py-1">
                <SiSplunk size={32} />&nbsp;Splunk
              </div>
            </div>
          </div>
          <div className="col-span-1 order-last md:order-first lg:order-first xl:order-first p-4 rounded-lg shadow-md flex justify-center">
            <div>
              <h2 className="text-xl pb-2">Analytics</h2>
              <div className="flex items-center py-1">
                <SlBookOpen size={32} />&nbsp;Fullstory
              </div>
              <div className="flex items-center py-1">
                <FaRocket size={32} />&nbsp;LogRocket
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
