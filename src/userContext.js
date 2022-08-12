import React, { createContext, useState } from "react";
import axios from "axios";

export const usersContext = createContext();

const UserContextProvider = ({ children }) => {
  const API = "http://localhost:8000/contacts";
  const [users, setUsers] = useState([]);
  async function getUsers() {
    let res = await axios(API);
    setUsers(res.data);
  }

  async function addUser(newUser) {
    await axios.post(API, newUser);
    getUsers();
  }

  async function deleteUser(id) {
    await axios.delete(`${API}/${id}`);
    getUsers();
  }

  return (
    <usersContext.Provider
      value={{
        users: users,

        getUsers,
        addUser,
        deleteUser,
      }}
    >
      {children}
    </usersContext.Provider>
  );
};

export default UserContextProvider;
