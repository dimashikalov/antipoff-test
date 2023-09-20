import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoreUsers } from "../../store/users/usersActionCreator";
import { Header } from "../../components/Header/Header";
import styles from "./userListPage.module.css";
import { UserList } from "../../components/UserList/UserList";
import { Button } from "../../components/Button/Button";

export const UserListPage = () => {
  const { users, isLoading, page, total_pages } = useSelector(
    (state) => state.users
  );

  const dispatch = useDispatch();

  const getUsers = async () => {
    if (page === +total_pages) return;
    await dispatch(fetchMoreUsers(page + 1));
  };

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

        {users && <UserList userList={users} />}

        <div className={styles.buttonWrapper} onClick={getUsers}>
          <Button className={styles.button} size="medium" arrow>
            Показать еще
          </Button>
        </div>
      </div>
    </>
  );
};
