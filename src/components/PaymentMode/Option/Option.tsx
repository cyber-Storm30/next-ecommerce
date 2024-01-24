import React from "react";
import styles from "./option.module.css";

interface OptionProps {
  title: String;
}

const Option: React.FC<OptionProps> = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{props.title}</p>
      <input type="radio" className={styles.radio} />
    </div>
  );
};

export default Option;
