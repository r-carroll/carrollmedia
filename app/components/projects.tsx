"use client";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './projects.module.scss';

export default function Projects() {
  const responsive = {
    all: {
      breakpoint: { max: 3000, min: 0 },
      items: 1
    }
  };

  return (
    <section id='projects' className="min-h-fit py-20 px-4 relative">
      <h2 className="text-4xl font-bold pb-12 text-center font-[family-name:var(--font-syne)] text-[var(--text-primary)]">
        Selected Works
      </h2>
      <div className="max-w-4xl mx-auto">
        <Carousel
          responsive={responsive}
          infinite={true}
          itemClass={styles.carouselItems}
          autoPlay={true}
          autoPlaySpeed={10000}
          containerClass="pb-12"
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="!bottom-0"
        >
          <div>
            <a href="https://apps.apple.com/us/app/travel-bingo-road-trip-bingo/id6479892388" target="_blank" className="block group">
              <div className="glass-panel p-6 rounded-3xl mx-4 transition-all duration-300 hover:bg-[var(--bg-card)] border border-[var(--glass-border)]">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <img
                    id="travel-bingo"
                    src="images/portfolio/bingo-ad.jpeg"
                    alt="travel bingo game"
                    className="w-full h-auto rounded-xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-syne)] group-hover:text-[var(--accent-primary)] transition-colors">Travel Bingo Mobile App</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      For a long time I wanted to build something fun to help pass the
                      time during long road trips on a platform accessible to everyone.
                      Travel Bingo is just that, a way to engage with friends and family
                      while enjoying new environments as you travel. It is built using
                      React Native and can be found on the Google Play Store and Apple
                      App Store
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="https://smallgroup.carrollmedia.dev/reading-tracker/" target="_blank" className="block group">
              <div className="glass-panel p-6 rounded-3xl mx-4 transition-all duration-300 hover:bg-[var(--bg-card)] border border-[var(--glass-border)]">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <img
                    id="reading-time"
                    src="images/portfolio/dash.png"
                    alt="reading dashboard"
                    className="w-full h-auto rounded-xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-syne)] group-hover:text-[var(--accent-primary)] transition-colors">Reading Time Analytics</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      A simple reading analytics dashboard built using Chart.js, Node,
                      and Postgres to visualize reading habits.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="/decibel-meter" className="block group">
              <div className="glass-panel p-6 rounded-3xl mx-4 transition-all duration-300 hover:bg-[var(--bg-card)] border border-[var(--glass-border)]">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <img
                    id="environmental"
                    src="images/portfolio/db.png"
                    alt="environmental noise dashboard"
                    className="w-full h-auto rounded-xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-syne)] group-hover:text-[var(--accent-primary)] transition-colors">Environmental Noise Dashboard</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      As an outdoor enthusiast, I highly value quiet environments. Out
                      of that passion was born a decibel dashboard built using a Raspberry
                      Pi with an Eviro HAT. The sensor data is then saved to InfluxDB
                      and visualized using Grafana.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="https://eubankselectric.com/" className="block group">
              <div className="glass-panel p-6 rounded-3xl mx-4 transition-all duration-300 hover:bg-[var(--bg-card)] border border-[var(--glass-border)]">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <img
                    id="eubanks"
                    src="images/portfolio/eubanks.JPG"
                    alt="Eubanks Electric"
                    className="w-full h-auto rounded-xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-syne)] group-hover:text-[var(--accent-primary)] transition-colors">Eubanks Electric Redesign</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      Website redesign and rebuild for local electricians, Eubanks Electric. Basic HTML with a Square payments integration using Node.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
