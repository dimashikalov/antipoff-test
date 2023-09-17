import React, { forwardRef } from "react";
import styles from "./Input.module.css";
import cn from "classnames";

// export const Input = ({ type, title, value, onChange }) => {
//   return (
//     <div className={styles.wrapper}>
//       <label htmlFor={title} className={styles.label}>
//         {title}
//       </label>
//       <input
//         className={styles.input}
//         name={title}
//         type={type}
//         placeholder={title}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//       />
//     </div>
//   );
// };

export const Input = forwardRef(({ className, error, ...props }, ref) => {
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
