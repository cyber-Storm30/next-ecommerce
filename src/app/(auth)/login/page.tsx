import React from "react";
import styles from "./login.module.css";
import Image from "next/image";
import { auth, signIn } from "@/lib/auth";

const Login = async () => {
  const session = await auth();

  const handleGithubLogin = async () => {
    "use server";
    const res = await signIn("github");
    console.log("res", res);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <p className={styles.title}>Login</p>
        <input placeholder="Enter your email" className={styles.input} />
        <input placeholder="Enter your password" className={styles.input} />
        <button className={styles.button}>Login</button>
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
