import React, { forwardRef, useEffect, useState } from "react";
import styles from "./Input.module.css";
import cn from "classnames";
import { ReactComponent as CloseEye } from "./closeEye.svg";
import { ReactComponent as OpenEye } from "./openEye.svg";

export const Input = forwardRef(
  ({ className, error, name, type, hasIconHiding = false, ...props }, ref) => {
    const [passwordType, setPasswordType] = useState(type);
    const [isEyeClicked, setIsEyeClicked] = useState(true);

    useEffect(() => {
      if (name.includes("password")) {
        if (isEyeClicked) setPasswordType("password");
        if (!isEyeClicked) setPasswordType("text");
      }
    }, [isEyeClicked]);

    const handleEye = () => {
      setIsEyeClicked(!isEyeClicked);
    };

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
          name={name}
          type={name.includes("password") ? passwordType : type}
          {...props}
        />
        {hasIconHiding && (
          <button className={styles.button} onClick={handleEye}>
            {isEyeClicked ? <OpenEye /> : <CloseEye />}
          </button>
        )}
        {error && (
          <span role="alert" className={styles.errorMessage}>
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
