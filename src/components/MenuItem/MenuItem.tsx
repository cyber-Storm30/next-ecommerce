import React from "react";
import styles from "./menuitem.module.css";
import Image from "next/image";

interface MenuItemProps {
  onClick: (id: string) => void;
  _id: String;
  name: String;
  image: String;
  desc: String;
  basePrice: String;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { _id, name, image, desc, basePrice, onClick } = props;

  const truncatedText = desc.length > 100 ? `${desc.slice(0, 100)}...` : desc;
  const truncatedTitle = name.length > 50 ? `${name.slice(0, 20)}...` : name;

  return (
    <div
      className={styles.container}
      onClick={() => {
        onClick(_id.toString());
      }}
    >
      <div className={styles.imgWrapper}>
        <Image src={image?.toString()} fill alt="" />
      </div>
      <div className={styles.item}>
        <p className={styles.title}>{truncatedTitle}</p>
        {/* <p className={styles.desc}>{truncatedText}</p> */}
        <p className={styles.price}>${basePrice}</p>
        <p className={styles.otherText}>FREE Delivery</p>
      </div>
    </div>
  );
};

export default MenuItem;
