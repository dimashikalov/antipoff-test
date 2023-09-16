import React from "react";
import { Entry, Input } from "../../components";
import styles from "./loginPage.module.css";
import { Link } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../../utils/constans";

export const LoginPage = () => {
  const nav = (
    <>
      <span>Вы новый пользователь?</span>{" "}
      <Link to={REGISTRATION_ROUTE}>Зарегистрироваться</Link>
    </>
  );

  return (
    <div className={styles.wrapper}>
      <Entry title={"Вход"} buttonText={"Войти"} nav={nav}>
        <Input title="Имя" type="text" />
        <Input title="email" type="email" />
        <Input title="password" type="password" />
      </Entry>
    </div>
  );
};
