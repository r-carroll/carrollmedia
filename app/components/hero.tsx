"use client";

import { ReactTyped } from "react-typed";
import styles from './hero.module.scss';

export default function Hero() {
  return (
    <>
    <section id="hero" className="h-screen flex items-center justify-center">
    <h1 className="mb-8 text-6xl font-semibold tracking-tighter">
      {
        <ReactTyped
        strings={[
          'Hello, it\'s nice to meet you',
          'Welcome, I\'m so glad you\'re here',
          'こにちわよろしくお願いします',
          'ようこそ、来てくれて嬉しいです'
        ]}
        typeSpeed={60}
        loop
      >
      </ReactTyped>
      }
    </h1>
    <div className="my-8">
    </div>
  </section>
  <div className={styles.videoWrap}>
				<video className={styles.bgVideo} autoPlay loop muted>
					<source src='video/CM-hero.mp4' type="video/mp4"></source>
				</video>
	</div>
  </>
  )
}