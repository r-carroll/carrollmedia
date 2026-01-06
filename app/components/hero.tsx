"use client";

import { ReactTyped } from "react-typed";
import styles from './hero.module.scss';

export default function Hero() {
  return (
    <>
      <section id="hero" className="relative h-screen flex items-center justify-center z-10 overflow-hidden">
        <div className="text-center px-4">
          <h1 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter font-[family-name:var(--font-syne)] text-[var(--text-primary)]">
            <ReactTyped
              strings={[
                'Hello, it\'s nice to meet you',
                'Welcome, I\'m so glad you\'re here',
                'こにちわよろしくお願いします',
                'ようこそ、来てくれて嬉しいです'
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
              className="text-gradient"
            />
          </h1>
          <div className="w-24 h-1 bg-[var(--accent-primary)] mx-auto rounded-full mt-8 opacity-80" />
        </div>
      </section>

      <div className={styles.videoWrap}>
        <div className={styles.overlay} />
        <video className={styles.bgVideo} autoPlay playsInline loop muted>
          <source src='video/CM-hero.mp4' type="video/mp4" />
        </video>
      </div>
    </>
  )
}