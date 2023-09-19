import React, { useEffect } from "react";
import { Button, Input } from "../../components";
import styles from "./loginPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { REGISTRATION_ROUTE, USERS_ROUTE } from "../../utils/constans";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registrationUser } from "../../store/auth/authActionCreators";

export const LoginPage = () => {
  const { auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (auth) {
      navigate(USERS_ROUTE);
    }
  }, [auth]);

  const onSubmit = (formData) => {
    dispatch(registrationUser(formData));
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
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputs}>
            <Input
              title="Электронная почта"
              type="email"
              {...register("email", {
                required: { value: true, message: "Заполните email" },
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: "Заполните email корректно",
                },
              })}
              placeholder="Email"
              error={errors.email}
            />
            <Input
              title="Пароль"
              type="password"
              hasIconHiding
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
          <Button type="submit" size="large">
            Войти
          </Button>
        </form>

        <div className={styles.nav}>{nav}</div>
      </div>
    </div>
  );
};
