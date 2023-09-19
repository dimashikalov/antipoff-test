import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../utils/api";
import styles from "./user.module.css";
import { ReactComponent as EmptyLike } from "./emptyLike.svg";
import { USERS_ROUTE } from "../../utils/constans";

export const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToUser = () => {
    navigate(`${USERS_ROUTE}/${user.id}`);
  };

  return (
    <div className={styles.content} onClick={navigateToUser}>
      <article className={styles.card}>
        <div className={styles.wrapper}>
          <div className={styles.person}>
            <img
              className={styles.image}
              src={user.avatar}
              alt="Аватар представителя команды"
            />
            <h2
              className={styles.heading}
            >{`${user.first_name} ${user.last_name}`}</h2>
          </div>
          <button className={styles.button} type="button">
            <EmptyLike />
          </button>
        </div>
      </article>
    </div>
  );
};
