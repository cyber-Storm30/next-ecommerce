"use client";

import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Hero from "@/components/Hero/Hero";
import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
