"use client";
import React, { useEffect, useState } from "react";
import styles from "./featuredProducts.module.css";
import axios from "axios";
import MenuItem from "../MenuItem/MenuItem";
import { useRouter } from "next/navigation";

interface Item {
  _id: String;
  __v: Number;
  updatedAt: String;
  createdAt: String;
  sizes: [];
  category: [];
  name: String;
  image: String;
  desc: String;
  basePrice: String;
}

const FeaturedProducts = () => {
  const [items, setItems] = useState<Item[]>([]);
  const router = useRouter();

  const handleOnClick = (id: string) => {
    router.push(`/men`);
  };
  const getData = async () => {
    const res = await axios.get("/api/menu-items/?=featured");
    setItems(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Featured Products</h3>
      <div className={styles.itemWrapper}>
        {items?.map((data, idx) => (
          <MenuItem
            onClick={handleOnClick}
            name={data?.name}
            image={data?.image}
            desc={data?.desc}
            basePrice={data?.basePrice}
            _id={data?._id}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
