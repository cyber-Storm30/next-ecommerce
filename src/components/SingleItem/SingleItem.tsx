"use client";
import React, { useEffect, useState } from "react";
import styles from "./singleItem.module.css";
import axios from "axios";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/CartSlice";

interface MyItemProps {
  _id: String;
  image: String;
  name: String;
  desc: String;
  category: [];
  basePrice: Number;
  sizes: [];
  createdAt: String;
  updatedAt: String;
  __v: Number;
}

interface SingleItemProps {
  slug: string;
}

const SingleItem: React.FC<SingleItemProps> = ({ slug }) => {
  const [item, setItem] = useState<MyItemProps>();
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const getSingleItemData = async () => {
    try {
      const res = await axios.get(`/api/menu-items/${slug}`);
      setItem(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSingleItemData();
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={item?.image as string} fill className={styles.img} alt="" />
      </div>
      <div className={styles.details}>
        <p className={styles.title}>{item?.name}</p>
        <p className={styles.desc}>{item?.desc}</p>
        <div className={styles.catagory}>
          Categories -{" "}
          {item?.category.map((data, idx) => (
            <p key={idx}>{data}</p>
          ))}
        </div>
        <div className={styles.quantity}>
          <button
            className={styles.quantityButton}
            onClick={handleDecreaseQuantity}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className={styles.quantityButton}
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
        </div>
        <select name="sizes" id="sizes" className={styles.sizeSelect}>
          {item?.sizes.map((data, idx) => (
            <option value={data}>{data}</option>
          ))}
        </select>
        <p className={styles.price}>{item?.basePrice.toString()}</p>
        <button className={styles.buyButton} onClick={handleAddToCart}>
          Add to bag
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
