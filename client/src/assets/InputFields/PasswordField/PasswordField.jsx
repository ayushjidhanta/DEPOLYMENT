import React from "react";
import styles from "./PasswordField.module.css";

const PasswordField = ({ placeholder, event }) => {
  return (
    <input type="password" placeholder={placeholder} className={styles.input} onChange={event}/>
  );
};

export default PasswordField;
