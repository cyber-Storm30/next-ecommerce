import React from "react";
import styles from "./socials.module.css";
import { handleGithubLogin } from "@/lib/actions";
import Image from "next/image";

const Socials = () => {
  return (
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
  );
};

export default Socials;
