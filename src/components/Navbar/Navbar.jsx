import React from "react";
import { Navbar, Container } from "react-bootstrap";
import AddForm from "../AddForm/AddForm";

const NavbarCon = () => {
  return (
    <Container>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Contact Book</Navbar.Brand>
        </Container>
        <Navbar.Brand>
          <AddForm />
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export default NavbarCon;
