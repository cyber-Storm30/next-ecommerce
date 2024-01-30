"use client";

import React, { useEffect } from "react";
import styles from "./signupform.module.css";
import { useFormState } from "react-dom";
import { signup } from "@/lib/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignupForm = () => {
  const [state, formAction] = useFormState(signup, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input
        name="username"
        type="text"
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
        name="password"
        type="password"
        placeholder="Enter your password"
        className={styles.input}
      />
      <button className={styles.button}>Signup</button>
      <p className={styles.error}>{state?.error}</p>
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default SignupForm;
