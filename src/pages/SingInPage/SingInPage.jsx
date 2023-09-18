import React from "react";
import { Button, Input } from "../../components";
import styles from "./singInPage.module.css";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/constans";
import { useForm } from "react-hook-form";

export const SingInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
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
              {...register("email", {
                required: { value: true, message: "Заполните email" },
              })}
              placeholder="Email"
              error={errors.email}
            />
            <Input
              title="Пароль"
              type="password"
              {...register("password", {
                required: { value: true, message: "Заполните password" },
                minLength: {
                  value: 4,
                  message: "Пароль должен быть от 4 до 10 символов",
                },
                maxLength: {
                  value: 12,
                  message: "MПароль должен быть от 4 до 10 символов",
                },
              })}
              placeholder="Пароль"
              error={errors.password}
            />
            <Input
              title="Подтвердите пароль"
              type="password"
              {...register("success_password", {
                required: { value: true, message: "Заполните password" },
                minLength: {
                  value: 4,
                  message: "Пароль должен быть от 4 до 10 символов",
                },
                maxLength: {
                  value: 12,
                  message: "MПароль должен быть от 4 до 10 символов",
                },
              })}
              placeholder="Подтвердите пароль"
              error={errors.password}
            />
          </div>
          <Button type="submit" size="large">
            Войти
          </Button>
        </form>

        <div className={styles.nav}>{nav}</div>
      </div>
    </div>
  );
};
