import React from "react";
import styles from "./shippingForm.module.css";
import Input from "../Input/Input";

interface ShippingFormProps {
  handleNavigation: () => void;
}

const ShippingForm: React.FC<ShippingFormProps> = (props) => {
  const { handleNavigation } = props;
  return (
    <div className={styles.container}>
      <p className={styles.title}>Shipping Address</p>
      <div className={styles.inputWrapper}>
        <Input title="Name" />
      </div>
      <div className={styles.inputWrapper}>
        <Input title="Address" />
      </div>
      <div className={styles.inputWrapper}>
        <Input title="City" />
      </div>
      <div className={styles.inputWrapper}>
        <Input title="Postal Code" />
      </div>
      <div className={styles.inputWrapper}>
        <button className={styles.button} onClick={handleNavigation}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ShippingForm;
