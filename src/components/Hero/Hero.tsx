import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image src="/hero.webp" fill alt="" />
      </div>
    </div>
  );
};

export default Hero;
