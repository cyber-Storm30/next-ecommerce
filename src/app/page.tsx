"use client";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Hero from "@/components/Hero/Hero";
import React, { useState } from "react";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
