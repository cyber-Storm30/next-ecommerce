import React, { useState } from "react";
import styles from "./shippingForm.module.css";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import { addShippingDetails } from "@/redux/CartSlice";

interface ShippingFormProps {
  handleNavigation: () => void;
}

const ShippingForm: React.FC<ShippingFormProps> = (props) => {
  const { handleNavigation } = props;
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const dispatch = useDispatch();

  const navigation = () => {
    const addressObj = {
      Name: name,
      Address: address + " " + city + " " + code,
    };
    dispatch(addShippingDetails(addressObj));
    handleNavigation();
  };
  return (
    <div className={styles.container}>
      <p className={styles.title}>Shipping Address</p>
      <div className={styles.inputWrapper}>
        <Input title="Name" setInput={setName} />
      </div>
      <div className={styles.inputWrapper}>
        <Input title="Address" setInput={setAddress} />
      </div>
      <div className={styles.inputWrapper}>
        <Input title="City" setInput={setCity} />
      </div>
      <div className={styles.inputWrapper}>
        <Input title="Postal Code" setInput={setCode} />
      </div>
      <div className={styles.inputWrapper}>
        <button className={styles.button} onClick={navigation}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ShippingForm;
