"use client";
import MenuItem from "@/components/MenuItem/MenuItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./men.module.css";
import { useRouter } from "next/navigation";

interface MenuItem {
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

const Men = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const router = useRouter();

  const handleOnClick = (id: string) => {
    router.push(`/men/${id}`);
  };

  const getData = async () => {
    const res = await axios.get("/api/menu-items/?=men");
    setMenuItems(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.container}>
      {menuItems?.map((data, idx) => (
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
  );
};

export default Men;
