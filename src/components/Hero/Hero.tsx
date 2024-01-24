import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Carousel
        showArrows
        showThumbs={false}
        showStatus={false}
        className={styles.carousel}
      >
        <div className={styles.imgWrapper}>
          <Image src="/banner2.png" fill alt="" />
        </div>
        <div className={styles.imgWrapper}>
          <Image src="/banner1.png" fill alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
