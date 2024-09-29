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
    <section className="h-screen items-center justify-center mt-4">
        <h1 className="text-2xl font-bold text-white pb-7">What I've done</h1>
        <Carousel responsive={responsive} infinite={true} itemClass={styles.carouselItems} autoPlay={true} autoPlaySpeed={5000}>
          <div>
            <a href="https://apps.apple.com/us/app/travel-bingo-road-trip-bingo/id6479892388" target='_blank'>
              <label htmlFor='travel-bingo' className='mb-2 text-lg'>Travel Bingo Mobile App</label>
              <img id='travel-bingo' src='images/portfolio/bingo-ad.jpeg' alt='travel bingo game' />
            </a>
          </div>
          <div>
          <a href="https://smallgroup.carrollmedia.dev/reading-tracker/" target='_blank'>
            <label htmlFor='reading-time' className='mb-2 text-lg'>Reading Time Analytics</label>
              <img id='reading-time' src='images/portfolio/dash.png' alt='reading dashboard' />
          </a>
          </div>
          <div>
            <a href="http://data.carrollmedia.dev/public-dashboards/c9a3620259a841a4afd1ed97c3c333c0" target='_blank'>
              <label htmlFor='environmental' className='mb-2 text-lg'>Environmental Noise Dashboard</label>
              <img id='environmental' src='images/portfolio/db.png' alt='environmental noise dashboard' />
            </a>
          </div>
          <div>
            <a href="https://eubankselectric.com/">
              <label htmlFor='eubanks' className='mb-2 text-lg'>Eubanks Electric Redesign</label>
              <img id='eubanks' src='images/portfolio/eubanks.JPG' alt='Eubanks Electric' />
            </a>
          </div>
        </Carousel>
    </section>
  );
}
