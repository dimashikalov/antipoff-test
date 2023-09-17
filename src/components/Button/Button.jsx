import React from "react";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({ size, children, ...props }) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.large]: size == "large",
        [styles.small]: size == "small",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
