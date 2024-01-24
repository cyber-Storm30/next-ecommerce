import React from "react";
import styles from "./signup.module.css";
import Image from "next/image";
import { handleGithubLogin, register } from "@/lib/actions";
import Socials from "@/components/Socials/Socials";

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <p className={styles.title}>Signup</p>
        <form action={register} className={styles.form}>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className={styles.input}
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className={styles.input}
          />
          <button className={styles.button}>Signup</button>
        </form>
        <Socials />
      </div>
    </div>
  );
};

export default Signup;
