import React, { useState } from "react";
import { Button, Input } from "../../components";
import styles from "./singInPage.module.css";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/constans";
import { useForm } from "react-hook-form";
import cn from "classnames";
import { ReactComponent as CloseIcon } from "./close.svg";
import { useDispatch } from "react-redux";
import { registrationUser } from "../../store/auth/authActionCreators";

export const SingInPage = () => {
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (formData) => {
    if (formData.password !== formData.success_password) {
      setError("Пароли должны совпадать");
    } else {
      dispatch(registrationUser(formData));
    }
  };

  const nav = (
    <>
      <span>Уже есть аккаунт?</span> <Link to={LOGIN_ROUTE}>Войти</Link>
    </>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.form_wrapper}>
        <h3 className={styles.title}>Регистрация</h3>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputs}>
            <Input
              title="Имя"
              type="text"
              {...register("name", {
                required: { value: true, message: "Заполните name" },
              })}
              placeholder="Имя"
              error={errors.name}
            />
            <Input
              title="Электронная почта"
              type="email"
              name="email"
              {...register("email", {
                required: { value: true, message: "Заполните email" },
              })}
              placeholder="Email"
              error={errors.email}
            />
            <Input
              title="Пароль"
              type="password"
              log="password1"
              hasIconHiding
              {...register("password", {
                required: { value: true, message: "Заполните password" },
                minLength: {
                  value: 4,
                  message: "Пароль должен быть от 4 до 10 символов",
                },
                maxLength: {
                  value: 12,
                  message: "Пароль должен быть от 4 до 10 символов",
                },
              })}
              placeholder="Пароль"
              error={errors.password}
            />
            <Input
              title="Подтвердите пароль"
              type="password"
              hasIconHiding
              {...register("success_password", {
                required: { value: true, message: "Заполните password" },
                minLength: {
                  value: 4,
                  message: "Пароль должен быть от 4 до 10 символов",
                },
                maxLength: {
                  value: 12,
                  message: "Пароль должен быть от 4 до 10 символов",
                },
              })}
              placeholder="Подтвердите пароль"
              error={errors.success_password}
            />
          </div>
          <Button type="submit" size="large">
            Войти
          </Button>
        </form>

        <div className={styles.nav}>{nav}</div>

        {error && (
          <div className={cn(styles.error, styles.panel)} role="alert">
            {error}
            <button
              onClick={() => setError(undefined)}
              className={styles.close}
            >
              <CloseIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
