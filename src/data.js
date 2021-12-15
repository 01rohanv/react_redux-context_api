import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import Nav from "./Nav";
import UserList from "./UserList";

const UserDetails = createContext();

const DetailsProvider = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <UserDetails.Provider value={[users, setUsers]}>
        {/* {props.children} */}
        <Nav />
        <UserList />
      </UserDetails.Provider>
    </div>
  );
};

export default DetailsProvider;
export { UserDetails };
