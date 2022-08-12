import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from "./components/UsersList/UsersList";
import UserContextProvider from "./userContext";
import NavbarCon from "./components/Navbar/Navbar";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/users"
            element={
              <>
                <NavbarCon />
                <UsersList />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
