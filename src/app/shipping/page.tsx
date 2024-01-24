"use client";

import React from "react";
import styles from "./shipping.module.css";
import ShippingForm from "@/components/ShippingForm/ShippingForm";
import { useRouter } from "next/navigation";

const Shipping = () => {
  console.log("Hello World");
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/payment");
  };
  return (
    <div className={styles.container}>
      <ShippingForm handleNavigation={handleNavigation} />
    </div>
  );
};

export default Shipping;
