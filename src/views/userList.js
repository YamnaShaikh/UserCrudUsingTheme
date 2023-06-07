import React from "react";
import { useDispatch, useSelector } from "react-redux";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { deleteUser } from "Redux/userAction";
import { editUser } from "Redux/userAction";

function UserList() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push("/admin/user");
  };

  const userList = useSelector((state) => state.userList);
  debugger;
  const users = userList.users;

  const deleteRecord = (id) => {
    // debugger;
    history.push(`/admin/users/${id}`);
    dispatch(deleteUser(id));
    history.push("/admin/userList");
  };

  const EditRecord = (id) => {
    // debugger;
    history.push(`/admin/users/${id}`);
    dispatch(editUser(id));
    history.push("/admin/user");
  };

  return (
    <>
      <Container fluid>
       
          <Row>
            <Col md="12">
              <Button className="m-2" style={{float: 'right'}} onClick={handleClick}>
                <span className="no-icon">Add User</span>
              </Button>
            </Col>
          </Row>
          <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">User List</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">UserName</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {console.log("usersdata", users)}
                    {users.map((user) => {
                      return (
                        <>
                          {console.log(user)}
                          <tr className="table-light">
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.country}</td>
                            <td>{user.city}</td>
                            <td>
                              <button
                                type="button"
                                onClick={() => EditRecord(user.id)}
                              >
                                {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
                                Edit
                              </button>
                              <button
                                type="button"
                                onClick={() => deleteRecord(user.id)}
                              >
                                {/* <FontAwesomeIcon icon={faTrashCan} /> */}
                                Delete
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserList;
