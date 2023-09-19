import React from "react";
import styles from "./Button.module.css";
import cn from "classnames";
import { ReactComponent as ArrowIcon } from "./arrow.svg";

export const Button = ({
  className,
  size,
  arrow = "none",
  children,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.large]: size === "large",
        [styles.medium]: size === "medium",
        [styles.small]: size === "small",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
