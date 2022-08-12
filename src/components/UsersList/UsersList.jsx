import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usersContext } from "../../userContext";
import { Card, Button } from "react-bootstrap";

const UsersList = () => {
  const { getUsers, users, deleteUser } = useContext(usersContext);
  useEffect(() => {
    getUsers();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      {users.map((item) => (
        <Card
          style={{ width: "18rem", margin: "4%", display: "inline-block" }}
          key={item.id}
        >
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Phon Number:
              {item.number}
            </Card.Subtitle>
            <Card.Text>Email:{item.email}</Card.Text>

            <Button
              style={{ marginLeft: "4%" }}
              variant="warning"
              onClick={() => navigate(`/edit/${item.id}`)}
            >
              Edit
            </Button>

            <Button style={{ marginLeft: "4%" }} variant="warning">
              Detail
            </Button>
            <Button
              style={{ marginLeft: "4%" }}
              variant="danger"
              onClick={() => deleteUser(item.id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default UsersList;
