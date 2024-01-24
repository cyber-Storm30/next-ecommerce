import React from "react";
import styles from "./cartitem.module.css";
import Image from "next/image";

interface CartItemProps {
  data: {
    _id: String;
    image: String;
    name: String;
    desc: String;
    category: [];
    basePrice: Number;
    quantity: Number;
    __v: Number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image src={data?.image as string} alt="" fill />
      </div>
      <div className={styles.wrapper}>
        <p className={styles.title}>{data?.name}</p>
        <div className={styles.sizeAndQuantityWrapper}>
          {/* <select name="sizes" id="sizes" className={styles.sizeSelect}>
            {data?.sizes.map((d, idx) => (
              <option value={d}>{d}</option>
            ))}
          </select> */}
          <div className={styles.quantity}>
            <button className={styles.quantityButton}>-</button>
            <p>{data?.quantity.toString()}</p>
            <button className={styles.quantityButton}>+</button>
          </div>
        </div>
        <p className={styles.price}>₹{data.basePrice.toString()}</p>
        <p className={styles.extraText}>14 days return available</p>
      </div>
    </div>
  );
};

export default CartItem;
