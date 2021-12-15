import React, { useContext } from "react";
import { UserDetails } from "./data";

const UserList = () => {
  const [users, setUsers] = useContext(UserDetails);
  return (
    <div>
      {users.map((user) => (
        <div>
          <h1 key={user.id}>{user.title}</h1>
          <h3 key={user.userId}>{user.body}</h3>
        </div>
      ))}
    </div>
  );
};

export default UserList;
