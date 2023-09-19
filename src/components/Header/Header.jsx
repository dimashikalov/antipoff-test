import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./header.module.css";
import cn from "classnames";
import { authExit } from "../../store/auth/authSlice";
import { Button } from "../Button/Button";

export const Header = ({ children, hasBackButton = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {hasBackButton && (
          <Button
            className={styles.back}
            type="button"

            // onClick={() => navigate(ROUTES.ourTeam.main)}
          >
            "Назад"
          </Button>
        )}

        {children}
        <Button
          className={styles.exit}
          size="small"
          onClick={() => dispatch(authExit())}
        >
          Выход
        </Button>
      </div>
    </header>
  );
};
