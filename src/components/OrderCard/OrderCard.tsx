import React from "react";
import styles from "./orderCard.module.css";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";

interface OrderCardInterface {
  title: String;
  subtitle1: String;
  subtitle2?: String;
}

const OrderCard: React.FC<OrderCardInterface> = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.subtitle}>{props.subtitle1}</p>
      <p className={styles.subtitle}>{props.subtitle2}</p>
    </div>
  );
};

export default OrderCard;
