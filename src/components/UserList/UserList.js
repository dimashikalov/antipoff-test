import { UserCard } from "../UserCard/UserCard";
import styles from "./userList.module.css";

export const UserList = ({ userList }) => {
  return (
    <div className={styles.wrapper}>
      {userList &&
        userList.map((user) => <UserCard key={user.id} user={user} />)}
    </div>
  );
};
