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
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("S");
  const dispatch = useDispatch();
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setSize(e.target.value);
  };

  useEffect(() => {
    const getSingleItemData = async () => {
      try {
        const res = await axios.get(`/api/menu-items/${slug}`);
        setItem(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSingleItemData();
  }, []);

  const handleAddToCart = () => {
    const newItem = {
      _id: item?._id,
      image: item?.image,
      name: item?.name,
      desc: item?.desc,
      basePrice: item?.basePrice,
      quantity,
      size,
    };
    dispatch(addToCart(newItem));
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={item?.image as string}
            fill
            className={styles.img}
            alt=""
          />
        </div>
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
        <select
          name="sizes"
          id="sizes"
          className={styles.sizeSelect}
          onChange={handleSelect}
        >
          {item?.sizes.map((data, idx) => (
            <option value={data} key={idx}>
              {data}
            </option>
          ))}
        </select>
        <p className={styles.price}>₹{item?.basePrice.toString()}</p>
        <button className={styles.buyButton} onClick={handleAddToCart}>
          Add to bag
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
