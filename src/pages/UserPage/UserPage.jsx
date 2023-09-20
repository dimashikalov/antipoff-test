import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import styles from "./userPage.module.css";
import userData from "../../utils/user-data";
import { ReactComponent as LetterIcon } from "./letter.svg";
import { ReactComponent as PhoneIcon } from "./phone.svg";

export const UserPage = () => {
  const { users } = useSelector((state) => state.users);
  const { id } = useParams();

  const currentUser = users?.find((user) => user.id === Number(id));

  console.log("cur", currentUser);
  return (
    <>
      <Header hasBackButton>
        {currentUser && (
          <div className={styles.member}>
            <img
              className={styles.avatar}
              src={currentUser?.avatar}
              alt="Аватар представителя команды"
            />
            <div className={styles.info}>
              <h1
                className={styles.heading}
              >{`${currentUser?.first_name} ${currentUser?.last_name}`}</h1>
              <p className={styles.subheading}>
                {currentUser?.job || userData.job}
              </p>
            </div>
          </div>
        )}
      </Header>
      <main>
        <div
          className={`${styles.wrapper}${
            (!currentUser && ` ${styles.center}`) || ""
          }`}
        >
          {(currentUser && (
            <>
              <p className={styles.description}>
                {currentUser?.description || userData.description}
              </p>
              <ul className={styles.contacts}>
                <li className={styles.contact}>
                  <LetterIcon />
                  <span>{currentUser.email}</span>
                </li>
                <li className={styles.contact}>
                  <PhoneIcon />
                  <span>{userData.phone}</span>
                </li>
              </ul>
            </>
          )) || (
            <h1 className={styles.notFound}>
              Пользователя с указанным id не существует
            </h1>
          )}
        </div>
      </main>
    </>
  );
};
