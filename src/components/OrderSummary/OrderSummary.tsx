import React from "react";
import styles from "./ordersummary.module.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const OrderSummary = () => {
  const cart = useSelector((state: any) => state.cart.cart);

  const router = useRouter();

  let total = 0;
  cart?.map((data: any) => {
    total += data.quantity * data?.basePrice;
  });

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Subtotal ({cart.length}) : ₹{total}
      </p>
      <button
        className={styles.button}
        onClick={() => {
          router.push("/shipping");
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
