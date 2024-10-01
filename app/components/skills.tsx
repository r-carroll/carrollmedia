import { AiOutlineRuby } from "react-icons/ai";
import { FaAngular, FaChartArea, FaJava, FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { SiDatabricks, SiGrafana, SiMicrosoftsqlserver, SiNumpy, SiOracle } from "react-icons/si";
import { DiPostgresql, DiSpark } from "react-icons/di";

export default function Skills() {
  return (
    <section className="h-screen items-center justify-center mt-7 text-center">
      <br />
      <br />
      <h1 className="text-2xl font-bold text-white pb-7">
        The skills & tech I use to build fun things
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <div className="col-span-1 order-last md:order-first lg:order-first xl:order-first p-4 rounded-lg shadow-md flex justify-center">
          <div>
            <h2 className="text-xl pb-2">Backend</h2>
            <div className="flex items-center py-1">
              <FaJava size={40} />&nbsp;Java
            </div>
            <div className="flex items-center py-1">
              <AiOutlineRuby size={40} />&nbsp;Ruby/Rails
            </div>
            <div className="flex items-center py-1">
              <FaPython size={40} />&nbsp;Python
            </div>
          </div>
        </div>
        <div className="col-span-1 order-last md:order-first lg:order-first xl:order-first p-4 rounded-lg shadow-md flex justify-center">
          <div>
            <h2 className="text-xl pb-2">Front End</h2>
            <div className="flex items-center py-1">
              <FaReact size={40} />&nbsp;React
            </div>
            <div className="flex items-center py-1">
              <FaAngular size={40} />&nbsp;Angular
            </div>
            <div className="flex items-center py-1">
              <FaVuejs size={40} />&nbsp;Vue
            </div>
            <div className="flex items-center py-1">
              <FaChartArea size={40} />&nbsp;Chart.js
            </div>
          </div>
        </div>
        <div className="col-span-1 order-last md:order-first lg:order-first xl:order-first p-4 rounded-lg shadow-md flex justify-center">
          <div>
            <h2 className="text-xl pb-2">Data</h2>
            <div className="flex items-center py-1">
              <SiDatabricks size={40} />&nbsp;Databricks
            </div>
            <div className="flex items-center py-1">
              <SiNumpy size={40} />&nbsp;Numpy
            </div>
            <div className="flex items-center py-1">
              <DiSpark size={40} />&nbsp;Spark
            </div>
            <div className="flex items-center py-1">
              <DiPostgresql size={40} />&nbsp;Postgres
            </div>
            <div className="flex items-center py-1">
              <SiGrafana size={40} />&nbsp;Grafana
            </div>
            <div className="flex items-center py-1">
              <SiOracle size={40} />&nbsp;Oracle
            </div>
            <div className="flex items-center py-1">
              <SiMicrosoftsqlserver size={40} />&nbsp;SQL Server
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
