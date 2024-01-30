import React from "react";
import styles from "./login.module.css";
import Image from "next/image";
import { auth, signIn } from "@/lib/auth";
import { handleGithubLogin, login } from "@/lib/actions";
import LoginForm from "@/components/LoginForm/LoginForm";

const Login = async () => {
  const session = await auth();

  console.log("Session in login", session);

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <p className={styles.title}>Login</p>
        <LoginForm />
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
