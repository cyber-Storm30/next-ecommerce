"use client";

import React, { useEffect } from "react";
import styles from "./loginform.module.css";
import { useFormState } from "react-dom";
import { login } from "@/lib/actions";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  // useEffect(() => {
  //   state?.success && router.push("/login");
  // }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        className={styles.input}
      />
      <input
        name="password"
        type="password"
        placeholder="Enter your password"
        className={styles.input}
      />
      <button className={styles.button}>Login</button>
      <p className={styles.error}>{state?.error}</p>
    </form>
  );
};
export default LoginForm;
