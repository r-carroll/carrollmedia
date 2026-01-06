"use client";

import { FaAppStoreIos, FaGithub } from "react-icons/fa";
import { LuPresentation } from "react-icons/lu";

export default function ReactNative() {
  const Button = ({ onClick, children }: { onClick: () => void, children: React.ReactNode }) => (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center px-6 py-3 m-2 min-w-[175px] bg-[var(--accent-primary)] hover:bg-[var(--accent-glow)] text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
    >
      {children}
    </button>
  );

  return (
    <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
      <div className="glass-panel p-8 rounded-3xl border border-[var(--glass-border)]">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-syne)] text-gradient">
          Building and publishing a native, cross-platform mobile app
        </h1>
        <p className="mb-6 text-xl text-[var(--text-secondary)]">From idea to production</p>
        <p className="mb-8 text-[var(--text-secondary)] leading-relaxed text-left">
          Have a fun app idea but feel overwhelmed by development options? Choosing a framework, initializing the project,
          and publishing in app stores can be daunting. Luckily, open-source projects like React Native and Expo make the process easier.
          In this session, you'll be guided from idea to production using React Native and Expo.
          We'll start with React Native, showing how it can turn your cross-platform dreams into reality.
          Then, we'll dive into Expo, demonstrating how it simplifies your workflow with automated builds and easy testing.
          Finally, we'll cover app store publishing, so you can showcase your work to the world.
          If you're a developer of any level, an idea dreamer, or just curious about mobile app development,
          join us to learn how to bring your app ideas to life.
        </p>

        <div className="flex flex-wrap justify-center mb-8">
          <Button onClick={() => window.open('react-native.pdf', '_blank')}>
            <LuPresentation className="mr-2 text-xl" />
            View the slides
          </Button>
          <Button onClick={() => window.open("https://github.com/r-carroll/react-native-idea2prod", "_blank")}>
            <FaGithub className="mr-2 text-xl" />
            GitHub
          </Button>
          <Button onClick={() => window.open("https://apps.apple.com/us/app/travel-bingo-road-trip-bingo/id6479892388", "_blank")}>
            <FaAppStoreIos className="mr-2 text-xl" />
            Details: Bingo
          </Button>
          <Button onClick={() => window.open("https://apps.apple.com/us/app/circles-relationships/id6743945385", "_blank")}>
            <FaAppStoreIos className="mr-2 text-xl" />
            Details: Circles
          </Button>
        </div>

        <img
          id="react-image"
          src="images/portfolio/react-dissection-dark.png"
          alt="react component dissection"
          className="w-full h-auto rounded-xl shadow-2xl mb-4"
        />
        <p className="text-sm text-[var(--text-secondary)]">Image Credit: <a href="https://reactnative.dev/" className="underline hover:text-white">React Native</a></p>
      </div>
    </section>
  );
}
