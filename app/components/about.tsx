"use client";

import { ReactTyped } from "react-typed";

export default function About() {
  return (
    <section id="about" className="h-screen min-h-fit flex items-center justify-center ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="col-span-1 order-last md:order-first lg:order-first xl:order-first p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-5">{"My name is Ryan,"} <br /> {" I'm "} 
            <u>
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
              loop
                        ></ReactTyped>
            </u>
            </h2>
            <p className="text-lg ">
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
          <div className="flex col-span-1 order-first md:order-last lg:order-last xl:order-last p-4 rounded-lg shadow-md items-center justify-content-center">
            <img
              src="images/me.jpg"
              alt=""
              className="w-full max-w-60 m-auto h-auto object-cover rounded-full"
            />
          </div>
        </div>
    </section>
  );
}
