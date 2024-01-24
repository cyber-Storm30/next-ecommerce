import PaymentMode from "@/components/PaymentMode/PaymentMode";
import React from "react";
import styles from "./payment.module.css";
import { useRouter } from "next/navigation";

const Payment = () => {
  return (
    <div className={styles.container}>
      <PaymentMode />
    </div>
  );
};

export default Payment;
