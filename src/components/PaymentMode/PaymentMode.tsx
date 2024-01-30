"use client";
import React, { useState } from "react";
import styles from "./paymentmode.module.css";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addPaymentMethod } from "@/redux/CartSlice";

const PaymentMode = () => {
  const [options, setOptions] = useState([
    {
      title: "Razorpay",
      isChecked: false,
    },
    {
      title: "Cash on delivery",
      isChecked: false,
    },
  ]);

  const dispatch = useDispatch();

  const router = useRouter();

  const handleOnChange = (idx: number) => {
    const updatedOptions = options.map((option, id) => {
      return {
        ...option,
        isChecked: idx === id,
      };
    });
    setOptions(updatedOptions);
  };

  const handleNavigation = () => {
    let isChecked: boolean = false;
    options.map((option: any) => {
      if (option.isChecked) {
        dispatch(addPaymentMethod(option.title));
        isChecked = true;
      }
    });

    if (isChecked) {
      router.push("/order");
    } else {
      alert("Please check at least one option");
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Payment Method</p>
      <div className={styles.optionWrapper}>
        {options.map((data, idx) => (
          <div className={styles.Optioncontainer}>
            <p className={styles.Optiontitle}>{data.title}</p>
            <input
              type="radio"
              className={styles.radio}
              checked={data.isChecked}
              onChange={() => {
                handleOnChange(idx);
              }}
            />
          </div>
        ))}
      </div>
      <button className={styles.button} onClick={handleNavigation}>
        Next
      </button>
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
