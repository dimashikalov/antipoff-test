import { Button } from "../Button/Button";
import { UserCard } from "../UserCard/UserCard";
import styles from "./userList.module.css";

export const UserList = ({ userList }) => {
  return (
    <div className={styles.wrapper}>
      {userList &&
        userList.map((user) => <UserCard key={user.id} user={user} />)}

      <Button className={styles.button} size="medium" arrow>
        Показать еще
      </Button>
    </div>
  );
};
