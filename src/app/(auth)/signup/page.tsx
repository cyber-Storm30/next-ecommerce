import React from "react";
import styles from "./signup.module.css";
import Image from "next/image";
import { handleGithubLogin, signup } from "@/lib/actions";
import { auth } from "@/lib/auth";
import SignupForm from "@/components/SignupForm/SignupForm";

const Signup = async () => {
  const session = await auth();

  console.log("Session in signup", session);

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <p className={styles.title}>Signup</p>
        <SignupForm />
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

export default Signup;
