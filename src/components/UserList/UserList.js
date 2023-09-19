import { UserCard } from "../UserCard/UserCard";

export const UserList = ({ userList }) => {
  console.log("uL", userList);
  return (
    <div>
      {userList &&
        userList.map((user) => <UserCard key={user.id} user={user} />)}
    </div>
  );
};
