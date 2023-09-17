import React, { useState } from "react";
import { Button, Entry, Input } from "../../components";
import styles from "./loginPage.module.css";
import { Link } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../../utils/constans";
import { useForm } from "react-hook-form";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [error, setError] = useState();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const nav = (
    <>
      <span>Вы новый пользователь?</span>{" "}
      <Link to={REGISTRATION_ROUTE}>Зарегистрироваться</Link>
    </>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.form_wrapper}>
        <h3 className={styles.title}>Вход</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            <Input
              title="name"
              type="text"
              {...register("name", {
                required: { value: true, message: "Заполните name" },
              })}
              placeholder="name"
              error={errors.name}
            />
            <Input
              title="email"
              type="email"
              {...register("email", {
                required: { value: true, message: "Заполните email" },
              })}
              placeholder="Email"
              error={errors.email}
            />
            <Input
              title="password"
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
              placeholder="Password"
              error={errors.password}
            />
          </div>
          <Button type="submit">Войти</Button>
        </form>

        <div className={styles.nav}>{nav}</div>
      </div>
    </div>
  );
};
