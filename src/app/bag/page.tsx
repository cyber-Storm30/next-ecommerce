"use client";
import React from "react";
import styles from "./bag.module.css";
import CartItem from "@/components/CartItem/CartItem";
import { useSelector } from "react-redux";
import OrderSummary from "@/components/OrderSummary/OrderSummary";

const Bag = () => {
  const cart = useSelector((state: any) => state.cart.cart);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your bag</h1>
      <div className={styles.header}>
        <p>PRODUCT</p>
        <p>TOTAL</p>
      </div>
      <div className={styles.itemsWrapper}>
        <div className={styles.items}>
          {cart?.map((data: any, idx: number) => (
            <>{data?._id ? <CartItem data={data} /> : <></>}</>
          ))}
        </div>
        {cart?.length > 0 && <OrderSummary />}
      </div>
    </div>
  );
};

export default Bag;
