import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./header.module.css";
import cn from "classnames";
import { authExit } from "../../store/auth/authSlice";
import { Button } from "../Button/Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export const Header = ({ children, hasBackButton = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {hasBackButton && (
          <Button
            className={styles.back}
            size="small"
            onClick={() => navigate(-1)}
          >
            {width > 640 ? "Назад" : ""}
          </Button>
        )}

        {children}
        <Button
          className={styles.exit}
          size="small"
          onClick={() => dispatch(authExit())}
        >
          {width > 640 ? "Выход" : ""}
        </Button>
      </div>
    </header>
  );
};
