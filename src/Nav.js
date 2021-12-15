import React, { useContext } from "react";
import { UserDetails } from "./data";

const Nav = () => {
  const [users, setUsers] = useContext(UserDetails);
  return (
    <div>
      <h1>Number of Users:{users.length}</h1>
    </div>
  );
};

export default Nav;
