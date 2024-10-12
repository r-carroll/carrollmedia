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
    <section id='projects' className="min-h-fit items-center justify-center my-6 text-center">
      <h1 className="text-2xl font-bold text-white pb-7">Some things I have done</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        itemClass={styles.carouselItems}
        autoPlay={true}
        autoPlaySpeed={10000}
      >
        <div>
          <a
            href="https://apps.apple.com/us/app/travel-bingo-road-trip-bingo/id6479892388"
            target="_blank"
          >
            <label htmlFor="travel-bingo" className="mb-2 text-lg">
              Travel Bingo Mobile App
            </label>
            <img
              id="travel-bingo"
              src="images/portfolio/bingo-ad.jpeg"
              alt="travel bingo game"
              className="pb-3"
            />
            <p>
              For a long time I wanted to build something fun to help pass the
              time during long road trips on a platform accessible to everyone.
              Travel Bingo is just that, a way to engage with friends and family
              while enjoying new environments as you travel. It is built using
              React Native and can be found on the Google Play Store and Apple
              App Store
            </p>
          </a>
        </div>
        <div>
          <a
            href="https://smallgroup.carrollmedia.dev/reading-tracker/"
            target="_blank"
          >
            <label htmlFor="reading-time" className="mb-2 text-lg">
              Reading Time Analytics
            </label>
            <img
              id="reading-time"
              src="images/portfolio/dash.png"
              alt="reading dashboard"
              className="pb-3"
            />
            <p>
              A simple reading analytics dashboard built using Chart.js, Node,
              and Postgres to visualize reading habits.
            </p>
          </a>
        </div>
        <div>
          <a
            href="http://data.carrollmedia.dev/public-dashboards/c9a3620259a841a4afd1ed97c3c333c0"
            target="_blank"
          >
            <label htmlFor="environmental" className="mb-2 text-lg">
              Environmental Noise Dashboard
            </label>
            <img
              id="environmental"
              src="images/portfolio/db.png"
              alt="environmental noise dashboard"
              className="pb-3"
            />
            <p>
              As an outdoor enthusiast, I highly value quiet environments. Out
              of that passion was born a decibel dashboard built using a Raspberry
              Pi with an Eviro HAT. The sensor data is then saved to InfluxDB
              and visualized using Grafana.
            </p>
          </a>
        </div>
        <div>
          <a href="https://eubankselectric.com/">
            <label htmlFor="eubanks" className="mb-2 text-lg">
              Eubanks Electric Redesign
            </label>
            <img
              id="eubanks"
              src="images/portfolio/eubanks.JPG"
              alt="Eubanks Electric"
              className="pb-3"
            />
            <p>
              Website redesign and rebuild for local electricians, Eubanks Electric. Basic HTML with a Square payments integration using Node.
            </p>
          </a>
        </div>
      </Carousel>
    </section>
  );
}
