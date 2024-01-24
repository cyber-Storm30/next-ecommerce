import React from "react";
import styles from "./input.module.css";

interface InputProps {
  title: String;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.wrapper}>
        <p className={styles.title}>{props.title}</p>
        <input className={styles.input} />
      </div>
    </div>
  );
};

export default Input;
