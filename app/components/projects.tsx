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
        <Carousel responsive={responsive} infinite={true} itemClass={styles.carouselItems}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>
    </section>
  );
}
