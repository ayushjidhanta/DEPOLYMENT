import React from "react";
import styles from "./TextField.module.css";

const TextField = ({ placeholder, event }) => {
  return (
    <input type="text" placeholder={placeholder} className={styles.input} onChange={event}/>
  );
};

export default TextField;
