import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/users/usersActionCreator";

export const UserListPage = () => {
  const { users } = useSelector((state) => state.users);

  const { auth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (auth) {
      dispatch(fetchUsers());
    }
  }, []);
  return <div>Users</div>;
};
