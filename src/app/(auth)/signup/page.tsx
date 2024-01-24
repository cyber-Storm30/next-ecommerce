import React from "react";
import styles from "./signup.module.css";
import Image from "next/image";

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <p className={styles.title}>Signup</p>
        <input placeholder="Enter your username" className={styles.input} />
        <input placeholder="Enter your email" className={styles.input} />
        <input placeholder="Enter your password" className={styles.input} />
        <button className={styles.button}>Signup</button>
        <div className={styles.socials}>
          <div className={styles.img}>
            <Image src="/github.png" fill alt="" />
          </div>
          <div className={styles.img}>
            <Image src="/google.png" fill alt="" />
          </div>
          <div className={styles.img}>
            <Image src="/facebook.png" fill alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
