"use client";
import React, { useEffect } from "react";
import styles from "./order.module.css";
import OrderCard from "@/components/OrderCard/OrderCard";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import CartItem from "@/components/CartItem/CartItem";

const PlaceOrder = () => {
  const cart = useSelector((state: any) => state.cart.cart);
  const shipping = useSelector((state: any) => state.cart.shipping);
  const payment = useSelector((state: any) => state.cart.paymentMethod);

  const router = useRouter();

  let total = 0;
  cart?.map((data: any) => {
    total += data.quantity * data?.basePrice;
  });

  const handlePlaceOrder = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {shipping?.Name && (
          <OrderCard
            title="Shipping address"
            subtitle1={shipping.Name}
            subtitle2={shipping.Address}
          />
        )}
        {payment.length > 0 && (
          <OrderCard title="Payment Mode" subtitle1={payment} />
        )}
        {cart.length > 0 && (
          <div className={styles.itemsWrapper}>
            <p className={styles.cartTitle}>Items</p>
            {cart?.map((data: any, idx: number) => (
              <>{data?._id ? <CartItem data={data} /> : <></>}</>
            ))}
          </div>
        )}
      </div>
      <div className={styles.right}>
        {cart.length > 0 && (
          <div className={styles.orderContainer}>
            <p className={styles.orderTitle}>Order Summary</p>
            <div className={styles.orderItem}>
              <p>Item</p>
              <p>₹{total}</p>
            </div>
            <div className={styles.orderItem}>
              <p>Tax</p>
              <p>₹32.56</p>
            </div>
            <div className={styles.orderItem}>
              <p>Shipping</p>
              <p>₹50.00</p>
            </div>
            <div className={styles.orderItem}>
              <p>Item</p>
              <p>₹{total + 32.56 + 50.0}</p>
            </div>
            <button className={styles.button} onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaceOrder;
