import React, { forwardRef, useState } from "react";
import styles from "./Input.module.css";
import cn from "classnames";
import { ReactComponent as closeEye } from "./eye.svg";

export const Input = forwardRef(({ className, error, ...props }, ref) => {
  const [passwordType, setPasswordType] = useState(props.type);
  const [isEyeClicked, setIsEyeClicked] = useState(true);

  return (
    <div className={cn(className, styles.wrapper)}>
      <label htmlFor={props.title} className={styles.label}>
        {props.title}
      </label>
      <input
        className={cn(styles.input, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && (
        <span role="alert" className={styles.errorMessage}>
          {error.message}
        </span>
      )}
    </div>
  );
});
