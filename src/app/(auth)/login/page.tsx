import React from "react";
import styles from "./login.module.css";
import Image from "next/image";
import { handleGithubLogin, register } from "@/lib/actions";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <p className={styles.title}>Login</p>
        <form action={register} className={styles.form}>
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
          <button className={styles.button}>Login</button>
        </form>
        {/* <Socials /> */}
        <div className={styles.socials}>
          <form action={handleGithubLogin}>
            <button className={styles.img}>
              <Image src="/github.png" fill alt="" />
            </button>
          </form>
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

export default Login;
