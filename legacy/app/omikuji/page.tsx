"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { LuPresentation } from "react-icons/lu";

export default function OmikujiProject() {
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
          Local AI in Rails: Fast, Cheap, and Predictable
        </h1>
        <p className="mb-6 text-xl text-[var(--text-secondary)]">Sentiment Omikuji - A Case Study in Local NLP</p>
        
        <div className="mb-8 text-[var(--text-secondary)] leading-relaxed text-left space-y-4">
          <p>
            Rails apps usually reach for external AI services when they need “intelligence,” but that approach can bring latency, cost, and unpredictability along for the ride. This project shows a different path: running a Japanese sentiment model directly inside a Rails app, using ONNX Runtime, background jobs, and real-time updates to keep the user experience fast and responsive.
          </p>
          <p>
            Using a small app called <strong>Sentiment Omikuji</strong> as the case study, this work walks through how the model was trained in Python, exported to ONNX, and loaded into Ruby for local inference. It also covers how Japanese text is tokenized, how the sentiment output drives a fortune generator, and why the app uses Solid Queue to keep model work off the request path.
          </p>
          <p>
            Along the way, we explore the tradeoffs of local inference versus API-based LLMs, and why classic machine learning can still be the right tool for focused problems. You&apos;ll discover a practical architecture you can adapt in your own Rails applications, plus a clearer picture of when local AI makes sense, how to keep it predictable, and what it takes to make it feel good in a real app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-[var(--accent-primary)] mb-2">The Ear</h3>
            <p className="text-sm text-[var(--text-secondary)]">BERT Analysis via fine-tuned bert-base-japanese-v3 model running natively in Ruby via ONNX.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-[var(--accent-primary)] mb-2">The Voice</h3>
            <p className="text-sm text-[var(--text-secondary)]">Markov Service generative engine performing morphological n-gram prediction for unique Japanese fortunes.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-[var(--accent-primary)] mb-2">The Shrine</h3>
            <p className="text-sm text-[var(--text-secondary)]">Solid Stack (Queue + Cable) for asynchronous inference and real-time UI updates via Turbo Streams.</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mb-8">
          <Button onClick={() => window.open('local-AI.pdf', '_blank')}>
            <LuPresentation className="mr-2 text-xl" />
            View the slides
          </Button>
          <Button onClick={() => window.open("https://github.com/r-carroll/ruby-ai-prototype", "_blank")}>
            <FaGithub className="mr-2 text-xl" />
            GitHub
          </Button>
          <Button onClick={() => window.open("https://sentiment-omikuji.fly.dev", "_blank")}>
            <FaExternalLinkAlt className="mr-2 text-lg" />
            Live Demo
          </Button>
        </div>

        <div className="relative group">
          <img
            src="images/portfolio/omikuji.svg"
            alt="Omikuji AI Project"
            className="w-full h-auto rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
            <p className="text-white font-bold text-xl font-[family-name:var(--font-syne)]">AI doesn&apos;t have to mean an LLM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
