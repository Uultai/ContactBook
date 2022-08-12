import React, { useState, useContext } from "react";
import { usersContext } from "../../userContext";
import { Modal, Form, Button } from "react-bootstrap";

const AddForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { addUser } = useContext(usersContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  function handleValues() {
    if (!name.trim() || !email.trim() || !number.trim()) {
      alert("Some imputs are empty");
      return;
    }
    let newUser = {
      name,
      email,
      number,
    };
    addUser(newUser);
    setName("");
    setEmail("");
    setNumber("");
  }
  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Add Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phon Number</Form.Label>
              <Form.Control
                type="text"
                o
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Phon number"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleValues}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddForm;
