import React from "react";
import styles from "./entry.module.css";

export const Entry = ({ children, title, buttonText, nav }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <form>
        <div className={styles.inputs}>{children}</div>
        <button className={styles.button} type="submit">
          {buttonText}
        </button>
      </form>
      <div className={styles.nav}>{nav}</div>
    </div>
  );
};
