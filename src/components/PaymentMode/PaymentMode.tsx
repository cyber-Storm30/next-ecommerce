"use client";
import React from "react";
import styles from "./paymentmode.module.css";
import Option from "./Option/Option";
import { useRouter } from "next/navigation";

const PaymentMode = () => {
  const options = [
    {
      title: "Razorpay",
      isChecked: false,
    },
    {
      title: "Cash on delivery",
      isChecked: false,
    },
  ];
  const router = useRouter();

  return (
    <div className={styles.container}>
      <p className={styles.title}>Payment Method</p>
      <div className={styles.optionWrapper}>
        {options.map((data, idx) => (
          <Option title={data?.title} />
        ))}
      </div>
      <button className={styles.button}>Next</button>
      <button
        className={styles.buttonSecondary}
        onClick={() => {
          router.push("/shipping");
        }}
      >
        Back
      </button>
    </div>
  );
};

export default PaymentMode;
