"use client";

import { Button } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { LuPresentation } from "react-icons/lu";

export default function ReactNative() {
  return (
    <section className="items-center justify-center text-center">
      <h1 className="text-2xl font-bold my-3">
        Building and publishing a native, cross-platform mobile app
      </h1>
      <p className="my-3 text-lg">Visualizing Noise Pollution</p>
      <p className="my-4">
        Have a fun app idea but feel overwhelmed by development options? Choosing a framework, initializing the project, 
        and publishing in app stores can be daunting. Luckily, open-source projects like React Native and Expo make the process easier.
        In this session, you'll be guided from idea to production using React Native and Expo. 
        We'll start with React Native, showing how it can turn your cross-platform dreams into reality. 
        Then, we'll dive into Expo, demonstrating how it simplifies your workflow with automated builds and easy testing. 
        Finally, we'll cover app store publishing, so you can showcase your work to the world.
        If you're a developer of any level, an idea dreamer, or just curious about mobile app development, 
        join us to learn how to bring your app ideas to life.
      </p>
      <Button
        variant="contained"
        size="large"
        style={{ margin: "10px", minWidth: "175px", marginBottom: "20px" }}
        onClick={() => window.open('react-native.pdf', '_blank')}
      >
        <LuPresentation />
        &nbsp;View the slides
      </Button>
      <Button
        variant="contained"
        size="large"
        style={{ margin: "10px", minWidth: "175px", marginBottom: "20px" }}
        onClick={() =>
          window.open("https://github.com/r-carroll/react-native-idea2prod", "_blank")
        }
      >
        <FaGithub />
        &nbsp;GitHub
      </Button>
      <Button
        variant="contained"
        size="large"
        style={{ margin: "10px", minWidth: "175px", marginBottom: "20px" }}
        onClick={() =>
          window.open("https://apps.apple.com/us/app/travel-bingo-road-trip-bingo/id6479892388", "_blank")
        }
      >
        <FaGithub />
        &nbsp;Check out Bingo
      </Button>
      <img
        id="react-image"
        src="images/portfolio/react-dissection-dark.png"
        alt="react component dissection"
        className="pb-3 pt-3"
      />
    </section>
  );
}
