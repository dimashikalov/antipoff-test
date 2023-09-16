import React, { useState } from "react";
import styles from "./Input.module.css";

export const Input = ({ type, title }) => {
  const [showPassword, setShowPassword] = useState(false);

  if (type === "password") {
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor={title} className={styles.label}>
        {title}
      </label>
      <input
        className={styles.input}
        name={title}
        type={type}
        placeholder={title}
      />
    </div>
  );
};
