import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/users/usersActionCreator";
import { Header } from "../../components/Header/Header";
import styles from "./userListPage.module.css";
import { UserList } from "../../components/UserList/UserList";
import { Button } from "../../components/Button/Button";

export const UserListPage = () => {
  const { users, isLoading } = useSelector((state) => state.users);
  const { auth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  console.log("start 1111", auth);

  const getUsers = async () => {
    await dispatch(fetchUsers());
  };

  // getUsers();

  useEffect(() => {
    console.log("start auth", auth);
    if (auth) {
      getUsers();
    }
  }, [auth]);

  return (
    <>
      <Header>
        <div className={styles.text}>
          <h1 className={styles.heading}>Наша команда</h1>
          <p className={styles.subheading}>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.{" "}
          </p>
        </div>
      </Header>
      <div className={styles.content}>
        {isLoading && <h1>Идет загрузка...</h1>}
        {users && <UserList userList={users.data} />}
        <div className={styles.buttonWrapper}>
          <Button className={styles.button} size="medium" arrow>
            Показать еще
          </Button>
        </div>
      </div>
    </>
  );
};
